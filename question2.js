function leapyear(year)
{
    if(year%4===0){
        if(year%100 ===0){
            if(year%400 ===0){
                return true;
            }
            else {return false}
        }
        else{
            return true;
        }
    }
    else{
        return false;
    }
}
console.log(leapyear(2016));
console.log(leapyear(2020));
console.log(leapyear(2023));
console.log(leapyear(2001));