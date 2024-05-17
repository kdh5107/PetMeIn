import "./App.css";
import { useEffect, useState } from "react";
import TopNav from "./nav/top-nav";
import BottomNav from "./nav/bottom-nav";

function App() {
  return (
    <div className="App">
      <TopNav></TopNav>
      <div>본문</div>
      <BottomNav></BottomNav>
    </div>
  );
}

export default App;
