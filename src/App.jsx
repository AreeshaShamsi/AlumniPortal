import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import React from "react";
import { LogIn } from "lucide-react";
import Login from "./pages/login";
import Feed from "./pages/Feed";
import SuggestedFollows from "./pages/SuggestedFollows";
import ProfilePage from "./pages/Profilepg";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login/>} />
          <Route path="/feed" element={<Feed/>} />
          <Route path="/suggested-follows" element={<SuggestedFollows/>} />
          <Route path="/profile" element={<ProfilePage/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
