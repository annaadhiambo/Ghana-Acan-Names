function nameCalculator(){
    let date = document.getElementById('date').Value;
    let d = date.split('-')
    let year = d[0];
    let month = parseInt(d[1]);
    let day = parseInt(d[2]);
    let cc = parseInt(year.slice(0,2));
    let yy = parseInt(year.slice(2,4));
    daysOfTheWeek =  (( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(month+1)/10)) + day ) % 7)
    maleNames = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame']
    femaleNames = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama']
    dayys = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    let gender = document.getElementById('gender').value;
    if (gender === 'male'){
        alert('Get to know when you were born' + dayys[daysOfTheWeek] + 'and your name in Akan which is' + maleNames[daysOfTheWeek])
    }
    else{
        alert('Get to know when you were born' + dayys[daysOfTheWeek] + 'and your name in Akan which is' + femaleNames[daysOfTheWeek])
    }
}