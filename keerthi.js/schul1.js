teamsList = ['TEAM1', 'TEAM2', 'TEAM3', 'TEAM4', 'TEAM5','TEAM6']
len = teamsList.length
numberOfTeams = teamsList.length


function versusTeam(teamsList, numberOfTeams) {
    const scheduledTeams = [];
    const Null = -1;
    if (numberOfTeams % 2 === 1) {
        teamsList.push(Null);
        numberOfTeams += 1;
    } 
    for (let j = 0; j < numberOfTeams - 1; j += 1) {
        scheduledTeams[j] = [];

        for (let Away = 0; Away < numberOfTeams / 2; Away += 1) {
            const reverseTeams = numberOfTeams - 1 - Away;
            if (teamsList[Away] !== Null && teamsList[reverseTeams] !== Null) {
                scheduledTeams[j].push([teamsList[reverseTeams], 'V/S', teamsList[Away]]);
            }
        }
        teamsList.splice(1, 0, teamsList.pop());
    }
    return scheduledTeams
}
temporary = versusTeam(teamsList, numberOfTeams)

perTeamArray = []
for (eachTeams in temporary) {
    for (teamInsideTeams in temporary[eachTeams]) {
        perTeamArray.push(temporary[eachTeams][teamInsideTeams])
    }
    
}

function splittingMatches(perTeamArray) {
    GroupA = []
    GroupB = []
    for (perElement in perTeamArray) {
        if (perElement % 2 == 0) {
            GroupA.push(perTeamArray[perElement])
        } else {
            GroupB.push(perTeamArray[perElement])
        }


    }
}
splittingMatches(perTeamArray)

saturday = new Date('2022-08-27')
sunday = new Date('2022-08-28')
function dateGet(saturday, sunday) {
    var arr = new Array();
    var dt = new Date(saturday);
    var dt1 = new Date(sunday)
    for (i = 0; i < perTeamArray.length / 2; i++) {
        arr.push((new Date(dt)).toString().substring(0, 15));
        arr.push((new Date(dt1).toString().substring(0, 15)))
        dt.setDate(dt.getDate() + 7);
        dt1.setDate(dt1.getDate() + 7)
    }
    return arr
}

let array = dateGet(saturday, sunday)


function result(GroupA, GroupB) {
    matchNo = 1
    day = 1
    for (i in GroupA) {
        console.log('-----------------------------------------------------');
        console.log('DAY:', day++, 'DATE:-', array[i]);
        console.log('MATCH NO:-', matchNo++, '  ', '**SLOT-1**');
        console.log(GroupA[i]);
        console.log('                                                     ');
        console.log('MATCH NO:-', matchNo++, '  ', '**SLOT-2**');
        console.log(GroupB[i]);
        console.log('-----------------------------------------------------');

    }
    console.log('Total Number of Matches', matchNo - 1);
}
result(GroupA, GroupB)


function pointsTable(perTeamArray) {
    finalResult = []
    for (eachElement in perTeamArray) {

        matchResult = ['0', 'WIN', 'LOSE']
        let x = Math.floor((Math.random() * 2) + 1);
        finalResult.push([perTeamArray[eachElement], matchResult[x]])
    }

}
pointsTable(perTeamArray)


points = []
for (eachElement in finalResult) {
    for (everyElement in finalResult[eachElement]) {

    }
    if (finalResult[eachElement][everyElement] === 'WIN') {
        points.push(finalResult[eachElement][0][0])
    } else if (finalResult[eachElement][everyElement] === 'LOSE') {
        points.push(finalResult[eachElement][0][2])
    }
}

item = []
for (ok = 0; ok < len; ok++) {
    item.push(0)
}
if (len % 2 == 1) {
    for (i = 0; i < points.length; i++) {
        for (j = 0; j < teamsList.length - 1; j++) {
            if (points[i] == teamsList[j]) {
                if (j in item) {
                    item[j] += 2;
                } else {
                    item[j] = 2
                }

            }
        }
    }

    for (i = 0; i < teamsList.length - 1; i++) {
        console.log(`...${teamsList[i]} ..points :${item[i]}`);
    }
} else if (len % 2 == 0) {
    for (i = 0; i < points.length; i++) {
        for (j = 0; j < teamsList.length; j++) {
            if (points[i] == teamsList[j]) {
                if (j in item) {
                    item[j] += 2;
                } else {
                    item[j] = 2
                }

            }
        }
    }

    for (i = 0; i < teamsList.length; i++) {
        console.log(`...${teamsList[i]} ..points :${item[i]}`);
    }
}
for (ok = 0; ok < len; ok++) {
    console.log(`MATCH:-${GroupA[ok]} 
        RESULT:-${finalResult[ok][0][0]}->${finalResult[ok][1]} `)
}