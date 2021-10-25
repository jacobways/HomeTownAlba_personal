import axios from 'axios';
import react, { useState, useEffect } from 'react'

const { kakao } = window;

export default function Map () {

  useEffect(() => {

    // // 일자리 정보 모두 불러오기
    // axios.get('http://localhost:5000/job')
    // .then(console.log)

    //-------------------- 지도 생성 (필수)
    
    //(필수)지도를 담을 영역의 DOM 레퍼런스
    const container = document.getElementById('map');  
    
    //(필수)지도를 생성할 때 필요한 기본 옵션
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3  //지도의 레벨(확대, 축소 정도)
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
    geocoder.addressSearch('서울특별시 서초구 서초동 서초대로 396', function(result, status) {

    // 정상적으로 검색이 완료됐으면 
    if (status === kakao.maps.services.Status.OK) {

      let coords = new kakao.maps.LatLng(result[0].y, result[0].x);

      // 결과값으로 받은 위치를 마커로 표시합니다
      let marker = new kakao.maps.Marker({
          map: map,
          position: coords
      });

      // 인포윈도우로 장소에 대한 설명을 표시합니다
      let infowindow = new kakao.maps.InfoWindow({
          content: '<div style="width:150px;text-align:center;padding:6px 0;">코드스테이츠</div>'
      });
      infowindow.open(map, marker);

      // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
      // map.setCenter(coords);
  } 
  });    

   


    // 마커 포지션---------------------------------
    let positions = [
      {
          title: '카카오', 
          latlng: new kakao.maps.LatLng(33.450705, 126.570677)
      },
      {
          title: '생태연못', 
          latlng: new kakao.maps.LatLng(33.450936, 126.569477)
      },
      {
          title: '텃밭', 
          latlng: new kakao.maps.LatLng(33.450879, 126.569940)
      },
      {
          title: '근린공원',
          latlng: new kakao.maps.LatLng(33.451393, 126.570738)
      }
    ];
    
  // 마커 이미지의 이미지 주소입니다
  var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
      
  for (var i = 0; i < positions.length; i ++) {
      
      // 마커 이미지의 이미지 크기 입니다
      var imageSize = new kakao.maps.Size(24, 35); 
      
      // 마커 이미지를 생성합니다    
      var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
      
      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
          map: map, // 마커를 표시할 지도
          position: positions[i].latlng, // 마커를 표시할 위치
          title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          image : markerImage // 마커 이미지 
      });
  }



  }, []); 

  return (
    <div id='map' style={{
      width: '800px', 
      height: '600px'
    }}>
    </div>
  )
}
