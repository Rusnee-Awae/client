let score=69;
for(i=0;i<1;i++)
if(score>=0 && score<=100){
    let grade;
    if(score>=80){
        grade='A';
    }
    else if(score>=70 && score<=80){
        grade='B';
    }
    else if(score>=60 && score<=70){
        grade='C';
    }
    else if(score>=50 && score<=60){
        grade='D';
    }
    console.log(grade)
}