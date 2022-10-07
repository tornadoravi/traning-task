tornament={teamsList : ['team1', 'team2', 'team3','team4','team5']}
len =tornament. teamsList.length
function versus(teams) {
    team = [];
    list = [];
    count = 0
    len = team.length
    for (i of teams) {
        for (j = teams.indexOf(i) + 1; j < teams.length; j++) {
            count++
            list.push(i)
            list.push(teams[j])
            team.push([count, i, tornament.teamsList[j]])
        }
    } return team
}
versus(tornament.teamsList)
console.log("No Of matches:", count)
// console.log("matches of teams:", team)
// console.log("no of teams:", len)
// // console.log(list)
function count1(num) {
    counts = 0
    for (i of num) {
        for (j = num.indexOf(i) + 1; j < num.length; j++) {
            counts++
        }
    } return counts
}
count1(tornament.teamsList)
// console.log("county", counts);
// **********************************************************************************************************************************************************************
function shuffling(match) {
    saffule = [];
    if (counts > 6 && counts % 2 != 0) {
        saffule.push(match[Math.ceil(match.length / 2) - 1])
        // console.log( saule)

        for (let k = 0; k < Math.round(match.length / 2); k++) {

            for (l of match) {

                if (!(saffule.includes(l))) {
                    if (saffule[saffule.length - 1][1] != l[1] && saffule[saffule.length - 1][2] != l[1] && saffule[saffule.length - 1][2] != l[2] && saffule[saffule.length - 1][1] != l[2]) {

                        saffule.push(l)
                    }
                }
            }
        }
        for (k of match) {
            if (!(saffule.includes(k))) {
                saffule.splice(Math.round(saffule.length / 2), 0, k)
            }
        }
    }
    else if (counts > 6 && counts % 2 == 0) {
        // console.log("check");
        saffule.push(match[Math.ceil(match.length) - 1])
        for (let k = 0; k < Math.round(match.length / 2); k++) {
            for (l of match) {
                if (!(saffule.includes(l))) {
                    if (saffule[saffule.length - 1][1] != l[1] && saffule[saffule.length - 1][2] != l[1] && saffule[saffule.length - 1][2] != l[2] && saffule[saffule.length - 1][1] != l[2]) {
                        saffule.push(l)
                    }
                }
            }
        }
    }
    else {
        // console.log("check below<4")
        reverseTeams = []
        for (m in match) {
            reverseTeams.push(match[m])
        }
        saffulling = reverseTeams.reverse()
        // console.log(reverseTeams)
        for (i = 0; i < Math.floor(match.length / 2); i++) {
            saffule.push(team[i])
            saffule.push(reverseTeams[i]);
        }
    }
    return saffule
}
shuffling(team)
console.log("Suaffle Team List:", saffule)
// console.log("no the saffule", saffule.length)
// **********************************************************************************************************************************************************************************
morningSlot = []
eveningSlot = []
for (u in saffule) {
    if (Math.ceil([u] % 2) == 0) {
        morningSlot.push(saffule[u])
    }
    else if (Math.ceil([u] % 2) != 0) {
        eveningSlot.push(saffule[u])
    }
}
// console.log("morningSlot slot", morningSlot)
// console.log("eveningSlot slot", eveningSlot)
for (y in morningSlot) {
    if (morningSlot.length == eveningSlot.length) {

    }
    else {
        eveningSlot.push("no matches")
    }
    // console.log(morningSlot[y], 'slot1')
    // console.log(eveningSlot[y], 'slot2')
}
daysSlot = []
// weekdaysList = ['sunday', 'monday', 'tuesday', 'wednsday', 'thursday', 'friday', 'saturday']
date = new Date()
s = 6 - (date.getDay())
x = 0
for (i = 1; i <= Math.ceil(counts / 2); i++) {
    next = new Date(date.getTime() + (s + x) * 24 * 60 * 60 * 1000)
    next1 = new Date(date.getTime() + (s + 1 + x) * 24 * 60 * 60 * 1000)
    x += 7
    saturday = String(next).slice(0, 15);
    sunday = String(next1).slice(0, 15);
    daysSlot.push(saturday, sunday)
}
console.log(daysSlot);
matchlist=[]
function summary(days, slot1, slot2) {
    match = 1
    day = 1
    morningSlot1={}
    eveningslot1={}
    if (counts > 5) {
        for (i = 0; i < Math.ceil(counts / 2); i++) {
           
            

 
    morningSlot1["Day"]=days[j]
   console.log(days[i],'klkkjjjlj');
    morningSlot1["matchNo"]=match
    match++
    morningSlot1["slot"]="1"
    morningSlot1["Venue"]="Eden Gardens"
    morningSlot1["Time"]="12.00PM"
    morningSlot1["Match"]=slot1[i][1] + '   vs  ' + slot1[i][2]
    matchlist.push(morningSlot1)

    eveningslot1["matchNo"]=match
    match++
    eveningslot1["slot"]="2"
    eveningslot1["Venue"]="Wankhede Stadium"
    eveningslot1["Time"]="4.30PM"
    eveningslot1["Match"]=slot2[i][1] + '   vs  ' + slot2[i][2]

    

    matchlist.push(eveningslot1)
    
            // // console.log("****************************************************************************************************************************")
            // // console.log(`day:${day}                                                                                                        ${days[i]}`)
            // // console.log("****************************************************************************************************************************")
            // // day++
            // // console.log(`match:${match}                                                                                                         slot1`)
            // // match++
            
            // // console.log(`venue:Eden Gardens                                                                                          time:12.00pm`)
            
            // console.log("                                              ", slot1[i][1] + '   vs  ' + slot1[i][2], "                                         ");

            // console.log(`match:${match}                                                                                                         slot2`)
            // match++

            // console.log(`venue:Wankhede Stadium                                                                                      time:4.30pm`)

            // console.log("                                              ", slot2[i][1] + '   vs  ' + slot2[i][2], "                                         ");
            // console.log("****************************************************************************************************************************")
        }
    }
    else if (counts < 5) { // // console.log("below 4")
            // console.log("****************************************************************************************************************************")
            // console.log(`day:${day}                                                                                                        ${days[i]}`)
            // console.log("****************************************************************************************************************************")
            // day++
            // console.log(`match:${match}                                                                                                         slot1`)
            // match++
            // console.log(`venue:Arun Jaitley Stadium                                                                                   time:12.00pm`)
            // console.log("                                               ", slot1[i][1] + '   vs  ' + slot1[i][2], "                                         ");
            // console.log(`match:${match}                                                                                                         slot2`)
            // match++
            // console.log(`venue:Adelaide Oval                                                                                           time:4.30pm`)
            // console.log("                                               ", slot2[i][1] + '   vs  ' + slot2[i][2], "                                          ");
            // console.log("****************************************************************************************************************************")
        
        
        for (i = 0; i < Math.floor(counts / 2); i++) {
            morningSlot1["Day"]=days[j]
            console.log(days[i],'klkkjjjlj')
            matchlist.push(morningSlot1)
            morningSlot1["matchNo"]=match
            match++
            matchlist.push(morningSlot1)
            morningSlot["slot"]="1"
            morningSlot1["Venue"]="Eden Gardens"
            morningSlot1["Time"]="12.00PM"
            morningSlot1["Match"]=slot1[i][1] + '   vs  ' + slot1[i][2]
            
            matchlist.push(morningSlot1)
        
            eveningslot1["matchNo"]=match
            match++
            eveningslot1["slot"]="2"
            eveningslot1["Venue"]="Wankhede Stadium"
            eveningslot1["Time"]="4.30PM"
            eveningslot1["Match"]=slot2[i][1] + '   vs  ' + slot2[i][2]
        
            
            matchlist.push(eveningslot1)
            
           
        }
        
    }
    console.log("morning",morningSlot1)
}
summary(daysSlot, morningSlot, eveningSlot)

console.log("fing",matchlist)