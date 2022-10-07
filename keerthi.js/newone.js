// const netrate={
//     a:10000,
//     ab:50000,
//     abc:6000,
//     abcd:4000,
//     value:function(){
//         return this.a+this.ab+this.abc+this.abcd
//     }
// }
// console.log (netrate.value())

// let o=10
// for(let i=1;i<=o;i++){
//     console.log(i)
// }

// array=[{a:'name',
//  phnno:9952258947,
// value:2000},{b:"name,",phnno:90064532752},{c:"keerthika",phnno:57355615,value:2000}]
// for(i=0;i<=array.length;i++){
//     console.log(array[i])
// } 



// let d=[{b1:{a:1000,
//                 b:2000,
//                 c:1000,

//                    }
//               }]
              
// to=d[0].b1.a + d[0].b1.b + d[0].b1.c
// console.log(to,'total');
// av=to/3
// console.log(av,'average');
// a1=1000-av;
// b1=2000-av;
// c1=1000-av;
// console.log(Math.max(d[0].b1.a , d[0].b1.b , d[0].b1.c),'max shred amt');
// console.log(a1,b1,c1);
// console.log(Math.max(a1,b1,c1),'');
// console.log(Math.min(a1,b1,c1),'');

// const transaction=(a,b,c)=>{
//      const bill={
//         paidA:a,
//         paidB:b,
//         paidC:c,
//         average: function(){
//             return (this.A+this.B+this.C)/3
//         }
//      }
//      return bill.average()
// }
// console.log(transaction(2000,3000,4000))

// trans={bills:[{amt:[{a:1000},{b:2000},{c:1000}]},
//               {amt:[{a:100},{b:200},{c:3000}]},
//               {amt:[{a:1000},{b:2000},{c:1000}]}]}
emptylist={}
emptylist1={}
persontopay={}
persontoget={}
let d=[{b1:{a:1000,
                b:250,
                c:750,
                d:1250
                   }
              }]
              
total=d[0].b1.a + d[0].b1.b + d[0].b1.c+d[0].b1.d
console.log('total',total)
average=total/4
console.log('average',average)
a1=1000-average;
b1=250-average;
c1=750-average;
d1=1250-average
emptylist['A']=a1
emptylist['B']=b1
emptylist['C']=c1
emptylist['D']=d1
console.log(emptylist)
for( i in emptylist){
    if(emptylist[i]>0){
        persontoget[i]=emptylist[i]
    }
    else if(emptylist[i]<0){
        persontopay[i]=emptylist[i]
    }
    else if(emptylist[i]==0){
        console.log(i+"no need to pay")
    }
}console.log("persontopay",persontopay)
console.log("persontoget",persontoget)
emptylist1={}
function value(h,k){
        return h-k
    }
function sorting(obj){
    list=[]
for(i in persontopay){
    list.push (persontopay[i])
}
list=list.sort(value)
for(k of list){
    for(j in persontopay){
        if(k==persontopay[j]){
            emptylist1[j]=persontopay[j]
        }
    }
}

}
sorting(emptylist1)
console.log("sorted persontopay",emptylist1)
emptylist2={}
function value(h,k){
        return h-k
    }
function sorting(obj){
    list=[]
for(i in persontoget){
    list.push (persontoget[i])
}
list=list.sort(value)
for(k of list){
    for(j in persontoget){
        if(k==persontoget[j]){
            emptylist2[j]=persontoget[j]
        }
    }
}

}
sorting(emptylist2)
console.log("sorted persontoget",emptylist2)

for(p in persontoget){ 
for(k in emptylist1){ 
    if(persontoget[p]!=0 & emptylist1[k]){
        if(persontoget[p]>(Math.abs(emptylist1[k]))){
        console.log(`${k} Has to pay ${Math.abs(emptylist1[k])}to${p}`)
        persontopay[p]=(persontopay[p])-(Math.abs(emptylist1[k]))
        emptylist1[k]=0

    }
    else if (persontopay[p]<(Math.abs(emptylist1[k]))){
        console.log(`${k} has to pay${emptylist1[k]}to ${p}`)
        persontoget[p]=(persontopay[p])-(Math.abs(emptylist1[k]))
        persontoget[p]=0}
        else if(persontopay[p]== (Math.abs(emptylist[k]))){
            console.log(`${k} has to pay${emptylist1[k]}to ${p}`)
            emptylist1=0
            persontoget=0
        }
    }
    

}
}
// console.log(`${k} give ${Math.abs(persontopay[k])} to ${p}`)





