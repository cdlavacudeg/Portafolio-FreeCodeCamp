/*Cash Register
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]*/

function checkCashRegister(price, cash, cid) {
    if(cash-price<0) return undefined;
    let newObject={};
    let diffCP=cash-price;
    for(let i=0;i<cid.length;i++){
      newObject[cid[i][0]]=cid[i][1];
    }
  
    let cidMoney=cid.map(arr=>{return arr[1]});
    let totalC=cidMoney.reduce((a,b)=>a+b,0.00);
    totalC=totalC;
    console.log(totalC,diffCP,totalC==diffCP);
  
    if (totalC==diffCP) return {status: "CLOSED", change: cid};
    
    let moneyValue={
      'ONE HUNDRED':100,
      'TWENTY':20,
      'TEN':10,
      'FIVE': 5,
      'ONE': 1,
      'QUARTER': 0.25,
      'DIME': 0.1,
      'NICKEL': 0.05,
      'PENNY':	0.01
    };
  
    let change=[];
    for(let i in moneyValue){
      //console.log(i);
      //console.log(diffCP,moneyValue[i],acum)
          let acum=0;
          while(diffCP>=moneyValue[i] && newObject[i]>0){
            //console.log(diffCP,newObject[i]);
            newObject[i]=(newObject[i]-moneyValue[i]).toFixed(2);
            diffCP=(diffCP-moneyValue[i]).toFixed(2);
            acum=acum+moneyValue[i];
            //console.log('Final:',diffCP,newObject[i],acum);
          }
          change.push([i,acum]);
      }
  
    if (diffCP>0) return {status: "INSUFFICIENT_FUNDS", change: []};
    
    change =change.filter(money=>money[1]!=0);
    return {status:'OPEN', change:change};
  }
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));