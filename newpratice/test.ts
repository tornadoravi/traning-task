interface tornament{
    playerId:String,
    playerRank:Number,
    playerName:String,
    noOfMatchs:Number,
    playerCountry:string}

 let tornament = {
    tennis: [
        { playerId: "TOR2221", playerRank: 8, playerName: "name1", noOfMatchs: 222, playerCountry: "ind" },
        { playerId: "TOR2222", playerRank: 7, playerName: "name2", noOfMatchs: 256, playerCountry: "us" },
        { playerId: "TOR2223", playerRank: 6, playerName: "name3", noOfMatchs: 266, playerCountry: "uk" },
        { playerId: "TOR2224", playerRank: 5, playerName: "name4", noOfMatchs: 286, playerCountry: "ger" },
        { playerId: "TOR2225", playerRank: 4, playerName: "name5", noOfMatchs: 167, playerCountry: "ity" },
        { playerId: "TOR2226", playerRank: 3, playerName: "name6", noOfMatchs: 287, playerCountry: "ukr" },
        { playerId: "TOR2227", playerRank: 2, playerName: "name7", noOfMatchs: 299, playerCountry: "rus" },
        { playerId: "TOR2228", playerRank: 1, playerName: "name8", noOfMatchs: 272, playerCountry: "afr" }
    ],
    startdate: ["2022/09/03"]
}
let intputdate = tornament.startdate
let accessElement = tornament.tennis
function dynamicsort(property:any) {
    return function (a:any ,b:any) {

        if (a[property] < b[property]) {
            return -1
        } else if (a[property] > b[property]) {
            return 1
        } else {
            return 0
        }
    }
}

let rankbaseShortList = ((accessElement).sort(dynamicsort("playerRank")))
let matchlevel = "-----*****matchs*****-----"
//  schedule-------------------------
let nextdayz=""
function schedule(sinElement:any , matchType:any , dayx:any ) {
   const  scheduling = []
    scheduling.push(matchType)
    var match = 1
   var  x = 1
    let date = new Date(dayx)
    let s = 6 - (date.getDay())
    for (let i = 1; i <= sinElement.length / 2; i++) {
        let next = new Date(date.getTime() + (s + x) * 24 * 60 * 60 * 1000)
      var  tomorrow:any = String(next).slice(0, 15);
        const versusTeam = {
            Matchno: match,
            matchDate: tomorrow,
            player1ID: sinElement[i - 1].playerId,
            player1NAME: sinElement[i - 1].playerName,
            player1country: sinElement[i - 1].playerCountry,
            player1matchs: sinElement[i - 1].noOfMatchs + 1,

            player2ID: (sinElement[sinElement.length - i]).playerId,
            player2NAME: (sinElement[sinElement.length - i]).playerName,
            player2country: (sinElement[sinElement.length - i]).playerCountry,
            player2matchs: (sinElement[sinElement.length - i]).noOfMatchs + 1
        }
        x += 1
        match++
        scheduling.push(versusTeam)
    } console.log(scheduling)
   let matchdatez= tomorrow  
    date = new Date(matchdatez)
    s = 6 - (date.getDay())

   let  next = new Date(date.getTime() + (s) * 24 * 60 * 60 * 1000)
 nextdayz = String(next).slice(0, 15);

    winorlose(scheduling)

}
// random __________________________
function randoms() {
   let Results = ["0", "winner", "loser"]
   let  matchResults = Math.floor(Math.random() * 2) + 1
    // console.log(Results[matchResults])
    return Results[matchResults]
}

function winorlose(winningplayer:any ) {

    const perResult = []
   const  playerresults:any[] = []
    for (let i = 1; i <= winningplayer.length - 1; i++) {
        playerresults[i] = []
        playerresults[i].push(randoms())
        if (playerresults[i] == "winner") {
            const matchsresultsobj = {
                Results: i,
                playerId: winningplayer[i].player1ID,
                playerName: winningplayer[i].player1NAME,
                playerCountry: winningplayer[i].player1country,
                noOfMatchs: winningplayer[i].player1matchs
            }
            perResult.push(matchsresultsobj)

        }
        else if (playerresults[i] == "loser") {
            const matchsresultsobj = {
                Results: i,
                playerId: winningplayer[i].player1ID,
                playerName: winningplayer[i].player2NAME,
                playerCountry: winningplayer[i].player2country,
                noOfMatchs: winningplayer[i].player2matchs
            }
            perResult.push(matchsresultsobj)

        }
    }
    console.log("*****winner results*****")
    console.log(perResult)
    if (perResult.length > 1) {
        
        schedule(perResult, matchlevel, nextdayz)
    }
}
schedule(rankbaseShortList, matchlevel, intputdate)

