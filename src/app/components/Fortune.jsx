import { useState, useEffect } from "react";
import axios from "axios";
import fortuneData from "../../../public/data/fortuneData.json";

const FortunePage = () => {
  const [fortune, setFortune] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility

  // Fetching data from 3rd party API
  // const fetchFortune = async () => {
  //   setLoading(true);
  //   const options = {
  //     method: "GET",
  //     url: "https://fortune-cookie4.p.rapidapi.com/slack",
  //     headers: {
  //       "X-RapidAPI-Key": "fb1658f53dmsh7124052fa0fdab3p1e9b4djsn9bedde845e45",
  //       "X-RapidAPI-Host": "fortune-cookie4.p.rapidapi.com",
  //     },
  //   };
  //   try {
  //     const response = await axios.request(options);
  //     setFortune(response.data.text);
  //     setShowPopup(true); // Show the popup after fetching the fortune
  //   } catch (error) {
  //     console.error(error);
  //     setError(error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // Getting data directly from JSON and displaying
  // const getFortune = () => {
  //   setLoading(true);
  //   // Function to get a random key from an object
  //   function getRandomKey(obj) {
  //     return Object.keys(obj)[
  //       Math.floor(Math.random() * Object.keys(obj).length)
  //     ];
  //   }
  //   const randomKey = getRandomKey(fortuneData);
  //   setFortune(fortuneData[randomKey]);
  //   setLoading(false);
  //   setShowPopup(true);
  // };


  // Created a API under pages->api->randomFortune.js from there fetching data

  async function fetchFortune() {
    setLoading(true);
    try {
      const response = await axios.get("/api/getRandomFortune");
      const data = response.data;
      const fortuneValue = data[Object.keys(data)[0]];
      setFortune(fortuneValue);
      setLoading(false);
      setShowPopup(true);
    } catch (error) {
      console.error("Error fetching fortune:", error);
    }
  }

  return (
    <div>
      <button
        onClick={fetchFortune}
        disabled={loading}
        className={`bg-transparent text-white font-bold py-2 px-4 rounded ${
          loading ? "cursor-not-allowed" : ""
        }`}
      >
        Check Your Fortune
      </button>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Your Fortune</h2>
            <p className="text-black">{fortune}</p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
      {error && <p className="text-red-500">Error: {error}</p>}
    </div>
  );
};

export default FortunePage;
