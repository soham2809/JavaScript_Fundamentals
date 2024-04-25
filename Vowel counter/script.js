function vowelCounter (string){
    var count =0;
    for(i=0;i<string.length;i++){
        if (string[i]=='a'||string[i]=='e'||string[i]=='i'||string[i]=='o'||string[i]=='u'||string[i]=='A'||string[i]=='E'||string[i]=='I'||string[i]=='O'||string[i]=='U'){
            count =count+1;
        }
    }
    return count;
}

counter =vowelCounter("soham");
console.log("the number of vowels in the given string is",counter);