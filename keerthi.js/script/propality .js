const { createLogicalAnd } = require("typescript")

tornament = {
    tennis: [
        { playerId: "TOR2221", playerRank: 1, playerName: "name1", noOfMatchs: 222, playerCountry: "ind" },
        { playerId: "TOR2222", playerRank: 2, playerName: "name2", noOfMatchs: 256, playerCountry: "us" },
        { playerId: "TOR2223", playerRank: 3, playerName: "name3", noOfMatchs: 266, playerCountry: "uk" },
        { playerId: "TOR2224", playerRank: 4, playerName: "name4", noOfMatchs: 286, playerCountry: "ger" },
        { playerId: "TOR2225", playerRank: 5, playerName: "name5", noOfMatchs: 167, playerCountry: "ity" },
        { playerId: "TOR2226", playerRank: 6, playerName: "name6", noOfMatchs: 287, playerCountry: "ukr" },
        { playerId: "TOR2227", playerRank: 7, playerName: "name7", noOfMatchs: 299, playerCountry: "rus" },
        { playerId: "TOR2228", playerRank: 8, playerName: "name8", noOfMatchs: 272, playerCountry: "afr" }
    ],
    startdate: ["2022/09/03"]
}
let accessingObject = tornament.tennis


function propality(obj1){
  
    for ( i=1; i<=obj1.length;i++){
        sum1= obj1[(i)-1].playerRank
        sum2= obj1[(obj1.length)-i].playerRank
        len=obj1.length
        sum3=sum1+sum2
        }
    return winerpr2=Math.round((sum2/sum3)*100),
      winerpr1=Math.round((sum1/sum3)*100)
}
propality(accessingObject)
console.log(winerpr1)
console.log(winerpr2)





