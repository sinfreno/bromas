// API de la wen https://www.el-tiempo.net/api

async function showWeather() {
    const result = await fetch('https://www.el-tiempo.net/api/json/v2/home');
    const res = await result.json();

    // Devuelve el estado del cielo en Barcelona
    document.getElementById('cielo').innerHTML = res.ciudades[0].stateSky.description;
    // Devuelve la temperatura máxima en Barcelona
    document.getElementById('temperaturamax').innerHTML = res.ciudades[0].temperatures.max;
    // Devuelve la temperatura mínima en Barcelona
    document.getElementById('temperaturamin').innerHTML = res.ciudades[0].temperatures.min;
};

