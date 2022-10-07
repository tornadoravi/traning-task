interface tornament{
    playerId:String,
    playerRank:Number,
    playerName:String,
    noOfMatchs:Number,
    playerCountry:string}

let tornament = {
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
let accessingObject = (tornament.tennis);
// 1st rount versus________________________________________________________________
var matchtype = "------1st round-------"
function schulte(element:any, matchstype:any) {
   let  date = new Date()
let s = 6 - (date.getDay())
let x = 1
    let next = new Date(date.getTime() + (s + x) * 24 * 60 * 60 * 1000)
    let tomorrow = String(next).slice(0, 15);
const schultteling = []
    schultteling.push(matchstype)
    for (let i = 1; i <= element.length / 2; i++) {
        let a = element.length - i
        const match =
        {
        matchDate:tomorrow,
            challengerPlayerName: (element[i - 1]).playerName,
            challengerPlayerid: (element[i - 1]).playerId,
            challengermatchplayed:(element[i - 1]).noOfMatchs+1,
            opposerPlayerName: (element[a]).playerName,
            opposerPlayerid: (element[a]).playerId,
            opposermatchplayed:(element[i - 1]).noOfMatchs+1
        }
        schultteling.push(match)
        x += 1
    }
    console.log(schultteling)
    winloss(schultteling)
}
// win or los________________________________________________________________
 const winorlose = []
function prop() {
   let  upcome = ['0', "win", "lose"]
   let  x = Math.floor((Math.random() * 2) + 1)
    return upcome[x]
}
function winloss(list:any ) {
   const  winningresult:any[] = []
  const   resultOfMatch = []
    // console.log(list.length);
    for (let i = 1; i <= list.length; i++) {
        winningresult[i] = []
        winningresult[i].push(prop());
        if (winningresult[i-1] == "win") {
            const winner = {
                playerName: list[i-1].challengerPlayerName,
                playerId: list[i-1].challengerPlayerid
            }
            resultOfMatch.push(winner)
        }
        else if (winningresult[i-1] == "lose") {
           
            const winner = {
                playerName: list[i-1].opposerPlayerName,
                playerId: list[i-1].opposerPlayerid
            }
            resultOfMatch.push(winner)
        }
     }
     console.log(resultOfMatch)
    if(resultOfMatch.length>1){
        matchtype="next rount"
        schulte(resultOfMatch, matchtype)
    }
}
schulte(accessingObject,matchtype)