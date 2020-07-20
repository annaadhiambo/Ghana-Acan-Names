    var maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
    var femaleNames = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];
    var dayys = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

function nameCalculator(){
    var gender = document.getElementById('gender').value; 
    var date = document.getElementById('date').value;
    date = new Date(date);

    if (gender === 'male'){
        alert(" Since you were born on " + dayys[date.getDay()] + ',' + " your name is " + maleNames[date.getDay()]);
    }
    else if(gender === 'female'){
        alert(" Since you were born on " + dayys[date.getDay()] + ',' + " your name is " + femaleNames[date.getDay()]);
    }
    else{
        alert("Error: Input your gender or correct date");''
    }

    
}
    
 