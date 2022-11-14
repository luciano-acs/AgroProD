function login() {
    const usuario = document.getElementById('usuario').value;
    const password = document.getElementById('password').value;
    if (usuario == 'juan.perez@gmail.com' && password == 'juanperez') {
        window.location.href = "/" + "perfil";
    } else {
        alert('Usuario o contraseña incorrectos');
    }
}

function cargarTablaTemp() {
    fetch('https://api.weatherbit.io/v2.0/forecast/daily?lat=-37.3768&lon=-63.7736&days=10&lang=es&key=66a5873f866745edb4f9132616310ae5')
        .then(response => response.json())
        .then(data => mostrarTemp(data));
}

function mostrarTemp(data) {
    const datosClima = JSON.parse(JSON.stringify(data));
    const cuerpoTabla = document.getElementById('cuerpoTabla3');
    const tempMin = [];
    const tempMax = [];
    const dia = [];

    for (let i = 0; i < datosClima.data.length; i++) {

        const fila = document.createElement('tr');

        const td1 = document.createElement('td');
        const textTd1 = document.createTextNode(datosClima.data[i].datetime);
        td1.appendChild(textTd1);
        fila.appendChild(td1);

        const td2 = document.createElement('td');
        const textTd2 = document.createTextNode(datosClima.data[i].min_temp);
        td2.appendChild(textTd2);
        fila.appendChild(td2);

        const td3 = document.createElement('td');
        const textTd3 = document.createTextNode(datosClima.data[i].max_temp);
        td3.appendChild(textTd3);
        fila.appendChild(td3);

        tempMin.push(datosClima.data[i].min_temp);
        tempMax.push(datosClima.data[i].max_temp);
        dia.push(datosClima.data[i].datetime);
        cuerpoTabla.appendChild(fila);
    }

    document.getElementById('parrafoTemperatura').innerHTML = `La temperatura minima en los proximos 10 días en ${data.city_name} es de ${Math.min(...tempMin)}°C y la temperatura maxima es de ${Math.max(...tempMax)}°C`;

    let canvasTemperaturas = document.getElementById('graficaTemperaturas').getContext('2d');
    var chart = new Chart(canvasTemperaturas,{
        type: 'line',
        options: {
            scales: {
                x:{
                    title:{
                        display: true,
                        text: "Dias",
                        color: "#fff"
                    },
                    ticks:{
                        color:"#fff"
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Temperatura (C°)',
                        color: "#fff"
                    },
                    ticks: {
                        color: "#fff"
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: "#fff"
                    }
                }
            }
        },
        data:{
            labels: dia,
            datasets: [
                {
                    label:"Variacion de temperaturas",
                    backgroundColor: "#46C68C",
                    borderColor: "#46C68C",
                    data: tempMin
                }
            ]
        }
    })            
}

function cargarTablaLluvia() {
    fetch('https://api.weatherbit.io/v2.0/forecast/daily?lat=-37.3768&lon=-63.7736&days=10&lang=es&key=66a5873f866745edb4f9132616310ae5')
        .then(response => response.json())
        .then(data => mostrarlluvia(data));
}

function mostrarlluvia(data) {
    const datosClima = JSON.parse(JSON.stringify(data));
    const cuerpoTabla = document.getElementById('cuerpoTabla1');
    const lluvia = [];
    const dia = [];

    for (let i = 0; i < datosClima.data.length; i++) {

        const fila = document.createElement('tr');

        const td1 = document.createElement('td');
        const textTd1 = document.createTextNode(datosClima.data[i].datetime);
        td1.appendChild(textTd1);
        fila.appendChild(td1);

        const td2 = document.createElement('td');
        const textTd2 = document.createTextNode(datosClima.data[i].precip);
        td2.appendChild(textTd2);
        fila.appendChild(td2);

        lluvia.push(datosClima.data[i].precip);
        dia.push(datosClima.data[i].datetime);
        cuerpoTabla.appendChild(fila);
    }

    document.getElementById('parrafoLluvia').innerHTML = `La maxima cantidad de lluvia en los proximos 10 días en ${data.city_name} es de ${Math.max(...lluvia)}mm y la minima es de ${Math.min(...lluvia)}mm`;

    let canvasLluvias = document.getElementById('graficaLluvias').getContext('2d');
    var chart = new Chart(canvasLluvias,{
        type: 'bar',
        data:{
            labels: dia,
            datasets: [
                {
                    label:"Variacion de lluvias",
                    backgroundColor: "#46C68C",
                    data: lluvia
                }
            ]
        },
        options: {
            scales: {
                x:{
                    title:{
                        display: true,
                        text: "Dias",
                        color: "#fff"
                    },
                    ticks:{
                        color:"#fff"
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: "Lluvia (mm)",
                        color: "#fff"
                    },
                    ticks: {
                        color: "#fff"
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: "#fff"
                    }
                }
            }
        }
    })
}

function cargarTablaVientos() {
    fetch('https://api.weatherbit.io/v2.0/forecast/daily?lat=-37.3768&lon=-63.7736&days=10&lang=es&key=66a5873f866745edb4f9132616310ae5')
        .then(response => response.json())
        .then(data => mostrarVientos(data));
}

function mostrarVientos(data) {
    const datosClima = JSON.parse(JSON.stringify(data));
    const cuerpoTabla = document.getElementById('cuerpoTabla2');
    const vientos = [];
    const dia = [];

    for (let i = 0; i < datosClima.data.length; i++) {

        const fila = document.createElement('tr');

        const td1 = document.createElement('td');
        const textTd1 = document.createTextNode(datosClima.data[i].datetime);
        td1.appendChild(textTd1);
        fila.appendChild(td1);

        const td2 = document.createElement('td');
        const textTd2 = document.createTextNode(datosClima.data[i].wind_cdir_full);
        td2.appendChild(textTd2);
        fila.appendChild(td2);

        const td3 = document.createElement('td');
        const textTd3 = document.createTextNode(datosClima.data[i].wind_spd);
        td3.appendChild(textTd3);
        fila.appendChild(td3);

        vientos.push(datosClima.data[i].wind_spd);
        dia.push(datosClima.data[i].datetime);
        cuerpoTabla.appendChild(fila);
    }
    document.getElementById('parrafoViento').innerHTML = `La maxima velocidad de viento en los proximos 10 días en ${data.city_name} es de ${Math.max(...vientos)}km/h y la minima es de ${Math.min(...vientos)}km/h`;

    let canvasVientos = document.getElementById('graficaVientos').getContext('2d');
    var chart = new Chart(canvasVientos,{
        type: 'bar',
        data:{
            labels: dia,
            datasets: [
                {
                    label:"Variacion de vientos",
                    backgroundColor: "#46C68C",
                    data: vientos
                }
            ]
        },
        options: {
            scales: {
                x:{
                    title:{
                        display: true,
                        text: "Dias",
                        color: "#fff"
                    },
                    ticks:{
                        color:"#fff"
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: "Velocidad de viento (km/h)",
                        color: "#fff"
                    },
                    ticks: {
                        color: "#fff"
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: "#fff"
                    }
                }
            } 
        }
    })
}