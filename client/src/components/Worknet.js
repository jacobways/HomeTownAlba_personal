import React, { useEffect, useState } from "react";
import axios from "axios";
import XMLParser from "react-xml-parser";

function Worknet() {
  //    워크넷 API 기준 받아올수 있는 정보를 바탕으로 state 설정 -> Job Model field와 살짝 다름
  const [WorknetInfo, setWorknetInfo] = useState([]);
  const [CompanyName, setCompanyName] = useState([]);
  const [Period, setPeriod] = useState([]);
  const [MinSalary, setMinSalary] = useState([]);
  const [MaxSalary, setMaxSalary] = useState([]);
  const [Location, setLocation] = useState([]);
  const [Position, setPosition] = useState([]);
  useEffect(() => {
    const jobInfoArray = [
      { companyName: "test" },
      { companyName: "test1" },
      { companyName: "test2" },
    ];

    axios.post("http://localhost:5000/job/test", jobInfoArray).then((res) => {
      console.log(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:5000/worknet").then((res) => {
      //   console.log(res.data);
      let totalResult = new XMLParser().parseFromString(res.data);
      let wantedResult = totalResult.children.filter((result) => {
        return result.name === "wanted";
      });
      console.log(wantedResult);
      let companyNameInfo = [...CompanyName];
      let PeriodInfo = [...Period];
      let MinSalaryInfo = [...MinSalary];
      let MaxSalaryInfo = [...MaxSalary];
      let LocationInfo = [...Location];
      let PositionInfo = [...Position];
      let newWorknetINfo = [...WorknetInfo];
      let WorknetUnit = {};
      wantedResult.forEach((info) => {
        // companyNameInfo.push(info.children[1].value); //companyname
        // PeriodInfo.push(info.children[8].value); //Period
        // MinSalaryInfo.push(info.children[5].value); //MinSalary
        // MaxSalaryInfo.push(info.children[6].value); //MaxSalary
        // LocationInfo.push(info.children[19].value); //Location
        // PositionInfo.push(info.children[2].value); //Position
        WorknetUnit = {
          company: info.children[1].value,
          period: info.children[8].value,
          minsalary: info.children[5].value,
          maxsalary: info.children[6].value,
          location: info.children[19].value,
          position: info.children[2].value,
        };
        newWorknetINfo.push(WorknetUnit);
      });
      //   setCompanyName(companyNameInfo);
      //   setPeriod(PeriodInfo);
      //   setMinSalary(MinSalaryInfo);
      //   setMaxSalary(MaxSalaryInfo);
      //   setLocation(LocationInfo);
      //   setPosition(PositionInfo);
      setWorknetInfo(newWorknetINfo);
      console.log(WorknetInfo);
    });
  }, []);
  return (
    <div>
      <h1>워크넷 API를 바탕으로 가져온 공고 정보입니다.</h1>
      {WorknetInfo &&
        WorknetInfo.map((info, index) => {
          return (
            <table
              key={index}
              style={{
                border: "1px solid black",
                padding: "10px",
                margin: "10px",
              }}
            >
              <tr>회사이름 : {info.company}</tr>
              <tr>회사직무 : {info.position}</tr>
              <tr>회사연봉 : {info.minsalary}</tr>
              <tr>근무기간형태 : {info.period}</tr>
              <tr>근무위치 : {info.location}</tr>
            </table>
          );
        })}
    </div>
  );
}

export default Worknet;
