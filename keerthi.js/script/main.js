let version1=[{
    versionName:"7.0. 01 (7001)",
    releseDate:"23/03/2022",
    bugs:["b1E35P"],
    features:["1st update"],
    author:["ravi"],
    type:["patch"]
},
{
   versionName:"7.0. 03 (7003) ",
   releseDate:"21/09/2022",
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
   author:["ram"],
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
enterid=String(prompt("enter the id"))
// enterid="b1E35P"
// console.log(enterid)
for(let i=0 ;i<bugidList.length;i++){
   if(bugidList[i].id==enterid){
       console.log(bugidList[i].details)
   }
}

