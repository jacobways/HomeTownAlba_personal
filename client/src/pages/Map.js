/*global kakao*/
import axios from "axios";
import React, { useState, useEffect } from "react";

const { kakao } = window;
export default function Map() {

  const [jobSeekerId, setJobSeekerId] = useState(0);
  const [applyStatus, setApplyStatus] = useState({})  // 지원 여부를 저장하는 곳

  const CheckApplyStatus = (idx) => {
    setApplyStatus({...applyStatus, [idx]:true})

  }

  const UnCheckApplyStatus = (idx) => {
    setApplyStatus({...applyStatus, [idx]:false})
  }

  // 지원 여부를 미리 찾아내는 곳
  useEffect(() => {
    axios.get("http://localhost:5000/job")
    .then((res) => {
      return res.data.data;
    })
    .then((data)=>{
      for (let i=0; i<data.length; i++) {
        axios.get("http://localhost:5000/applicant", {params: {jobId: data[i].id, jobSeekerId}})
        .then((applicant)=>{
          if(applicant.data.data) {
            CheckApplyStatus(i)
          } 
        })
      }
    })
  }, [])

  useEffect(() => {
    axios
      .get("http://localhost:5000/job")
      .then(res => {
        return res.data.data;
      })
      .then(data => {
        //-------------------- 지도 생성 (필수)
        //(필수)지도를 담을 영역의 DOM 레퍼런스

        const container = document.getElementById("map");

        //(필수)지도를 생성할 때 필요한 기본 옵션
        const options = {
          center: new kakao.maps.LatLng(33.450701, 126.570667),
          level: 3, //지도의 레벨(확대, 축소 정도)
        };

        //(필수)지도 생성 및 객체 리턴
        const map = new kakao.maps.Map(container, options);

        // --------------- 스크롤 기능

        let mapTypeControl = new kakao.maps.MapTypeControl();

        map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

        let zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

        //----------------------------주소-좌표 변환
        // 주소-좌표 변환 객체를 생성합니다
        let geocoder = new kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다

        for (let i = 0; i < data.length; i++) {
          geocoder.addressSearch(data[i].location, function (result, status) {
            // 정상적으로 검색이 완료됐으면
            if (status === kakao.maps.services.Status.OK) {
              let coords = new kakao.maps.LatLng(result[0].y, result[0].x);

              let marker;
              if (applyStatus[i]) {

                let imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

                let imageSize = new kakao.maps.Size(24, 35);

                let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

                marker = new kakao.maps.Marker({
                  map: map,
                  position: coords,
                  clickable: true, // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
                  image : markerImage // 마커 이미지 
                });
                
              } else {

                        // 결과값으로 받은 위치를 마커로 표시합니다
              marker = new kakao.maps.Marker({
                map: map,
                position: coords,
                clickable: true, // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
              });

              }
              




              // marker.setClickable(true);

              // 마커에 마우스오버 이벤트를 등록합니다
              kakao.maps.event.addListener(marker, "mouseover", function () {
                // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
                infowindowHover.open(map, marker);
              });
              // 마커에 마우스아웃 이벤트를 등록합니다
              kakao.maps.event.addListener(marker, "mouseout", function () {
                // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
                infowindowHover.close();
              });

              // 인포윈도우로 장소에 대한 설명을 표시합니다(마우스 오버)
              let infowindowHover = new kakao.maps.InfoWindow({
                content: `<div style="width:230px;text-align:center;padding:6px 0;"><div>근무요일 : ${JSON.parse(
                  data[i].day
                )}</div><div>하루 근무시간 : ${
                  data[i].time
                }시간</div><div>월급여 : ${
                  data[i].monthlyWage
                }</div><div>포지션 : ${data[i].position}</div></div>`,
              });

              let contentClick = document.createElement("div");
              contentClick.style.cssText =
                "width: 230px; text-align:center; padding:6px 0; 1px 0;";
              let companyName = document.createElement("div");
              companyName.textContent = `회사명 : ${data[i].companyId}`;
              let day = document.createElement("div");
              day.textContent = `근무요일 : ${JSON.parse(data[i].day)}`;
              let time = document.createElement("div");
              time.textContent = `근무시간 : ${data[i].startTime}~${data[i].endTime}(${data[i].time}시간)`;
              let hourlyWage = document.createElement("div");
              hourlyWage.textContent = `시급 : ${data[i].hourlyWage}`;
              let monthlyWage = document.createElement("div");
              monthlyWage.textContent = `예상 월급여 : ${data[i].monthlyWage}`;
              let position = document.createElement("div");
              position.textContent = `포지션 : ${data[i].position}`;
              let btn;

              if (applyStatus[i]) {
                btn = document.createElement("button");
                btn.textContent = "지원 취소하기";
                btn.onclick = () => {
                  axios
                    .delete("http://localhost:5000/applicant", {
                      params : {jobId: data[i].id, jobSeekerId}
                    }, {withCredentials: true})
                    .then(res => {
                      UnCheckApplyStatus(i)
                      console.log(res);
                    })
                    .catch();
                };
              } else {
                btn = document.createElement("button");
                btn.textContent = "지원하기";
                btn.onclick = () => {
                  axios
                    .post("http://localhost:5000/applicant", {
                      jobId: data[i].id,
                      jobSeekerId,
                    })
                    .then(res => {
                      CheckApplyStatus(i)
                      console.log(res);
                    })
                    .catch();
                };
              }

              contentClick.append(
                companyName,
                day,
                time,
                hourlyWage,
                monthlyWage,
                position,
                btn
              );

              let infowindowClick = new kakao.maps.InfoWindow({
                content: contentClick,
                removable: true,
              });
              // 마커에 클릭이벤트를 등록합니다
              kakao.maps.event.addListener(marker, "click", function () {
                // 마커 위에 인포윈도우를 표시합니다
                infowindowClick.open(map, marker);
              });
              // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
              map.setCenter(coords);
            }
          });
        }
      });
  }, [applyStatus]);

  return (
    <div
      id="map"
      style={{
        width: "100%",
        height: "100%",
      }}
    ></div>
  );
}
