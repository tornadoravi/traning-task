
// // const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// // var today = new Date();
// // let day = days[today.getDay()];
// // var dd = String(today.getDate()).padStart(2, '0');
// // var mm = String(today.getMonth() + 1).padStart(2, '0');
// // var yyyy = today.getFullYear();
// // sun=Number(dd)+4

// // today = sun + '/' + mm + '/' + yyyy;


// // console.log(today)
// // console.log(day)
// // console.log(sun)
// // teams= ['team1', 'team2', 'team3','team4','team5','team6']

// // var firstDay = new Date("2022/08/28");
// // var fiDay = new Date("2022/08/29");
// // function dateGet(saturday, sunday) {
// //     var arr = [];
// //     var dt = new Date(saturday);
// //     var dt1 = new Date(sunday)
// //     for (i = 0; i < teams.length / 2; i++) {
// //         arr.push((new Date(dt)).toString().substring(0, 15));
// //         arr.push((new Date(dt1).toString().substring(0, 15)))
// //         dt.setDate(dt.getDate() + 7);
// //         dt1.setDate(dt1.getDate() + 7)
// //     }
// //     return arr
// // }
// // let array = dateGet(firstDay, fiDay)
// // console.log(arr);



// teamsList = ['team1', 'team2', 'team3','team4','team5', 'team6','team7']
// len = teamsList.length
// function versus(teams) {
//     team = [];
//     list = [];
//     count = 0
//     len = team.length
//     for (i of teams) {
//         for (j = teams.indexOf(i) + 1; j < teams.length; j++) {
//             count++
//             list.push(i)
//             list.push(teams[j])
//             team.push([count, i, teamsList[j]])
//         }
//     } return team
// }
// versus(teamsList)
// console.log("No Of matches:", count)
// // console.log("matches of teams:", team)
// // console.log("no of teams:", len)
// // // console.log(list)
// function count1(num) {
//     counts = 0
//     for (i of num) {
//         for (j = num.indexOf(i) + 1; j < num.length; j++) {
//             counts++
//         }
//     } return counts
// }
// count1(teamsList)
// // console.log("county", counts);
// // **********************************************************************************************************************************************************************
// function shuffling(match) {
//     saffule = [];
//     if (counts > 6 && counts % 2 != 0) {
//         saffule.push(match[Math.ceil(match.length / 2) - 1])
//         // console.log( saule)

//         for (let k = 0; k < Math.round(match.length / 2); k++) {

//             for (l of match) {

//                 if (!(saffule.includes(l))) {
//                     if (saffule[saffule.length - 1][1] != l[1] && saffule[saffule.length - 1][2] != l[1] && saffule[saffule.length - 1][2] != l[2] && saffule[saffule.length - 1][1] != l[2]) {

//                         saffule.push(l)
//                     }
//                 }
//             }
//         }
//         for (k of match) {
//             if (!(saffule.includes(k))) {
//                 saffule.splice(Math.round(saffule.length / 2), 0, k)
//             }
//         }
//     }
//     else if (counts > 6 && counts % 2 == 0) {
//         // console.log("check");
//         saffule.push(match[Math.ceil(match.length) - 1])
//         for (let k = 0; k < Math.round(match.length / 2); k++) {
//             for (l of match) {
//                 if (!(saffule.includes(l))) {
//                     if (saffule[saffule.length - 1][1] != l[1] && saffule[saffule.length - 1][2] != l[1] && saffule[saffule.length - 1][2] != l[2] && saffule[saffule.length - 1][1] != l[2]) {
//                         saffule.push(l)
//                     }
//                 }
//             }
//         }
//     }
//     else {
//         // console.log("check below<4")
//         reverseTeams = []
//         for (m in match) {
//             reverseTeams.push(match[m])
//         }
//         saffulling = reverseTeams.reverse()
//         // console.log(reverseTeams)
//         for (i = 0; i < Math.floor(match.length / 2); i++) {
//             saffule.push(team[i])
//             saffule.push(reverseTeams[i]);
//         }
//     }
//     return saffule
// }
// shuffling(team)
// // console.log("Suaffle Team List:", saffule)
// // console.log("no the saffule", saffule.length)
// // **********************************************************************************************************************************************************************************
// morningSlot = []
// eveningSlot = []
// for (u in saffule) {
//     if (Math.ceil([u] % 2) == 0) {
//         morningSlot.push(saffule[u])
//     }
//     else if (Math.ceil([u] % 2) != 0) {
//         eveningSlot.push(saffule[u])
//     }
// }
// // console.log("morningSlot slot", morningSlot)
// // console.log("eveningSlot slot", eveningSlot)
// for (y in morningSlot) {
//     if (morningSlot.length == eveningSlot.length) {

