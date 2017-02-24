var c=0;
function Calculate()
{
var c = document.getElementById("accuracy").value;
if (c>0)
{
var Pi=0;
var n=1;
for (i=0;i<=c;i++)
{
Pi=Pi+(4/n)-(4/(n+2))
n=n+4
}
document.getElementById("result").innerHTML = Pi;
}
else
{
alert("Error in input");
}
}
