var amtGrades, gpaU, gpaW;
var speed = 500;

setTimeout(
    function() {
        $(".frame").fadeOut(750);
        $("#content").fadeIn(750);
    }, 1750
);

function numCheck() {
    var inputValue = $('#num').val();
    if (isNaN(inputValue) || inputValue > 50 || inputValue < 1) {
        $('#displayCalcBtn').prop('disabled', true);
    } else {
        $('#displayCalcBtn').prop('disabled', false);
    }
}

function displayCalc() {
    amtGrades = $('#num').val();
    for (var i = 1; i <= amtGrades; i++) {
        if (screen.width < 1000) {
            $('#inputs').append('<div class="container cont' + i + '"><br><input type="number" id="grade' + i + '" class="textfield" placeholder="Grade" autocomplete="off"> <br><br> <select class="textfield" name="credit" id="credit' + i + '"> <option selected disabled>Course type</option> <option class="textfield" value="1.25">Health</option> <option class="textfield" value="2.5">Half Year</option> <option class="textfield" value="5">Full Year</option> <option class="textfield" value="6">Lab Courses</option> </select> <br><br> <div class="container"> <label id="spacing" class="pure-material-radio"> <input type="radio" name="group' + i + '" value="uw"> <span>Unweighted</span> </label> <label id="spacing" class="pure-material-radio"> <input type="radio" name="group' + i + '" value="cp"> <span>CP</span> </label> <br> <label id="spacing" class="pure-material-radio"> <input type="radio" name="group' + i + '" value="a"> <span>A</span> </label> <label class="pure-material-radio"><input type="radio" name="group' + i + '" value="h"> <span>H/AP</span> </label> </div> </div>');
        } else {
            $('#inputs').append('<div class="container cont' + i + '"><br><div class="left"> <input type="number" id="grade' + i + '" class="textfield" placeholder="Grade" autocomplete="off"> </div> <div class="right"> <select class="textfield" name="credit" id="credit' + i + '"> <option selected disabled>Course type</option> <option class="textfield" value="1.25">Health</option> <option class="textfield" value="2.5">Half Year</option> <option class="textfield" value="5">Full Year</option> <option class="textfield" value="6">Lab Courses</option> </select> </div> <a style="visibility: hidden">chris is stupid</a> <div class="container"> <label id="spacing" class="pure-material-radio"> <input type="radio" name="group' + i + '" value="uw"> <span>Unweighted</span> </label> <label id="spacing" class="pure-material-radio"> <input type="radio" name="group' + i + '" value="cp"> <span>CP</span> </label> <label id="spacing" class="pure-material-radio"> <input type="radio" name="group' + i + '" value="a"> <span>A</span> </label> <label class="pure-material-radio"> <input type="radio" name="group' + i + '" value="h"> <span>H/AP</span> </label> </div> </div>');
        }
        if (i == amtGrades) {
            $('#inputs').append('<br>');
        }
    }
    $('#pre').slideUp(800);
    $('#calc').slideDown(800);
}

function addCourse() {
    var tempNumGrades = parseInt(amtGrades) + 1;
    if (screen.width < 1000) {
        $('#inputs').append('<div class="container cont' + tempNumGrades + '" style="display: none;"> <input type="number" id="grade' + tempNumGrades + '" class="textfield" placeholder="Grade" autocomplete="off"> <br><br> <select class="textfield" name="credit" id="credit' + tempNumGrades + '"> <option selected disabled>Course type</option> <option class="textfield" value="1.25">Health</option> <option class="textfield" value="2.5">Half Year</option> <option class="textfield" value="5">Full Year</option> <option class="textfield" value="6">Lab Courses</option> </select> <br><br> <div class="container"> <label id="spacing" class="pure-material-radio"> <input type="radio" name="group' + tempNumGrades + '" value="uw"> <span>Unweighted</span> </label> <label id="spacing" class="pure-material-radio"> <input type="radio" name="group' + tempNumGrades + '" value="cp"> <span>CP</span> </label> <br> <label id="spacing" class="pure-material-radio"> <input type="radio" name="group' + tempNumGrades + '" value="a"> <span>A</span> </label> <label class="pure-material-radio"><input type="radio" name="group' + tempNumGrades + '" value="h"> <span>H/AP</span> </label> </div><br></div>');
    } else {
        $('#inputs').append('<div class="container cont' + tempNumGrades + '" style="display: none;"> <div class="left"> <input type="number" id="grade' + tempNumGrades + '" class="textfield" placeholder="Grade" autocomplete="off"> </div> <div class="right"> <select class="textfield" name="credit" id="credit' + tempNumGrades + '"> <option selected disabled>Course type</option> <option class="textfield" value="1.25">Health</option> <option class="textfield" value="2.5">Half Year</option> <option class="textfield" value="5">Full Year</option> <option class="textfield" value="6">Lab Courses</option> </select> </div> <a style="visibility: hidden">chris is stupid</a> <div class="container"> <label id="spacing" class="pure-material-radio"> <input type="radio" name="group' + tempNumGrades + '" value="uw"> <span>Unweighted</span> </label> <label id="spacing" class="pure-material-radio"> <input type="radio" name="group' + tempNumGrades + '" value="cp"> <span>CP</span> </label> <label id="spacing" class="pure-material-radio"> <input type="radio" name="group' + tempNumGrades + '" value="a"> <span>A</span> </label> <label class="pure-material-radio"> <input type="radio" name="group' + tempNumGrades + '" value="h"> <span>H/AP</span> </label> </div><br></div>');
    }
    $('.cont' + tempNumGrades).slideDown(speed);
    amtGrades = tempNumGrades;
}

function removeCourse() {
    if (amtGrades == 1) {
        return;
    }
    var divNum = '.cont' + amtGrades;
    $(divNum).slideUp(speed);
    setTimeout(function() {
        $(divNum).remove();
    }, speed);
    amtGrades--;
}

function calc() {
    var totU = 0,
        totW = 0,
        creditT = 0;
    for (var i = 1; i <= amtGrades; i++) {
        var credits = parseFloat($('#credit' + i).val());
        var calcU = gradeCalcU($('#grade' + i).val());
        switch ($("input[name='group" + i + "']:checked").val()) {
            case 'uw':
                totW += calcU * credits;
                break;
            case 'cp':
                totW += gradeCalcCP($('#grade' + i).val()) * credits;
                break;
            case 'a':
                totW += gradeCalcA($('#grade' + i).val()) * credits;
                break;
            case 'h':
                totW += gradeCalcH($('#grade' + i).val()) * credits;
                break;
        }
        totU += calcU * credits;
        creditT += credits;
    }
    $('#ugpaPlacement').html('Your unweighted GPA is ' + roundNumber(totU / creditT, 4));
    if (roundNumber(totU / creditT, 4) < 3.0) {
        console.log("dumbass");
    }
    $('#wgpaPlacement').html('Your weighted GPA is ' + roundNumber(totW / creditT, 4) + '<br><br><br><i>*Disclaimer: the weighted GPA may have a deviation of &plusmn0.10</i>');
    $('#gpa').slideDown(600);
}

function reset() {
    location.reload(true);
}

function roundNumber(num, scale) {
    if (!('' + num).includes('e')) {
        return +(Math.round(num + 'e+' + scale) + 'e-' + scale);
    } else {
        var arr = ('' + num).split('e');
        var sig = ''
        if (+arr[1] + scale > 0) {
            sig = '+';
        }
        return +(Math.round(+arr[0] + 'e' + sig + (+arr[1] + scale)) + 'e' + scale);
    }
}
