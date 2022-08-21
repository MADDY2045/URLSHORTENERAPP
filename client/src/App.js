import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import UrlForm from "./components/UrlForm";
import UrlTable from "./components/UrlTable";
import FooterComponent from "./components/FooterComponent";
import "./App.css";

const App = () => {
  const [state, setState] = useState([]);
  const [formData, setFormData] = useState({});
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("/api/urls")
      .then(({ data: { shortUrls } }) => {
        setState(shortUrls);
        setIsLoading(false);
      })
      .catch((error) => setIsLoading(false));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      axios
        .post("/api/urls/shortUrls", formData)
        .then(({ status, data: { shortUrls } }) => {
          if (status === 200) {
            setState(shortUrls);
            setIsLoading(false);
          }
        })
        .catch((e) => setIsLoading(false));
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <Navbar />
      <UrlForm handleSubmit={handleSubmit} setFormData={setFormData} />
      <UrlTable loading={loading} state={state} />
      <FooterComponent />
    </div>
  );
};

export default App;
