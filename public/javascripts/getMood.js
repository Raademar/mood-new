// import Chart from'chart.js'

// //const data = moods

// let ctx = document.getElementById("lineChart")

// let moodArray = []
// let dateArray = []
// let noteArray = []

// data.forEach(function(item){
//   moodArray.push(item.usermood)
//   dateArray.push(item.date)
//   noteArray.push(item.note)
// })

// let myChart = new Chart(ctx, {
//   type: 'line',
//   data: {
//       labels: dateArray,
//       datasets: [{
//           label: [],
//           data: moodArray,
//           backgroundColor: '#EC7357',
//           borderColor: '#F3CA40',
//           borderWidth: 1
//       }]
//   },
//   options: {
//       title: {
//         display: true,
//         text: ''
//       },
//       legend: {
//           labels: {
//               fontColor: '#fff'
//           }
//       },
//       scales: {
//           yAxes: [{
//               ticks: {
//                   beginAtZero:true
//               },
//           }],
//       },
//       elements: {
//         line: {
//             tension: 0, // disables bezier curves
//         }
//     }
//   }
// })

// //module.exports = myChart

// let pieCtx = document.getElementById("pieChart")

// // FIX THIS SO THE PIE CHART DISPLAYS PROPERLY THE SUM OF ALL THE ENTERED MOODS FROM EACH TYPE OF MOOD.
// // const moods = moodArray
// // for(mood in moods){
// //   let sumMood = moods.filter(x => x === mood).length
// //   console.log(sumMood)
// // }

// let pieChart = new Chart(pieCtx, {
//   type: 'pie',
//   data: {
//       labels: ['Great', 'Good', 'Okey', 'Sad', 'Depressed'],
//       datasets: [{
//           label: [],
//           data: moodArray,
//           backgroundColor: [
//             'rgba(6, 146, 6, 1)', 
//             'rgba(100, 255, 100, 1)', 
//             'rgba(255, 255, 0, 1)', 
//             'rgba(255, 135, 15, 1)', 
//             'rgba(225, 11, 11, 1)',
//           ],
//           borderColor: '#aaaaaa', 
//           borderWidth: 2,
//       }]
//   },
//   options: {
//       title: {
//         display: true,
//         text: 'Pie Chart'
//       },
//       hover: {
//         mode: 'index'
//       },
//       scales: {
//       },
//       elements: {
//         line: {
//             tension: 0, // disables bezier curves
//         }
//     }
//   }
// })

// //module.exports = pieChart