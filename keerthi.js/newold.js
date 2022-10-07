 
//  const ref(d)=>{

// arr=[-20,-40,50,20]
// arr2=[]
// for(i in arr){

// }
// console.log(arr.sort())
// console.log(Object.entries(data).sort().reduce( (o,[k,v]) => (o[k]=v,o), {} ));

// d={'a':-50,'b':-20,'c':-40,'d':20}
// list=[]
// d2={}
// for(i in d){
//     list.push (d[i])
//     list=list.sort()
// function value(h,k){
//     return h-k
// }
// list.sort(value)
// for(k of list){
//     for(j in d){
//         if(k==d[j]){
//             d2[j]=d[j]
//         }
//     }
// }
// }console.log(list)
// console.log(d2)

// c
// console.log(d2)
// var d={A: -1916.6666666666665, B: -2666.6666666666665}

//     function value(h,k){
//         return h-k
//     }
// function sorting(obj){
// list=[]
// d2={}
// for(i in obj){
//     list.push (obj[i])
// }
// console.log(list);
// list=list.sort(value)
// for(k of list){
//     for(j in obj){
//         if(k==obj[j]){
//             d2[j]=obj[j]
        
//         }
//     }
// }

// }
// sorting(d)
// console.log(d2);

//  function removezero(){
//     d2={}
//     d={'a':0,'b':250,'c':500}
//  for(i in d){
//     if(d[i]!=0){
//         d2[i]=d[i]   
//     }
   
//  } console.log(d2); 
// } 

// removezero()

// console.log(`${j} give ${Math.abs(persontopay[j])} to ${k}`)



      
// for(i=0;i<=trans.bills.length;i++){
//     console.log(trans.bills[i]);
//     for(j=0;j<=trans.bills[i].amt.length;j++){
//         console.log(trans.bills.amt[j]);
//     }
// }
emptylist={}
persontopay={}
persontoget={}
let transaction=[{bill_1:{a:1000,
                b:250,
                c:750,
                d:1250
                 }
              }]
              
total=transaction[0].bill_1.a + transaction[0].bill_1.b +transaction[0].bill_1.c+transaction[0].bill_1.d
console.log('Total',total)
average=total/4
console.log('Average',average)
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
}console.log("Persontopay",persontopay)
console.log("Persontoget",persontoget)
sort_persontopay={}
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
            sort_persontopay[j]=persontopay[j]
        }
    }
}

}
sorting(sort_persontopay)
console.log("sorted persontopay",sort_persontopay)
sort_persontoget={}
function value(h,k){
        return k-h
    }
function sort(obj){
    list1=[]
for(i in persontoget){
    list1.push (persontoget[i])
}
list1=list1.sort(value)
for(k of list1){
    for(j in persontoget){
        if(k==persontoget[j]){
            sort_persontoget[j]=persontoget[j]
        }
    }
}

}
sort(sort_persontoget)
console.log("sorted persontoget",sort_persontoget)
for(p in sort_persontoget){//get
    for(k in persontopay){ 
        if(sort_persontoget[p]!=0 &&persontopay[k]!=0){
            if(sort_persontoget[p]>(Math.abs(persontopay[k]))){
            console.log(k, "Has to pay" ,Math.abs(persontopay[k]),"to",p)
            sort_persontoget[p]=(sort_persontoget[p])-(Math.abs(persontopay[k]))
            persontopay[k]=0
    
        }
        else if (sort_persontoget[p]<(Math.abs(persontopay[k]))){
            console.log(k, "has to pay",sort_persontoget[p],"to", p)
            persontopay[k]=Math.abs(persontopay[k])-sort_persontoget[p]
            sort_persontoget[p]=0}
        else if(sort_persontoget[p]== (Math.abs(persontopay[k]))){
            console.log(k, "has to pay",Math.abs(persontopay[k]),"to",p)
            persontopay[k]=0                                                                                                                                                          
            sort_persontoget[p]=0
        }
        
        }
        
    
    }
}














// d={'a':-20,'b':-40,'c':20,'d':50}











