
teamsList = ['team1', 'team2', 'team3', 'team4', 'team5', 'team6', 'team7']

count = 0
for (i of teamsList) {
    for (d = teamsList.indexOf(i) + 1; d < teamsList.length; d++) {
        count++
    }
}
console.log("No of Matches :", count)
var noOfRound = teamsList.length - 1;

dummyVar = "dummy"
if (teamsList.length % 2 != 0) {
    teamsList.push(dummyVar)
}

teams = []
if (teamsList.includes("dummy")) {
    noOfRound += 1
}
else {
    noOfRound = noOfRound
}

for (i = 0; i < noOfRound; i++) {

    for (var j = 0; j < teamsList.length / 2; j++) {
        if (teamsList[j] != dummyVar & teamsList[teamsList.length - 1 - j] != dummyVar) {
            teams.push(teamsList[j] + " vs " + teamsList[teamsList.length - 1 - j]);
        }

    }
    teamsList.splice(1, 0, teamsList.pop());
}
if (teams.length % 2 != 0) {
    teams.push("None")
}

saturday = new Date('2022-08-27')
sunday = new Date('2022-08-28')
function dateGet(saturday, sunday) {
    var arr = [];
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
let array = dateGet(saturday, sunday)
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