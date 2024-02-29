import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import VideoHome from "./VideoHome";
import VideoLogin from "./VideoLogin";
import VideoRegister from "./VideoRegister";
import Videos from "./Videos";
import VideoInvalid from "./VideoInvalid";

function VideoIndex() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <header className="bg-dark text-white p-2 text-center">
          <span className="h3">Online Video Tutorials</span>
        </header>
        <section className="row mt-4">
          <nav className="col-2 bg-light">
            <div className="btn btn-dark w-100 mb-2 mt-2">
              <Link to="/" className="text-white text-decoration-none">
                Home
              </Link>
            </div>
            <div className="btn btn-dark w-100 mb-2 mt-2">
              <Link to="login" className="text-white text-decoration-none">
                Login
              </Link>
            </div>
            <div className="btn btn-dark w-100 mb-2 mt-2">
              <Link to="register" className="text-white text-decoration-none">
                Register
              </Link>
            </div>
            <div className="btn btn-dark w-100 mb-2 mt-2">
              <Link to="videos" className="text-white text-decoration-none">
                Our Videos
              </Link>
            </div>
          </nav>
          <main className="col-10">
            <Routes>
              <Route path="/" element={<VideoHome />} />
              <Route path="login" element={<VideoLogin />} />
              <Route path="register" element={<VideoRegister />} />
              <Route path="videos" element={<Videos />} />
              <Route path="invalid" element={<VideoInvalid />} />
            </Routes>
          </main>
        </section>
      </BrowserRouter>
    </div>
  );
}

export default VideoIndex;
