import React, { useEffect, useState } from "react";
import status from "./img/status.png";
import bar from "./img/bar.png";
import { Player } from "@lottiefiles/react-lottie-player";

function Weather() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = dd + "/" + mm + "/" + yyyy;

  const [Weather, setWeather] = useState({});
  const [City, setCity] = useState();

  // TO CONVERT API TIMESTAMP FORMAT TO READABLE TIME FORMAT !!!

  // SUNRISE ----

  let risetimestamp = Weather.sys?.sunrise;
  // console.log(risetimestamp);

  let risetime = new Date(risetimestamp * 1000);
  // console.log(risetime);

  let risehrs = risetime.getHours();
  // console.log(risehrs);

  let risemin = risetime.getMinutes();
  // console.log(risemin);

  let sunrise = `${risehrs}:${"0" + risemin}`;
  // console.log(time);

  // SUNSET ----

  let settimestamp = Weather.sys?.sunset;
  // console.log(risetimestamp);

  let settime = new Date(settimestamp * 1000);
  // console.log(risetime);

  let sethrs = settime.getHours();
  // console.log(risehrs);

  let setmin = settime.getMinutes();
  // console.log(risemin);

  let sunset = `${sethrs}:${setmin}`;
  // console.log(time);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=b8c9c2df8e181e0652ea2b63337d959e`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setWeather(data);
        setTimeout(1000);
      });
  }, [City]);

  function ChangeCity(value){
      setCity(value);
  }



  return (
    <div>
      <div className="container1">
        <div className="header">
          <img src={status} alt="" />
        </div>

        <div className="main1">
          <div className="txtbox">
            {/* <h1>{City}</h1> */}



            <div className="form-group">
              <label for="demo_overview_minimal">Select City</label>
              <select
                id="demo_overview_minimal"
                className="form-control px-5"
                data-role="select-dropdown"
                data-profile="minimal"
                onChange={(event) => {ChangeCity(event.target.value)}}
                >

                <option value="Vasai">Vasai Virar</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Pune">Pune</option>
                <option value="Delhi">Delhi</option>
                <option value="Navi Mumbai">Navi Mumbai</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Chennai">Chennai</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Surat">Surat</option>
                <option value="Jaipur">Jaipur</option>
                <option value="Nagpur">Nagpur</option>
                <option value="Indore">Indore</option>
                <option value="Thane">Thane</option>
                <option value="Vadodara">Vadodara</option>
                <option value="Nashik">Nashik</option>
                <option value="Gurgaon">Gurgaon</option>
                <option value="Jammu">Jammu</option>
              </select>
            </div>


                <h3>Today</h3>
            <p>{today}</p>
          </div>
          <div className="lottie">
            <Player
              autoplay
              loop
              src="https://assets5.lottiefiles.com/packages/lf20_zk3wvzpg.json"
              style={{ height: "160px", width: "170px" }}
            ></Player>
            <div className="temp">
              <h1 className="deg">
                {Math.round(Weather.main?.temp - 273.15)}&deg; C
              </h1>
              <p className="feel">
                Feels Like {Math.round(Weather.main?.feels_like - 273.15)}&deg;
                C
              </p>
              <p className="wind">Wind Speed {Weather.wind?.speed} Km/h</p>
            </div>
          </div>
        </div>

        <div className="card1">
          <div className="bar">
            <img src={bar} width="50%" height="100%" alt="" />
          </div>

          <div className="min-max">
            <p>
              <span>Min Temp</span> <br />{" "}
              {Math.round(Weather.main?.temp_min - 273.15)}&deg; C
            </p>
            <p>
              <span>Max Temp</span> <br />
              {Math.round(Weather.main?.temp_max - 273.15)}&deg; C
            </p>
          </div>

          <div className="min-max">
            <p>
              <span>Pressure</span> <br /> {Math.round(Weather.main?.pressure)}{" "}
              hPa
            </p>
            <p>
              <span>Humidity</span> <br />
              {Math.round(Weather.main?.humidity)} %
            </p>
          </div>

          <div className="min-max">
            <p>
              <span>Sunrise</span> <br />
              {sunrise} am
            </p>
            <p>
              <span>Sunset</span> <br />
              {sunset} pm
            </p>
          </div>
        </div>

        <div className="footer">
          <img src={bar} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Weather;
