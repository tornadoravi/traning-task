teamNameList=[{teamName:"chennai",slot_no:1},{teamName:"madurai"},{teamName:"covai"}]
// console.log(teamNameList[0].slot_no)
// function teamVS(teams){
// team=[]
// list=[]
// count=0
//     for( i  in teams){
//         for(j=teams.indexOf(teams[i])+1;j<teams.length;j++){   
//         list.push(i)
//         list.push(teams[j])
//         team.push(i+" "+ "vs" + " "+teams[j])
//         count++
//         }}
//         return team
// }

for( k in  teamNameList){
    for ( m in teamNameList[k]){
   console.log(teamNameList[k][m])
   console.log(teamNameList.indexOf(teamNameList[k][m]))
   

}}
