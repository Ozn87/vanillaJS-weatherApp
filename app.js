const Submit = document.getElementById('submit')
const Search = document.getElementById('search')
const Temp = document.getElementById('temp')
const Icon = document.getElementById('icon')
const CityDis = document.getElementById('city-dis')

const fetchData = (e) => {
  e.preventDefault()
  const city = Search.value

  if (city.trim()) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b3d552cbb2cbaea9b1f436e8284635ab&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.cod === '404') {
          Temp.innerText = `Error: ${data.message}`
        } else {
          CityDis.innerHTML = `<h1 class="display-4 text-center city">${data.name}, ${data.sys.country}</h1>`
          Temp.innerHTML = `<h1 class="display-3 text-center">${data.main.temp} C°</h1>`
          Icon.innerHTML = `<img class="img-fluid icon-center" src="http://openweathermap.org/img/w/${data.weather[0].icon}.png"/>`
        }
      })
  } else {
    alert('please enter a city!')
  }
  Search.value = ''
}

Submit.addEventListener('submit', fetchData)
