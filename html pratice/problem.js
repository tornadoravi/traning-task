productList=[
    {procduct:"p1",cost:100, seles:500,profit1:function(){ return this.cost - this.seles}},
    {procduct:"p2",cost:300, seles:900,profit1:function(){ return this.cost - this.seles}},
    {procduct:"p3",cost:1300, seles:100,profit1:function(){ return this.cost - this.seles}},
    {procduct:"p4",cost:12100, seles:500,profit1:function(){ return this.cost - this.seles}},
    {procduct:"p5",cost:10140, seles:400,profit1:function(){ return this.cost - this.seles}},
]
// console.table(productList[0].cost)
ss=productList[0].cost
console.log(ss)
 c= productList.reduce((a, b) => ({cost: (a.cost + b.cost)/productList.length}));
 console.log(" cost avarage:",c)
 d= productList.reduce((a, b) => ({seles: (a.seles + b.seles)/productList.length}));
 console.log(" sales avarage:",d) 

