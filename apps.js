window.addEventListener("load", function () {
  clock();
  weather();
  test();
});

function test() {
  let sum = 0;
  const n = 5;

  for (i = 0; i <= 2; i++) {
    sum += 1 / 2 ** i;
  }
  console.log(sum);
}

function weather() {
  let long;
  let lat;
  const zone = document.querySelector(".loc-zone");
  const degree = document.querySelector(".degree");
  const main_desc = document.querySelector(".main_desc");
  const icon = document.querySelector(".icon");
  const link = document.querySelector(".link");
  const hourly = document.querySelector(".hourly_temp");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      // const proxy = 'https://cors-anywhere.herokuapp.com/';
      // const api = `${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat},${long}`;

      // const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=f272ea99c55e96af4a6a0701704f94eb`;
      //const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude={part}&appid=f272ea99c55e96af4a6a0701704f94eb`;

      const location = `https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=hffLkG6vhjhG62Srt29f73vlE5px19oL&q=${lat}%2C${long}`;

      fetch(location)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);

          zone.textContent =
            data.LocalizedName + ", " + data.Country.EnglishName;

          return data.Key;
        })
        .then((key) => {
          const currApi = `https://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=hffLkG6vhjhG62Srt29f73vlE5px19oL`;

          const hourlyApi = `https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${key}?apikey=hffLkG6vhjhG62Srt29f73vlE5px19oL&metric=true`;

          fetch(currApi)
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              console.log(data);
              degree.textContent = Math.round(data[0].Temperature.Metric.Value);
              main_desc.textContent = data[0].WeatherText;

              var web_icon = data[0].WeatherIcon;
              web_icon = web_icon < 10 ? "0" + web_icon : web_icon;
              var url =
                "https://developer.accuweather.com/sites/default/files/" +
                web_icon +
                "-s.png";

              let sec = document.createElement("IMG");
              sec.setAttribute("src", url);
              sec.setAttribute("alt", "ICON");
              icon.textContent = "";
              icon.appendChild(sec);

              link.setAttribute("href", data[0].Link);
            });

          fetch(hourlyApi)
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              console.log(data);

              /*********** Hourly temp *************/
              hourly.innerHTML = "";
              for (const hour of data) {
                const date = new Date(hour.DateTime);
                const time = date.toLocaleTimeString("en-US", {
                  hour: "numeric",
                  hour12: true,
                });

                const iconNo = hour.WeatherIcon;

                const weth_icon = iconNo < 10 ? "0" + iconNo : iconNo;

                const icon_url =
                  "https://developer.accuweather.com/sites/default/files/" +
                  weth_icon +
                  "-s.png";

                const temp = Math.round(hour.Temperature.Value);

                const hourly_div = `<div class="hour_t">
                                        <h5>${time}</h5>
                                        <img alt="icon" src="${icon_url}" />
                                        <h4>${temp} &#8451</h4>
                                      </div>`;
                hourly.innerHTML += hourly_div;
              }
            });
        });
    });
  } else {
    console.log("Location not found!");
  }
}

function clock() {
  const d = 6;
  const hh = document.getElementById("hh");
  const mm = document.getElementById("mm");
  const se = document.getElementById("se");
  const greeting = document.querySelector(".greeting");

  const digits = document.getElementById("digit");

  setInterval(() => {
    const date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let greet = "";

    hh.style.transform = `rotateZ(${hour * 30 + (min * d) / 12}deg)`;
    mm.style.transform = `rotateZ(${min * d}deg)`;
    se.style.transform = `rotateZ(${sec * d}deg)`;

    if (hour > 4 && hour < 12) {
      greet = "Morning";
    } else if (hour >= 12 && hour < 18) {
      greet = "Afternoon";
    } else if (hour >= 18 && hour < 21) {
      greet = "Evening";
    } else {
      greet = "Night";
    }

    greeting.textContent = "Good " + greet + "!";

    const currTime = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      hour12: true,
      minute: "2-digit",
      second: "2-digit",
    });

    digits.textContent = currTime;
  });
}
