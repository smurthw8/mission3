

//When user inputs grates and clicks "Calculate grade", this function will calculate thier final grade and diplay
//their final % and letter grade

$("#calculate").click(function () {
    //calculate final grade percentage 
    let finalgrade = ($("#assignments").val() * .55) + ($("#gp").val() * .05) + ($("#quizzes").val() * .1) + ($("#exams").val() * .2) + ($("#intex").val() * .1);
    finalgrade = (finalgrade.toFixed(2).toString())

    //determine lettergrade based on final grade
    let lettergrade = ""
    if (finalgrade >= 94) {
        lettergrade = "A"
    } else if (finalgrade < 94 && finalgrade >= 90) {
        lettergrade = "A-"
    } else if (finalgrade < 90 && finalgrade >= 87) {
        lettergrade = "B+"
    } else if (finalgrade < 87 && finalgrade >= 84) {
        lettergrade = "B"
    } else if (finalgrade < 84 && finalgrade >= 80) {
        lettergrade = "B-"
    } else if (finalgrade < 80 && finalgrade >= 77) {
        lettergrade = "C+"
    } else if (finalgrade < 77 && finalgrade >= 74) {
        lettergrade = "C"
    } else if (finalgrade < 74 && finalgrade >= 70) {
        lettergrade = "C-"
    } else if (finalgrade < 70 && finalgrade >= 67) {
        lettergrade = "D+"
    } else if (finalgrade < 67 && finalgrade >= 64) {
        lettergrade = "D"
    } else if (finalgrade < 64 && finalgrade >= 60) {
        lettergrade = "D-"
    } else { lettergrade = "E" }


    if ($("#datavalidation").val() == "") {

        //concatenate output listing final letter and percentage grade 
        let output = "Your final grade is:\n" + finalgrade + "% " + lettergrade;

        //display output in an alert box
        alert(output);
    }
})

