// emptylist={}
// emptylist1={}
// persontopay={}
// persontoget={}
// let d=[{b1:{a:1000,
//                 b:250,
//                 c:750,
//                 d:1250
//                    }
//               }]
              
// total=d[0].b1.a + d[0].b1.b + d[0].b1.c+d[0].b1.d
// console.log('total',total)
// average=total/4
// console.log('average',average)
// a1=1000-average;
// b1=250-average;
// c1=750-average;
// d1=1250-average
// emptylist['A']=a1
// emptylist['B']=b1
// emptylist['C']=c1
// emptylist['D']=d1
// console.log(emptylist)
// for( i in emptylist){
//     if(emptylist[i]>0){
//         persontoget[i]=emptylist[i]
//     }
//     else if(emptylist[i]<0){
//         persontopay[i]=emptylist[i]
//     }
//     else if(emptylist[i]==0){
//         console.log(i+"no need to pay")
//     }
// }console.log("persontopay",persontopay)
// console.log("persontoget",persontoget)
// emptylist1={}
// function value(h,k){
//         return h-k
//     }
// function sorting(obj){
//     list=[]
// for(i in persontopay){
//     list.push (persontopay[i])
// }
// list=list.sort(value)
// for(k of list){
//     for(j in persontopay){
//         if(k==persontopay[j]){
//             emptylist1[j]=persontopay[j]
//         }
//     }
// }

// }
// sorting(emptylist1)
// console.log("sorted persontopay",emptylist1)
// for(p in persontoget){
//     for(k in emptylist1){ //persontopay
//         if(persontoget[p]!=0 && emptylist1[k]!=0){
//             if(persontoget[p]>(Math.abs(emptylist1[k]))){
//             console.log(`${k} Has to pay ${Math.abs(emptylist1[k])}to${p}`)
//             persontopay[p]=(persontopay[p])-(Math.abs(emptylist1[k]))
//             emptylist1[k]=0
    
//         }
//         else if (persontopay[p]<(Math.abs(emptylist1[k]))){
//             console.log(`${p} has to pay${emptylist1[k]}to ${p}`)
//             persontoget[p]=(emptylist1[k])-(Math.abs(persontoget[p]))
//             persontoget[p]=0}
//         else if(persontopay[p]== (Math.abs(emptylist[k]))){
//             console.log(`${k} has to pay${emptylist1[k]}to ${p}`)
//             emptylist1=0
//             persontoget=0
//             }
//         }
//         else{
            
//         }
    
//     }
// }

//     // console.log(`${k} give ${Math.abs(persontopay[k])} to ${p}`)



    
    
    