a=[1,2,3]
b=[10,20,30,40,50,60]

for(i=0;i<a.length;i++){
   for(j=0;j<b.length;j++){
    if((i+1)*2==j){
         b.push(a[i])
    }
   }
}console.log(b);