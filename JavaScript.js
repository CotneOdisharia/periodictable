var num1 = 100;
 if(isNaN(num1)){
	alert(num1 + " is not a number ");
 }else{
	alert(num1 + " is a number ");
 }
 
 var string1 = "blabla"
 if(isNaN(string1)){
	alert(string1 + " is not a number");
 }else{
	alert(string1 + " is a number ");
 }

 var number = prompt("Enter a number: ");
// მას ეს დაიწერება კონსოლში :)
if(number % 2 == 0) {
    console.log("The number is even.");
}
else {
    console.log("The number is odd.");
}

console.log(typeof 40)
console.log(typeof 'vakavaka')
console.log(typeof true)
console.log(typeof idkwhattowriteinherebutithastobeundefined)

a=-5;
b=-2;
c=-6;
d=-3;
f=-1;
e="largest one is"
if (a>b && a>c && a>d && a>f)
{
    console.log(a);
}
else if (b>a && b>c && b>d && b>f)
{
    console.log(b);
}
else if (c>a && c>b && c>d && c>f)
{
    console.log(c);
}
else if (d>a && d>c && d>b && d>f)
{
    console.log(e + d);
}
else
{
    console.log(e + f);
}
