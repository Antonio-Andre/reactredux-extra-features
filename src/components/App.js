import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import CoursePage from "./courses/CoursePage";
import ManageCoursePage from "./courses/ManageCoursePage";
import ManageAuthorPage from "./authors/ManageAuthorPage";
import DifferentHello from "./pokedex/PokePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <div className="container-fluid">
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/courses" element={<CoursePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/course/:slug?" element={<ManageCoursePage/>} /> 
        <Route path="/authors" element ={<ManageAuthorPage/>} />
        <Route path="/pokedex" element ={<DifferentHello/>} />
        <Route element={<PageNotFound/>} />
      </Routes>
      <ToastContainer autoClose={3000} hideProgressBar theme="colored" />
    </div>
  );
}
