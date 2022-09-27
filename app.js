var card_main = document.getElementById("mun")
var zee = document.getElementById("main_2");
var v = document.getElementById("inputss");
var lopi = document.getElementById("lopi")
var dtee = new Date().getMonth()
var dteet = new Date().getDate()
var mnth = ["January","February" , "March" ,"April", "May" ,"June" , "July" ,"August" , 'September' ,"October" , "November" , 'December']
// console.log(dtee)
console.log(dteet)

// console.log(mnth[dtee])
// console.log(lopi)
lopi.innerText = `${mnth[dtee]} ${dteet}`

// card_main.appendChild


// console.log(res.articles[0].title)
// console.log(res.articles[0].urlToImage)







// async function ab(){
//   return new Promise(function(resolve,reject){
//     fetch(`https://newsapi.org/v2/everything?q=Pakistan&from=2022-09-17&sortBy=popularity&apiKey=99f2fee44ed34584b92eb453c1f8224c`)

//       .then(res=>res.json())
//        .then(res=>{
//           resolve(res)})
//        .catch((err)=>{
//           reject(err)})
//   })
// }   
// async function abs(res){
//       try{
//         var bata = await ab()
//         console.log(bata)
//        for(var i = 0; i < bata.articles.length ; i++){

//      card_main.innerHTML += `
//              <div class="card" style="width: 18rem;">
//                <div id="img"><img src="${bata.articles[i].urlToImage}" class="card-img-top" alt="..."></div>
//                <div class="card-body">
//                  <h5 class="card-title">${bata.articles[i].title}</h5>
//                 <p class="card-text">${bata.articles[i].content}</p>
//                  <a target="blank" href="${bata.articles[i].url}" class="btn btn-primary">See More</a>
//                </div>
//            ` 
//   }
//       }
      
//   catch(err){
//       console.log(err)
//   }}

//  window.onload =  abs()




async function abc(){
    return new Promise(function(resolve,reject){
        fetch(`https://newsapi.org/v2/everything?q=${v.value}&from=2022-09-17&sortBy=popularity&apiKey=ebe32f0dc008451d941550b0a0973c6d`)
        .then(res=>res.json())
         .then(res=>{
            resolve(res)})
         .catch((err)=>{
            reject(err)})
    })
}   
 async function abz(res){
        try{
          var data = await abc()
          console.log(data)
          card_main.innerHTML = ""
         for(var i = 0; i < data.articles.length ; i++){

       card_main.innerHTML += `
               <div class="card" style="width: 18rem;">
                 <div id="img"><img src="${data.articles[i].urlToImage}" class="card-img-top" alt="..."></div>
                 <div class="card-body">
                   <h5 class="card-title">${data.articles[i].title}</h5>
                  <p class="card-text">${data.articles[i].content}</p>
                   <a target="blank" href="${data.articles[i].url}" class="btn btn-primary">See More</a>
                 </div>
             ` 
    }
        }
        
    catch(err){
        console.log(err)
    }}



   










    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker
          .register("/serviseworker.js")
          .then((res) => console.log("service worker registered"))
          .catch((err) => console.log("service worker not registered", err));
      });
    }
    
    function showNotification() {
      Notification.requestPermission((result) => {
        if (result === "granted") {
          navigator.serviceWorker.ready.then((registration) => {
            registration.showNotification("Notification", {
              body: "Notification from News APP",
              icon: "/images/images.png",
              vibrate: [200, 100, 200, 100, 200, 100, 200],
              tag: "vibration-sample",
            });
          });
        }
      });
    }
    
    showNotification();




        //  console.log(data)

    // console.log(card_main.parentNode)
// async function abc(){
//  await fetch(`https://newsapi.org/v2/everything?q=hockey&from=2022-09-17&sortBy=popularity&apiKey=99f2fee44ed34584b92eb453c1f8224c`)
//  .then(res=>res.json())
//  .then(res=>{
//      for(var i = 0;i<err.articles.length ; i++){
//           card_main.innerHTML = `
// //     <div class="card" style="width: 18rem;">
// //     <div id="img"><img src="${res.articles[i].urlToImage}" class="card-img-top" alt="..."></div>
// //     <div class="card-body">
// //       <h5 class="card-title">${res.articles[i].title}</h5>
// //       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
// //       <a href="#" class="btn btn-primary">Go somewhere</a>
// //     </div>
// //   </div>`
//      }}

//     // console.log(res )})
//  )
//  .catch(err=>console.log("dvdf"))
// }
// abc()




  //   for(var i = 0;i<err.articles.length ; i++){
            //           card_main.innerText = `
            //           "kjbzuc"`
            //     <div class="card" style="width: 18rem;">
            //      <div id="img"><img src="${res.articles[i].urlToImage}" class="card-img-top" alt="..."></div>
            //      <div class="card-body">
            //        <h5 class="card-title">${res.articles[i].title}</h5>
            //       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            //        <a href="#" class="btn btn-primary">Go somewhere</a>
            //      </div>
            //   </div>`