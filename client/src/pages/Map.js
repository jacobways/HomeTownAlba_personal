/*global kakao*/
import axios from "axios";
import React, { useState, useEffect } from "react";

const { kakao } = window;
export default function Map() {

  const [jobSeekerId, setJobSeekerId] = useState(0);
  const [applyStatus, setApplyStatus] = useState({})  // 지원 여부를 저장하는 곳

  const [startTimeFilter, setStartTimeFilter] = useState()
  const [endTimeFilter, setEndTimeFilter] = useState()
  const [minWageFilter, setMinWageFilter] = useState()
  const [maxWageFilter, setMaxWageFilter] = useState()

  const [applyLocation, setApplyLocation] = useState([]) // 지원시 해당 위치를 지도에 띄우도록 하기 위한 state

  const CheckApplyStatus = (idx) => {
    setApplyStatus({...applyStatus, [idx]:true})

  }

  const UnCheckApplyStatus = (idx) => {
    setApplyStatus({...applyStatus, [idx]:false})
  }

  const startTimeFilterHandler = (event) => {
    setStartTimeFilter(event.target.value)
  }

  const endTimeFilterHandler = (event) => {
    setEndTimeFilter(event.target.value)
  }

  const minWageFilterHandler = (event) => {
    setMinWageFilter(event.target.value)
  }

  const maxWageFilterHandler = (event) => {
    setMaxWageFilter(event.target.value)
  }

  // 지원 여부를 미리 확인하여 applyStatus에 저장
  useEffect(() => {
    axios.get("http://localhost:5000/job")
    .then((res) => {
      console.log("위 useEffect 발동")
      if(startTimeFilter && endTimeFilter) {
        return res.data.data.filter((job)=>{
          return job.startTime>=startTimeFilter && job.endTime<=endTimeFilter
        })
      } else if (startTimeFilter) {
        return res.data.data.filter((job)=>{
          return job.startTime>=startTimeFilter
        })
      } else if (endTimeFilter) {
        return res.data.data.filter((job)=>{
          return job.endTime<=endTimeFilter
        })
      } else { 
        return res.data.data;
      }
    })
    .then((res) => {
      if(minWageFilter && maxWageFilter) {
        return res.filter((job)=>{
          return minWageFilter<=job.monthlyWage && job.monthlyWage<=maxWageFilter
        })
      } else if (minWageFilter) {
        return res.filter((job)=>{
          return minWageFilter<=job.monthlyWage
        })
      } else { 
        return res;
      }
    })
    .then((data)=>{
      for (let i=0; i<data.length; i++) {
        axios.get("http://localhost:5000/applicant", {params: {jobId: data[i].id, jobSeekerId}})
        .then((applicant)=>{
          if(applicant.data.data) {
            console.log('applicant.data.data', applicant.data.data)
            CheckApplyStatus(i)
          } else {
            UnCheckApplyStatus(i)
          }
        })
      }
      return data;
    })
    .then(data=>console.log('여기 data', data))
  }, [startTimeFilter, endTimeFilter, minWageFilter, maxWageFilter])

  useEffect(() => {
    axios
      .get("http://localhost:5000/job")
      .then((res) => {
        console.log("아래 useEffect 발동")
        if(startTimeFilter && endTimeFilter) {
          return res.data.data.filter((job)=>{
            return job.startTime>=startTimeFilter && job.endTime<=endTimeFilter
          })
        } else if (startTimeFilter) {
          return res.data.data.filter((job)=>{
            return job.startTime>=startTimeFilter
          })
        } else if (endTimeFilter) {
          return res.data.data.filter((job)=>{
            return job.endTime<=endTimeFilter
          })
        } else { 
          return res.data.data;
        }
      })
      .then((res) => {
        if(minWageFilter && maxWageFilter) {
          return res.filter((job)=>{
            return minWageFilter<=job.monthlyWage && job.monthlyWage<=maxWageFilter
          })
        } else if (minWageFilter) {
          return res.filter((job)=>{
            return minWageFilter<=job.monthlyWage
          })
        } else { 
          return res;
        }
      })
      .then(data => {
        //-------------------- 지도 생성 (필수)
        
        //(필수)지도를 담을 영역의 DOM 레퍼런스
        const container = document.getElementById("map");

        //(필수)지도를 생성할 때 필요한 기본 옵션
        const options = {
          center: new kakao.maps.LatLng(37.5, 127.0),
          level: 3, //지도의 레벨(확대, 축소 정도)
        };

        //(필수)지도 생성 및 객체 리턴
        const map = new kakao.maps.Map(container, options);

        // --------------- 스크롤 기능

        let mapTypeControl = new kakao.maps.MapTypeControl();

        map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

        let zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);


        // --------------- 지도에서 현재 위치를 띄우기 

        // 지원 또는 지원 취소시 지도가 해당 일자리로 이동하므로, 이 경우 현재 위치를 띄우지 않기
        if (applyLocation.length===0) {
          if (navigator.geolocation) { //HTML5의 geolocation으로 사용할 수 있는지 확인합니다 
            
              
            // GeoLocation을 이용해서 접속 위치를 얻어옵니다
            navigator.geolocation.getCurrentPosition(function(position) {
                
                let lat = position.coords.latitude, // 위도
                    lon = position.coords.longitude; // 경도
                
                let locPosition = new kakao.maps.LatLng(lat, lon) // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
        
                
                // 지도 표시
                map.setCenter(locPosition);
                    
              });
            
          } else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
            
            let locPosition = new kakao.maps.LatLng(37.5, 127.0)
            map.setCenter(locPosition);
          }
        } else {  // 지원 또는 지원취소한 일자리로 지도가 이동
          let locPosition = new kakao.maps.LatLng(applyLocation[0], applyLocation[1])
          map.setCenter(locPosition);
        }


        //----------------------------주소-좌표 변환
        // 주소-좌표 변환 객체를 생성합니다
        let geocoder = new kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        for (let i = 0; i < data.length; i++) {
          geocoder.addressSearch(data[i].location, function (result, status) {
            
            if (status === kakao.maps.services.Status.OK) {  // 정상적으로 검색이 완료됐으면
              let coords = new kakao.maps.LatLng(result[0].y, result[0].x);

              let marker;

              // 지원요청이 된 일자리의 경우, 마커가 노란색으로 표시됩니다.
              if (applyStatus[i]) {

                let imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

                let imageSize = new kakao.maps.Size(24, 35);

                let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

                // 결과값으로 받은 위치를 마커로 표시합니다
                marker = new kakao.maps.Marker({
                  map: map,
                  position: coords,
                  clickable: true, // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
                  image : markerImage // 마커 이미지 
                });
                
              } else {  // 지원요청이 되지 않은 일자리의 경우 기본 마커를 표시합니다.

              // 결과값으로 받은 위치를 마커로 표시합니다
              marker = new kakao.maps.Marker({
                map: map,
                position: coords,
                clickable: true, // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
              });

              }
              

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

              // 마커에 Hover 이벤트 등록 : 인포윈도우에 정보 제공
              let infowindowHover = new kakao.maps.InfoWindow({
                content: `<div style="width:230px;text-align:center;padding:6px 0;"><div>근무요일 : ${JSON.parse(
                  data[i].day
                )}</div><div>하루 근무시간 : ${data[i].startTime}~${data[i].endTime}
                </div><div>월급여 : ${
                  data[i].monthlyWage
                }</div><div>포지션 : ${data[i].position}</div></div>`,
              });

              // 마커에 click 이벤트 등록 : 인포윈도우에 정보 제공 및 일자리 지원 가능
              let contentClick = document.createElement("div");
              contentClick.style.cssText =
                "width: 230px; text-align:center; padding:6px 0; 1px 0;";
              let companyName = document.createElement("div");
              companyName.textContent = `회사명 : ${data[i].companyName}`;
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

              if (applyStatus[i]) {  // 이미 지원한 일자리는 '지원 취소' 버튼이 등장
                btn = document.createElement("button");
                btn.textContent = "지원 취소하기";
                btn.onclick = () => {
                  axios
                    .delete("http://localhost:5000/applicant", {
                      params : {jobId: data[i].id, jobSeekerId}
                    }, {withCredentials: true})
                    .then(res => {
                      UnCheckApplyStatus(i)
                      setApplyLocation([result[0].y, result[0].x])
                    })
                    .catch();
                };
              } else {  // 지원하지 않은 일자리는 '지원하기' 버튼이 등장
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
                      setApplyLocation([result[0].y, result[0].x])
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
              // map.setCenter(coords);
            }
          });
        }
      });
  }, [applyStatus, startTimeFilter, endTimeFilter, minWageFilter, maxWageFilter, applyLocation]);

  return (
    <>
      <div
        id="map"
        style={{
          width: "100%",
          height: "80%",
        }}
      ></div>
      <div>
        <h2>검색 필터 기능</h2>
        <label>최소 월급 : </label>
        <input         
        name="minWage"
        type="text"
        list="minWage"
        onChange={minWageFilterHandler}
        />
        <datalist id="minWage">
          <option value="0"></option>
          <option value="300000"></option>
          <option value="600000"></option>
          <option value="900000"></option>
          <option value="1200000"></option>
        </datalist>
        <label>최대 월급 : </label>
        <input         
        name="maxWage"
        type="text"
        list="maxWage"
        onChange={maxWageFilterHandler}
        />
        <datalist id="maxWage">
          <option value="300000"></option>
          <option value="600000"></option>
          <option value="900000"></option>
          <option value="1200000"></option>
          <option value="1500000"></option>
        </datalist>
        <label>시작 시간 : </label>
        <input         
        name="startTime"
        type="time"
        list="startTime"
        onChange={startTimeFilterHandler}
        />
        <label>끝 시간 : </label>
        <input         
        name="startTime"
        type="time"
        list="startTime"
        onChange={endTimeFilterHandler}
        />
      </div>
    </>
  );
}
