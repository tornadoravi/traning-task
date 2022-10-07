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
// date________________________________________________________________
let accessElementlen = (tornament.tennis).length
intputdate = tornament.startdate
console.log(intputdate)
// console.log(accessElementlen )
daysSlot = []
date = new Date(intputdate)
s = 6 - (date.getDay())
x = 0
// for (i = 1; i <= Math.ceil(counts / 2); i++) {
for (i = 1; i < 60; i++) {
    next = new Date(date.getTime() + (s + x) * 24 * 60 * 60 * 1000)
    x += 1
    tomorrow = String(next).slice(0, 15);
    daysSlot.push(tomorrow)
}
// console.log(daysSlot);

// console.log( winorlose)
// 1st rount versus________________________________________________________________
let accessElement = tornament.tennis
schultteling = []
matchtype = "------1st round-------"
function schulte(element, matchstype) {
    schultteling.push(matchstype)
    for (let i = 1; i <= element.length / 2; i++) {
        a = element.length - i
        const match =
        {
            date: daysSlot[i],
            challengerPlayerName: (element[i - 1]).playerName,
            challengerPlayerid: (element[i - 1]).playerId,

            opposerPlayerName: (element[a]).playerName,
            opposerPlayerid: (element[a]).playerId

        }
        schultteling.push(match)
    }return schultteling
}
schulte(accessElement, matchtype)

// win or los________________________________________________________________
winorlose = []
function prop() {
    upcome = ['0', "win", "lose"]
    x = Math.floor((Math.random() * 2) + 1)
    return upcome[x]
}
resultOfMatch = []
function winloss(list) {
    winningresult = []
    // console.log(list.length);
    for (i = 1; i <= list.length; i++) {
        winningresult[i] = []
        winningresult[i].push(prop())
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
    return resultOfMatch
}
console.log(winloss(schultteling))

matchtype="semi"
console.log(schulte(resultOfMatch, matchtype))
 