// function facto(obj){
//     fact=1
//     for (i=1;i<obj;i++){
//         fact=fact*1
//     }
//     console.log("fact",fact)
//      return fact
     
// }

// function factroial(x,y,z){
//     if (arguments.length==0){
//         console.log( "enter the arrugment")
//     }
//     else if (arguments.length==1){
//         console.log(facto(x)+x)
//     }
//     else if (arguments.length==2){
//         console.log (facto(x+y))
//     }
//     else if (arguments.length==3){
//         console.log(x+1,y+1,z+1)
//     }
//     else{
//         for ( i of arguments){
//             console.log(i)
//         }
//     }
// }
// factroial(3)

// const aver=(num)=>{
//     sum=0
//     count=0

//     for ( i of num){
//         sum=sum+i
//         count++
//     }
//     return sum/count
// }
// arr=[1,2,3,4,5,6].filter(num=>num>3)
// console.log(arr)
// console.log(aver(arr))


// ar=[1,2,3,4,5,7]
// // even=ar.filter(num=>num%2==0)

// function factroial(obj){
//     fact=1
//     for (i=1;i<=obj;i++){
//         fact=fact*i

//     }return fact
// }function add(obj){
//     sum=0
//     for(i=0;i<=obj;i++){
//         sum=sum+i
//     }return sum
// }
// d=[]
// for( i in ar){
//     if ( ar[i]%2==0){
//   d.push(factroial(ar[i]))}

// else{    
//     add=ar.filter(num=>num%2!==0)

// }}

// console.log("add",add)
// // console.log("even",even)
// console.log(d)


// students=[
//     {name:'melvin',networth:142},
//     {name:'ram',networth:399},
//     {name:'mani',networth:142},
//     {name:'kamal',networth:1428},
//     {name:'naveen',networth:18}
// ]
// arr=students.filter(n=>n.networth>142)
// console.log(arr)
// for( i of arr){
//     console.log(`the networth of ${i.name} is ${i.networth}`)
// }
// arr1=students.reduce((n,m)=>n+m.networth,0 )
// console.log( arr1)




// Bill_list=[{A:2000,B:200,C:1000},
//     {A:1500,B:0,C:0,D:1300},
//     {B:1000,C:0,D:700},
//     {A:1000,B:800,C:650}]
// // for( i in Bill_list){
// // }

//     a2=Bill_list.reduce((a,b)=>a+b.C,0)
//     console.log(a2)
// function
        
        // function count( obj){
        //     v="aeiou"
        //     count1=0
        //     for ( i in obj){
        //         for(j in v){
        //         if( obj[i]==v[j]){
        //             // v[i]+=1
        //             count1++
        //         }
        //         else{
        //             // v[i]=1
        //         }}
        //     }}
        //     count("javascript")
        //     console.log( count1)
        empt={}
    v="aeiou"
        str="javascript".split("")
        for( i of str){
            if(i in empt){
                empt[i]+=1
            }
            else{
                 empt[i]=1
            }
        }
        for( i of str){
        for ( j  in v ){
        console.log( empt)}}