//     }
//     else {
//         eveningSlot.push("no matches")
//     }
//     // console.log(morningSlot[y], 'slot1')
//     // console.log(eveningSlot[y], 'slot2')
// }
// daysSlot = []
// weekdaysList = ['sunday', 'monday', 'tuesday', 'wednsday', 'thursday', 'friday', 'saturday']
// date = new Date()
// s = 6 - (date.getDay())
// //  console.log(s);
// x = 0
// for (i = 1; i <= Math.ceil(counts / 2); i++) {
//     next = new Date(date.getTime() + (s + x) * 24 * 60 * 60 * 1000)
//     next1 = new Date(date.getTime() + (s + 1 + x) * 24 * 60 * 60 * 1000)
//     x += 7
//     saturday = String(next, weekdaysList[next.getDay()]).slice(0, 15);
//     sunday = String(next1, weekdaysList[next1.getDay()]).slice(0, 15);
//     daysSlot.push(saturday, sunday)
// }
// // console.log(daysSlot);
// function summary(days, slot1, slot2) {
//     match = 1
//     day = 1
//     if (counts > 5) {
//         for (i = 0; i < Math.ceil(counts / 2); i++) {
//             console.log("****************************************************************************************************************************")
//             console.log(`day:${day}                                                                                                        ${days[i]}`)
//             console.log("****************************************************************************************************************************")
//             day++
//             console.log(`match:${match}                                                                                                         slot1`)
//             match++
//             console.log("                                        ", slot1[i][1] + '   vs  ' + slot1[i][2], "                                         ");
//             console.log(`match:${match}                                                                                                         slot2`)

//             match++
//             console.log("                                        ", slot2[i][1] + '   vs  ' + slot2[i][2], "                                         ");
//             console.log("****************************************************************************************************************************")
//         }
//     }
//     else if (counts < 5) {
//         for (i = 0; i < Math.floor(counts / 2); i++) {
//             // console.log("below 4")
//             console.log("****************************************************************************************************************************")
//             console.log(`day:${day}                                                                                                        ${days[i]}`)
//             console.log("****************************************************************************************************************************")
//             day++
//             console.log(`match:${match}                                                                                                         slot1`)
//             match++
//             console.log("                                        ", slot1[i][1] + '   vs  ' + slot1[i][2], "                                         ");
//             console.log(`match:${match}                                                                                                         slot2`)
//             match++
//             console.log("                                        ", slot2[i][1] + '   vs  ' + slot2[i][2], "                                          ");
//             console.log("****************************************************************************************************************************")
//         }
//     }
// }
// summary(daysSlot, morningSlot, eveningSlot)








// interface  realise{
//     versionName:string,
//     releseDate:string,
//     bugs:string[],
//     features:string[],
//     author:string[],
//     type:string[]
// }
// interface bug{
//     bugsId:string,
//     description:string}

let version1=[{
     versionName:"7.0. 01 (7001)",
     releseDate:"23/03/2021",
     bugs:["b1E35P"],
     features:["1st update"],
     author:["ravi"],
     type:["patch"]
},
{
    versionName:"7.0. 03 (7003) ",
    releseDate:"21/09/2021",
    bugs:["b1E3T6"],
    features:["2 nd update"],
    author:["srini"],
    type:["relese"]
},
{
    versionName:"7.0. 04 (7004",
    releseDate:"10/10/2022",
    bugs:["b1E357P"],
    features:["3 rd update"],
    author:["srini"],
    type:["relese"]
}]

const bugidList=[{
    id:"b1E35P",
    details:"fixed the anmiation"
},{
    id:"b1E3T6",
    details:"fixed the bugs for android"
},
{
    id:"b1E357P",
    details:"fixed the bugs for sound"
}
]
console.table( version1)
// enterid=String(prompt("enter the id"))
//************************************************************************************************************************************** */
enterid="b1E35P"
console.log(enterid)
for(let i=0 ;i<bugidList.length;i++){
    if(bugidList[i].id==enterid){
        console.log(bugidList[i].details)
        break
    }
}
// **************************************************************************************************************************************
checkyear="2021"
for( i=0 ;i< version1.length;i++){
    year=((version1[i].releseDate).slice(-4))
    console.log(year)
    if(checkyear==year){
        console.log(version1[i])
        break
    }
}
// ****************************************************************************************************************************************
checkfeatures="1st update"
for( i=0 ;i< version1.length;i++){
    cnfeatures=version1[i].features
    console.log(cnfeatures)
    if(cnfeatures==checkfeatures){
        console.log(version1[i])
        break
    }
}
// *******************************************************************************************************************************************

// let newarray=[];
// for(let i=0;i<v1.length;i++){
//     for(let j=0;j<v1[i].author.length;j++){
//             newarray.push(v1[i].author[j])    
//     }
// }console.log(newarray);
// let arr=['RAVI','RAM','kamal','SIVA','srinivasan']
// let arr2=[]
// for(let k=0;k<newarray.length;k++){
//     for(let z=0;z<arr.length;z++){
//         // arr2[k]=[]
//         if(newarray[k]==arr[z]){
//             if(z in arr2){
//                 arr2[z]+=1;
//             }else{
//                 arr2[z]=1;
//             }
//     }
//   }
// }
// console.log(arr2);



