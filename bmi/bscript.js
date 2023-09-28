body{
    font-family: Arial, sans-serif;
    text-align: center;
}

.container {
    margin: 40px;
}

table {
    margin: 0 auto;
}

th, td {
    padding: 10px;
}

th {
    background-color: #ccc;
}

.subject-score {
    width: 60px;
}

button {
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #007BFF;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

#result {
    font-weight: bold;
    margin-top: 10px;
}

function calculateAverage() {
    var subject1 = parseFloat(document.getElementById("subject1").value);
    var subject2 = parseFloat(document.getElementById("subject2").value);
    var subject3 = parseFloat(document.getElementById("subject3").value);
    var subject4 = parseFloat(document.getElementById("subject4").value);
    var subject5 = parseFloat(document.getElementById("subject5").value);

    var total = subject1 + subject2 + subject3 + subject4 + subject5;
    var average = total / 5;

    if (!isNaN(average)) {
        document.getElementById("result").innerHTML = "Average Score: " + average.toFixed(2);
    } else {
        document.getElementById("result").innerHTML = "Please enter valid scores for all subjects.";
    }
}

        var recommendation = "";
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
        document.getElementById("recommendation").innerHTML = "Recommendation: " + recommendation;
    } else {
        document.getElementById("result").innerHTML = "Please enter valid scores for all subjects.";
    }
}
<p id="recommendation"></p>

