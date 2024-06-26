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
  let [modal, setModal] = useState("show");
  let [tit, setTit] = useState(0);

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

      {title.map(function (a, i) {
        return (
          <div className="list">
            <h4
              onClick={() => {
                setTit(i);
              }}
            >
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

      {modal == "show" ? (
        <Modal titleChange={titleChange} title={title} tit={tit} />
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>{props.title[props.tit]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  );
}

export default App;
