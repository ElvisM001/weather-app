let loc = document.querySelector('#location')
let btn = document.querySelector('#btn')
let cityName = document.querySelector('#name')
let description = document.querySelector('#desc')
let temperature = document.querySelector('#temp')
let activitiesRecommended = document.querySelector('#activities')
let image = document.querySelector('.image')



btn.addEventListener('click', () => {

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loc.value}&appid=0bc5e9d475b7e3abdbb66a64a91d4ac1`).then
        (resp => resp.json()).then
        (data => {


            let nameValue = data.name;
            let tempValue = data['main']['temp'];
            let descriptionValue = data.weather[0].description;

            cityName.textContent = `Location:${nameValue}`
            temperature.innerHTML = `Temperature:${(tempValue - 274).toPrecision(4)}°C`
            description.textContent = `Weather description:${descriptionValue}`

            let activityList = {
                'scattered clouds': ['sleeping', 'cooking', 'eating', 'reading'],
                'overcast clouds': ['skiing', 'movies', 'llllll', 'wwqweeerr'],
                'broken clouds': ['exercising', 'singing', 'walking', 'watch'],
                'light rain': ['keeping-warm', 'digging', 'jkjbjbkj', 'pioiou'],
                'few clouds': ['playing', 'hiking', 'harvesting', 'farming'],
                'clear sky': ['picnic', 'yytutu', 'playing', 'walking'],
                'light thunderstorm': ['stay indors', 'cook', 'eat', 'pray']
            }


            let ul = document.createElement('ul')

            for (act in activityList) {
                if (act === descriptionValue) {
                    let r = activityList[act]
                    ul.innerHTML = `We recommend the following activities:<br/>${r}`
                    activitiesRecommended.append(ul)



                    if (act === 'light rain') {
                        image.innerHTML = `<i style="font-size: 8em;" class="bi bi-cloud-lightning-rain"></i>`
                    }
                    else if (act === 'scattered clouds') {
                        image.innerHTML = `<i style="font-size: 8em;" class="bi bi-clouds"></i>`
                    }
                    else if (act === 'clear sky') {
                        image.innerHTML = `<i style="font-size: 8em;" class="bi bi-moon-fill"></i>`
                    }
                    else if (act === 'light thunderstorm') {
                        image.innerHTML = `<i style="font-size: 8em;" class="bi bi-lightning-charge"></i>`
                    }
                    else {
                        image.innerHTML = `<i style="font-size: 8em;" class="bi bi-clouds-fill"></i>`
                    }

                }
            }


            console.log(data)
        }).catch
        (error => alert('Location not found'))
})




