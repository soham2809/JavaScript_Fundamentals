const num =[9,21,12,27];
var new_num=[];
for (let i=0;i<num.length;i++)
{
   if (num[i]%3 == 0){
    if (num[i]%2 == 0)
    {
        continue;
    }
   new_num.push(num[i]);
}}
console.log(new_num);