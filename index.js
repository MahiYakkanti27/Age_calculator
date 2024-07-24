invalid_day=0
invalid_month=0
invalid_year=0
document.getElementById("myForm").addEventListener("submit",function(event){
    event.preventDefault();
    const day =document.getElementById("day").value;
    const month =document.getElementById("month").value;
    const year =document.getElementById("year").value;
    if(day=="" || month=="" || year==""){
        if(day==""){
            document.getElementById("day").classList.add("error");
            document.getElementById("empty_msg1").style.display="block";
            document.getElementById("dlabel").classList.add("red");
        }
        if(month==""){
            document.getElementById("month").classList.add("error");
            document.getElementById("empty_msg2").style.display="block";
            document.getElementById("mlabel").classList.add("red");

        }
        if(year==""){
            document.getElementById("year").classList.add("error");
            document.getElementById("empty_msg3").style.display="block";
            document.getElementById("ylabel").classList.add("red");
        }
    }
    else{
    const res=calculateAge(day,month,year);
    if(invalid_day==0 && invalid_month==0 && invalid_year==0){
    document.getElementById("res_years").innerHTML=res.years;
    document.getElementById("res_months").innerHTML=res.months;
    document.getElementById("res_days").innerHTML=res.days;
    }
}});
function isValidDate(date, month, year) {
    const lastDayOfMonth = new Date(year, month, 0).getDate();
    return date >= 1 && date <= lastDayOfMonth;
}
function calculateAge(birthDate, birthMonth, birthYear) {
    invalid_day=0;
    invalid_month=0;
    invalid_year=0;
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; 
    const currentDay = currentDate.getDate();

    if (!isValidDate(birthDate, birthMonth, birthYear)) {
        invalid_day=1;
        document.getElementById("day").classList.add("error");
        document.getElementById("invalid_day").style.display="block";
        document.getElementById("dlabel").classList.add("red");

    }

    if (birthMonth < 1 || birthMonth > 12) {
        invalid_month=1;
        document.getElementById("month").classList.add("error");
        document.getElementById("invalid_month").style.display="block";
        document.getElementById("mlabel").classList.add("red");

    }

    if (birthYear > currentYear) {
        invalid_year=1;
        document.getElementById("year").classList.add("error");
        document.getElementById("invalid_year").style.display="block";
        document.getElementById("ylabel").classList.add("red");
    }

    let ageYears = currentYear - birthYear;
    let ageMonths = currentMonth - birthMonth;
    let ageDays = currentDay - birthDate;

    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
        ageYears--;
        ageMonths += 12;
    }

    if (ageDays < 0) {
        const lastMonth = new Date(currentYear, currentMonth - 1, 0);
        ageDays += lastMonth.getDate();
        ageMonths--;
    }

    return {
        years: ageYears,
        months: ageMonths,
        days: ageDays,
    };
}
document.getElementById("day").addEventListener("focus",function(){
    document.getElementById("day").classList.remove("error");
    document.getElementById("empty_msg1").style.display="none";
    document.getElementById("invalid_day").style.display="none";
    document.getElementById("dlabel").classList.remove("red");

})
document.getElementById("month").addEventListener("focus",function(){
    document.getElementById("month").classList.remove("error");
    document.getElementById("empty_msg2").style.display="none";
    document.getElementById("invalid_month").style.display="none";
    document.getElementById("mlabel").classList.remove("red");
})
document.getElementById("year").addEventListener("focus",function(){
    document.getElementById("year").classList.remove("error");
    document.getElementById("empty_msg3").style.display="none";
    document.getElementById("invalid_year").style.display="none";
    document.getElementById("ylabel").classList.remove("red");
})