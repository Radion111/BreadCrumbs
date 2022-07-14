import "./App.css";
//? Загрузка   npm install react-router-dom@6
import { Route, Routes, Link, Navigate } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
//! Если хочешь правильно импортиривать ОБЯЗАТЕЛЬНО
//! react-router-dom То обязательно импортируй так
import { useLocation } from "react-router-dom";
// ? useParams для того что бы узнать свойста url строки
// useNavigate для того чтобы узнать даные

import { useState } from "react";
import Work from "./Crums/Work";

import About from "./Crums/About";

import Manual from "./Crums/Manual";

import Designer from "./Crums/Crums2/Designer";

import Engineer from "./Crums/Crums2/Engineer";

import Markete from "./Crums/Crums2/Markete";

import Mainmanual from "./Crums/Mainmanual";

import Erors from "./Crums/Crums2/Erors";

import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
function App() {
  let globalurl = useLocation();
  let myurl = globalurl.pathname;

  let diff = [];

  let myurls = myurl.split("/").filter((el) => el);

  myurls.forEach((elem) => {
    diff.push(elem);
  });

  return (
    <div className="App">
      <header className="App-header">
        <div className="breadCrums">
          <ul className="ulApp">
            {/* ТУт надо попробовать через массив обьектов  */}
            {diff.map((item, index) => (
              <li className="liApp" key={index}>
                <Link
                  className={
                    diff[diff.length - 1] == item ? "grayLinkMaps" : "linkMaps"
                  }
                  // ТАк тенарное добавления пути
                  to={item == "work" ? "/Work" : "/"}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Routes>
          <Route path="/Home" element={<Mainmanual />}></Route>
          <Route path="/Home/work" element={<Work />} />
        </Routes>
        <hr style={{ Background: "white", width: "400px" }}></hr>
        <Routes>
          <Route path="/Home/about" element={<About />} />
          <Route path="/Home" element={<Manual />} />
          <Route path="*" element={<Erors />} />

          <Route path="/Home/work/designer" element={<Designer />} />
          <Route path="/Home/work/engineer" element={<Engineer />} />
          <Route path="/Home/work/markete" element={<Markete />} />
        </Routes>

        <div style={{ marginTop: "200px" }}> THis is my footer</div>
      </header>
    </div>
  );
}

export default App;
