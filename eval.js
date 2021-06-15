var num=[],op=[],hp=[],lp=[],i,j;
var inp="8.2+2.8";
var temp="",hind;
var val=['0','1','2','3','4','5','6','7','8','9'];
for(i=0;i<inp.length;i++)
{
  if(inp[i] in val || inp[i]==='.')
  {
      temp+=inp[i]; 
  }
  else
  {
      num.push(temp);  
      temp="";
      op.push(inp[i]); 

  }
}
num.push(temp);
console.log(num);
console.log(op);
for(i=0;i<op.length;i++)
{
    if(op[i]==='*'||op[i]=='/')
    {
        hp.push(op[i]);
    }
    else
    {
        lp.push(op[i]);
    }
}
console.log(hp);
console.log(lp);   
for(i=0;i<hp.length;i++)  
{
   hind= op.indexOf(hp[i]);
   num.splice(hind,2,calc(num[hind],op[hind],num[hind+1]));
   op.splice(hind,1);
} 
console.log(num,op);
for(i=0;i<lp.length;i++)
{
   hind= op.indexOf(lp[i]);
   num.splice(hind,2,calc(num[hind],op[hind],num[hind+1]));
   op.splice(hind,1);
} 
console.log(num,op);
function calc(val1,opr,val2)
{
    val1=Number(val1);
    val2=Number(val2);
    switch(opr)
    {
        case '+': return val1+val2;
        case '-': return val1-val2;
        case '*': return val1*val2;
        case '/': return val1/val2;
        default : return ;
    }
}
console.log(num[0]);