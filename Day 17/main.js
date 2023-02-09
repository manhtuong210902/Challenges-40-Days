const searchEle = document.querySelector('.search')
const cityEle = document.querySelector('.city')
const countryEle = document.querySelector('.country')
const valueEle = document.querySelector('.value')
const timeEle = document.querySelector('.time')
const shortDescEle = document.querySelector('.short-desc')

const visibility = document.querySelector('.visibility div')
const wind = document.querySelector('.wind div')
const sun = document.querySelector('.sun div')

const weatherEle = document.querySelector('.weather')
const bodyEle = document.querySelector('body')
const contentEle = document.querySelector('.content')

searchEle.onfocus = function(){
    searchEle.classList.add('active')
}

searchEle.onblur = function(){
    searchEle.classList.remove('active')
}

async function changeWeatherUI(capital){
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=293f2e11cb649f53d6032938ad6d8d7c`

    let data = await fetch(apiUrl).then(res => res.json())
    console.log(data)

    if(data.cod == 200){
        contentEle.classList.remove('hide')
        cityEle.innerText = data.name
        countryEle.innerText = data.sys.country
        timeEle.innerText = new Date().toLocaleString('vi')
    
        let value = Math.round(data.main.temp)
        valueEle.innerText = value
        if(value <= 10){
            weatherEle.classList.add('cold-weather')
            bodyEle.classList.add('cold')
        }else{
            weatherEle.classList.remove('cold-weather')
            bodyEle.classList.remove('cold')
        }
        shortDescEle.innerText = data.weather[0].main
    
        visibility.innerText = data.visibility + '(m)'
        wind.innerText = data.wind.speed + '(m/s)'
        sun.innerText = data.main.humidity + '%'
    }else{
        contentEle.classList.add('hide')
    }
}

searchEle.addEventListener('keydown', (e)=>{
    if(e.key == 'Enter'){
        let capital = searchEle.value.trim()
        changeWeatherUI(capital)
    }
})

changeWeatherUI('Hanoi')