import React from "react";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  NavBar,
  Exchanges,
  HomePage,
  CryptoCurrencies,
  News,
  CryptoDetails,
} from "./components";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<HomePage />} />
            </Routes>
            <Routes>
              <Route exact path="exchanges" element={<Exchanges />} />
            </Routes>
            <Routes>
              <Route
                exact
                path="/cryptocurrencies"
                element={<CryptoCurrencies />}
              />
            </Routes>
            <Routes>
              <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
            </Routes>
            <Routes>
              <Route exact path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>

        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Near Safe Coin <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
            <Link to="/cryptocurrencies">Crypto Currencies</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
