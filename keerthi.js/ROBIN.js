var teamNameList= ['team1', 'team2', 'team3','team4', 'team5']
team=[]
list=[]
count=0
// slice2=teamNameList.slice()
// console.log("DDDd",slice2);
for( i of teamNameList){
for(j=teamNameList.indexOf(i)+1;j<teamNameList.length;j++){   
list.push(i)
list.push(teamNameList[j])
team.push([i+" "+ "vs" + " "+teamNameList[j]])

count++
}}
console .log("no of Match:",count)
// console.log(team)
// 

// spp=team.slice()
// console.log ("spp",spp)
aa=Math.ceil(team.length/2)
forenoon=(team.slice(0,aa))
// console.log("forenoon_slot:",forenoon)

team_Reverse=(team.reverse())
// console.log(team_Reverse)
// bb=Math.ceil(team_Reverse.length/2)
afternoon=(team_Reverse.slice(0,team_Reverse.length/2))
// console.log("afternoon_slot:",afternoon)

// console.log( afternoon[0][0].slice(0,5))
// console.log(afternoon[1][0].slice(0,5));
c=1
day=[]
for( m=0;m<=afternoon.length;m++){
        console.log( afternoon[0][0].slice(0,5))
        // console.log(afternoon[1][0].slice(0,5));
        // if( afternoon[m][0].slice(0,5)!==(afternoon[c][0].slice(0,5))){
        //         // day.push()
        //         console.log('true');
        //         c++
        // }

        
}






