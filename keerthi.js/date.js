// weekdaysList=['sunday','monday','tuesday','wednsday','thursday','friday','saturday']
// date =new Date()
// s=6-(date.getDay())
// console.log(date.getDate());
// console.log(date.getMonth()+1);
// console.log(date.getYear()+1900);


// console.log( "today:",weekday)
// console.log( "nextweeekday:",s)
// next=(date.getDay())
// // next1=new Date(date.getTime()+(s+1)*24*60*60*1000)
// // next2=new Date(date.getTime()+(s+7)*24*60*60*1000)
// // console.log(next)

// console.log("coming saturday:",next,weekdaysList[next]);
// console.log("coming sunday:",next1,weekdaysList[next1.getDay()]);
// console.log("coming sunday:",next2,weekdaysList[next2.getDay()]);


// day=new Date()
// next=new Date(day.getTime()+7*24*60*60*1000)
// console.log(day)
// console.log(next)
// a=setValue(new Date(new Date().setHours(0,0,0,0))).setNumberFormat('MM/dd/yyyy');
// console.log(a)

// var formattedDate = Utilities.formatDate(new Date(), "GMT", "yyyy-MM-dd");
// console.log(formattedDate)


// weekdaysList=['sunday','monday','tuesday','wednsday','thursday','friday','saturday']
// date =new Date()
// s=6-(date.getDay())
// next=new Date(date.getTime()+s*24*60*60*1000)
// next1=new Date(date.getTime()+(s+1)*24*60*60*1000)
//  saturday=String(next,weekdaysList[next.getDay()]).slice(0,15);
// sunday=String(next1,weekdaysList[next1.getDay()]).slice(0,15);
// console.log(saturday,sunday)






teamsList=['team1','team2','team3','team4']
len=teamsList.length
function versus(teams) {
team=[];
list=[];
count=0

for(i of teams){
    for(j=teams.indexOf(i)+1;j<teams.length;j++){
        count++
        list.push(i)
        list.push(teams[j])
        team.push([count,i,teamsList[j]])
    }
}return team}
versus(teamsList)
len1=team.length
console.log("No Of matches:",count)
console.log("matches of teams:",team)
console.log("no of teams:",len1)



function count1(num){
    counts=0
        for(i of num){
            for(j=num.indexOf(i)+1;j<num.length;j++){
                counts++
    }}return counts}
    count1 (teamsList)
    // console.log("county",counts)


saffule=[]
if (counts<7){
    saffule.push(team[Math.ceil(team.length / 2) - 1])
reverseTeams=[]
for(m in team){
reverseTeams.push(team[m])
}
saffulling=reverseTeams.reverse()
// console.log(reverseTeams)



for(i=0;i<Math.floor(team.length/2);i++){
    saffule.push(team[i])
    saffule.push(reverseTeams[i]);
        
}}
else{
    console.log("dgd")
}
console.log("shaffuling",saffule)








