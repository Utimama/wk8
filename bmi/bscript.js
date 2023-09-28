function calculateAverage() {
    let subject1 = parseFloat(document.getElementById("mathematics").value);
    let subject2 = parseFloat(document.getElementById("english").value);
    let subject3 = parseFloat(document.getElementById("physics").value);
    let subject4 = parseFloat(document.getElementById("chemistry").value);
    let subject5 = parseFloat(document.getElementById("biology").value);
    let para1 = document.querySelector('#result')
    let para2 = document.querySelector('#recommendation')

    let total = subject1 + subject2 + subject3 + subject4 + subject5;
    let average = total / 5;

    if (!isNaN(average)) {
        para1.innerHTML = "Average Score: " + average.toFixed(2);
    } else {
        para1.innerHTML = "Please enter valid scores for all subjects.";
    }

    average >= 70 ? para2.style.backgroundColor = 'green':
    average >= 50 ? para2.style.backgroundColor = 'orange': 
    para2.style.backgroundColor = 'red' 
     
    let recommendation = "";
    if (average >= 80) {
        recommendation = "Excellent";
    } else if (average >= 60) {
        recommendation = "Average";
    } else if (average >= 50) {
        recommendation = "Below Average";
    } else if (average >= 40) {
        recommendation = "Pass";
    } else {
        recommendation = "Fail";
    }

    para2.textContent = recommendation
}
        

