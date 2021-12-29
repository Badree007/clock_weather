<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Clock--Weather</title>
    <link rel="stylesheet" href="style.css" />
    <link href="http://openweathermap.org/img/wn/10d@2x.png" rel="image/png" />
  </head>
  <body>
    <main>
      <div class="clock">
        <h1 class="greeting">Good Day!</h1>
        <div class="ana_clock">
          <div class="hour">
            <div class="hh" id="hh"></div>
          </div>
          <div class="minute">
            <div class="mm" id="mm"></div>
          </div>
          <div class="second">
            <div class="se" id="se"></div>
          </div>
        </div>

        <div class="dig_clock">
          <h1 id="digit" class="digits"></h1>
        </div>
      </div>

      <div class="weather">
        <div class="location">
          <h1 class="loc-zone">Timezone</h1>
          <div class="degree-desc">
            <h2 class="degree">22</h2>
            <span> &#8451;</span>
          </div>
          <div class="icon">ICON</div>
          <div class="temp_desc">
            <p class="main_desc">Cold</p>
          </div>
        </div>

        <div class="temp">
          <!-- <div class="degree-desc">
            <h2 class="degree">22</h2>
            <span> &#8451;</span>
          </div> -->
          <div class="hourly_temp">
              
              <div class="hour">
                  <h6>Now</h6>
                  <span>Icon</span>
                  <h5>23 &#8451</h5>
              </div>
              <div class="hour">
                  <h6>Now</h6>
                  <span>Icon</span>
                  <h5>23 &#8451</h5>
              </div>
         
          </div>
          <a href="" target="_blank" class="link">Get Details on Weather <img src="accuWeather.png" alt="accuWeatherLogo" style="width:30px;"></a>
        </div>
      </div>
    </main>
    
    <footer><small><p>&copy2021 <a href="mailto: badridahal100@gmail.com">Badri Dahal</a>. All Rights Reserved.</p></small></footer>

    <script src="apps.js" type="text/javascript"></script>
  </body>
</html>
