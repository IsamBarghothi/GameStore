import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import LoginPage from "./Containers/LoginPage";
import Store from "./Containers/Store"
import MyProfile from "./Containers/MyProfile"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
            <Route path="LoginPage" element={<LoginPage />} />
            <Route path="Store" element={<Store />} />
            <Route path="MyProfile" element={<MyProfile />} />
            <Route path="*" element={
            <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
    </main>
}
/>
          </Route>
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
