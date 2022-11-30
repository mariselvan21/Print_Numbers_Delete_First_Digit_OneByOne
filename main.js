
// var string1='education';
// var string2='';

// for(i=0;i<string1.length;i++){
// if(string1[i]=='a'||string1[i]=='e'||string1[i]=='i'||string1[i]=='o'||string1[i]=='u')
// {

// string2=string2+string1[i]
// }
// }
// console.log(string1);
// console.log(string2);

function printNum(num){
    var num=num.toString();
    for(var i=0;i<num.length;i++){
        var str='';
        for(var j=i;j<num.length;j++){
            var str=str+num[j];
        }
        console.log(str);
    }
}
printNum(97351);


