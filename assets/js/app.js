const rankingOutput = document.querySelector('.ranking-output')

function RetrieveData () {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '8eba70e7f9msh21aab61c313a984p108525jsnc5af7a5b8f37',
            'X-RapidAPI-Host': 'live-golf-data.p.rapidapi.com'
        }
    };
    
    fetch('https://live-golf-data.p.rapidapi.com/stats?year=2022&statId=186', options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            mapData(response)
        })
        .catch(err => console.error(err));
}

function mapData (player) {
    console.log("this is player ", player)
    const map = player.rankings.splice(0, 50).map(info => {
        return `<li>${info.firstName} ${info.lastName}</li>`
    }).join("")
    rankingOutput.innerHTML = map
}

// Function calling area
RetrieveData()