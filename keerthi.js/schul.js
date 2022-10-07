playingTeams = ["Mumbai","Chennai","Kolkata","Bangalore","Hyderabad","Delhi","Punjab","Rajasthan"]
// Counting the Number of Matches
count = 0
for (i of playingTeams) {
    for (d = playingTeams.indexOf(i) + 1; d < playingTeams.length; d++) {
        count++
    }
}
console.log("Number of Matches :", count)
var numberOfRounds = playingTeams.length - 1;
// Assinging Dummy Value if the Playing Teams in odd in Number
dum = "dummy"
if (playingTeams.length % 2 != 0) {
    playingTeams.push(dum)
}
// Rival Teams
teams = []
if (playingTeams.includes("dummy")) {
    numberOfRounds += 1
}
else {
    numberOfRounds = numberOfRounds
}
// Round Robin Method
for (i = 0; i < numberOfRounds; i++) {

    for (var j = 0; j < playingTeams.length / 2; j++) {
        if (playingTeams[j] != dum & playingTeams[playingTeams.length - 1 - j] != dum) {
            teams.push(playingTeams[j] + " vs " + playingTeams[playingTeams.length - 1 - j]);
        }

    }
    playingTeams.splice(1, 0, playingTeams.pop());
}
if (teams.length % 2 != 0) {
    teams.push("None")
}
// Date Function 
saturday = new Date('2022-08-27')
sunday = new Date('2022-08-28')
function getDateArray(saturday, sunday) {
    var arr = new Array();
    var dt = new Date(saturday);
    var dt1 = new Date(sunday)
    for (i = 0; i < teams.length / 2; i++) {
        arr.push((new Date(dt)).toString().substring(0, 15));
        arr.push((new Date(dt1).toString().substring(0, 15)))
        dt.setDate(dt.getDate() + 7);
        dt1.setDate(dt1.getDate() + 7)
    }
    return arr
}
let array = getDateArray(saturday, sunday)
count = 0
list = []
for (i = 0; i < teams.length; i = i + 2) {
    ob = {}
    d = i
    ob["Date"] = array[count]
    ob["Day"] = count + 1
    count++
    ob["Match_No"] = i + 1
    ob["Morning_Batch"] = teams[i]
    ob["match_No"] = i + 2
    ob["Evening_Batch"] = teams[d + 1]
    list.push(ob)
}
console.log(list)