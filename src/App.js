/* eslint-disable */

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let post = "강남 우동 맛집";
  let [title, titleChange] = useState([
    "남자 코트 추천",
    "강남 우동맛집",
    "파이썬독학",
  ]);
  let [logo, setLogo] = useState("ReactBlog");
  let [num, numChange] = useState([0, 0, 0]);
  let [modal, setModal] = useState("hide");

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "red", fontSize: "18px" }}>{logo}</h4>
      </div>
      <button
        onClick={() => {
          let abc = [...title];
          abc.sort();
          titleChange(abc);
        }}
      >
        가나다순정렬
      </button>
      {/* <div className="list">
        <h4>
          {title[0]}
          <span
            onClick={() => {
              numChange(num + 1);
            }}
          >
            👍
          </span>
          {num}
          <button
            onClick={() => {
              let copy = [...title];
              copy[0] = "여자 코트 추천";
              titleChange(copy);
            }}
          >
            글제목 변경
          </button>
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4
          onClick={() => {
            modal == "show" ? setModal("hide") : setModal("show");
          }}
        >
          {title[2]}
        </h4>
        <p>2월 17일 발행</p>
      </div> */}
      {modal == "show" ? <Modal /> : null}
      {title.map(function (a, i) {
        return (
          <div className="list">
            <h4>
              {title[i]}
              <span
                onClick={() => {
                  let copys = [...num];
                  copys[i] = copys[i] + 1;
                  numChange(copys);
                }}
              >
                👍
              </span>
              {num[i]}
            </h4>
            <p>2월 17일 발행</p>
          </div>
        );
      })}
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
