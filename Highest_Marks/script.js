function highestMarksDetector(){
    const marks=[12,24,56,78,89];
    let result=marks[0];
    for(var i=0;i<marks.length;i++)
    {
         result =(marks[i]>=result)?marks[i]:result;
        
    }
    return result;
}

let highest =highestMarksDetector();
document.write(highest+"is the highest marks of the class");