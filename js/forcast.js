let city="amman"
let cityForm = document.getElementById('cityForm');
cityForm.addEventListener("submit", (e) => {
    e.preventDefault();
    city=e.target.city.value
    if (city) { city = e.target.city.value; }
     getData(city)
   
})

async function getData(city='amman') {
    // takes a city name and returns weather info for that city 
   console.log(city)
    let params = {
        key: "bb8704a904eb4a9db5c214329222104",
        q: city,
        aqi:"no"
    }

    let weatherdata = await axios.get("https://api.weatherapi.com/v1/current.json", { params })
    weather=weatherdata.data

    let cityimage = await axios.get(`https://pixabay.com/api/?key=26933137-ddae80757d9527278b9830a84&q=${city}`)
   
    let images = await cityimage.data.hits.map(hit => hit.previewURL)

    let neededData =await  {
        location: weather.location.name,
        country: weather.location.country,
        date: weather.current.last_updated,
        temp_c: weather.current.temp_c,
        temp_f: weather.current.temp_f,
        condition: weather.current.condition,
        wind_kph: weather.current.wind_kph,
        humidity: weather.current.humidity,
        images:images



    }
    console.log(neededData)
    renderData(neededData)
    return neededData


}


const renderData = (data) => {
    document.querySelector("#card-title").innerHTML = `${data.location} ${data.country}`;
    document.querySelector(".list-group-item1").innerHTML = `Condition : ${data.condition.text}` + `<img src=${data.condition.icon} />`;
    document.querySelector(".list-group-item2").innerHTML = ` Wind speed : ${data.wind_kph}`;
    document.querySelector(".list-group-item3").innerHTML = ` Humidity: ${data.humidity}`;
    document.querySelector(".card-img-top").innerHTML = `
 <div class=" offset-md-3  ">
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <!-- Indicators -->
                <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>

                <!-- Wrapper for slides -->
                <div class="carousel-inner">
                    <div class="item active">
                        <img src=${data.images[0]} alt="Chania">
                    </div>

                    <div class="item">
                        <img src=${data.images[1]} alt="Chicago">
                    </div>

                    <div class="item">
                        <img src=${data.images[2]} alt="New York">
                       
                    </div>
                     <div class="item">
                        <img src=${data.images[4]} alt="New York">

                    </div>
                </div>

                <!-- Left and right controls -->
                <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#myCarousel" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>


`;
}
travelQoutes = [
    " “A journey of a thousand miles begins with a single step” – Lao Tzu",
    "“Man cannot discover new oceans unless he has the courage to lose sight of the shore” – Andre Gide",
    "“Traveling – it leaves you speechless, then turns you into a storyteller” – Ibn Battuta.",
    "“We take photos as a return ticket to a moment otherwise gone” – Katie Thurmes",
    "“Wherever you go becomes a part of you somehow” – Anita Desai"
]

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
setInterval(() => {
    let i = randomIntFromInterval(0, travelQoutes.length-1)
        document.querySelector(".welcome_msg").innerHTML = travelQoutes[i]

    }, 3000)


