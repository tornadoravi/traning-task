function value(x){
       list=[]
       add=0
       average=0
       // for(i=0;i<=x.length;i++){
           for(j in x){
               list.push(x[j])
       }
       for(k in list){
           add=add+k
       }
       average=add/list.length
    }
   // }
   value(list)
   console.log("average",list)