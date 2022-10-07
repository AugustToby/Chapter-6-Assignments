let canvas = document.querySelector('#Bridges-chart')
let context = canvas.getContext('2d')

let chart = new Chart(context, {
    type: 'bar',
    data: {
        labels: ["Verrazano-Narrows Bridge", "Golden Gate Bridge", "Mackinac Bridge", "George Washington Bridge", "Tacoma Narrows Bridge"], 
        datasets: [ {
            label: "Length of Bridges in meters",
            data: [1298.4, 1280.2, 1158, 1067, 853.44],
            backgroundColor: ['red', 'blue', 'magenta', 'green', 'yellow']
        }]
    },
    options: {
        scales: {
            yAxes: [ {
                ticks: {
                    beginAtZero: true
                }
            } ]
        }
    }
})