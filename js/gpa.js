function gradeCalcU(grade) {
    return (grade >= 95 ? 4.0 :
        (grade >= 90 ? 3.75 :
        (grade >= 87 ? 3.5 :
        (grade >= 83 ? 3.25 :
        (grade >= 80 ? 3 :
        (grade >= 77 ? 2.75 :
        (grade >= 73 ? 2.5 :
        (grade >= 70 ? 2.25 :
        (grade >= 67 ? 1.75 :
        (grade >= 63 ? 1.5 :
        (grade >= 60 ? 1.25 :
        0.0)))))))))));
}

function gradeCalcCP(grade) {
    return (grade >= 95 ? 4.5 :
        (grade >= 90 ? 4.22 :
        (grade >= 87 ? 3.94 :
        (grade >= 83 ? 3.66 :
        (grade >= 80 ? 3.38 :
        (grade >= 77 ? 3.09 :
        (grade >= 73 ? 2.81 :
        (grade >= 70 ? 2.53 :
        (grade >= 67 ? 1.97 :
        (grade >= 63 ? 1.69 :
        (grade >= 60 ? 1.41 :
        0.0)))))))))));
}

function gradeCalcA(grade) {
    return (grade >= 95 ? 4.9 :
        (grade >= 90 ? 4.59 :
        (grade >= 87 ? 4.29 :
        (grade >= 83 ? 3.98 :
        (grade >= 80 ? 3.68 :
        (grade >= 77 ? 3.37 :
        (grade >= 73 ? 3.06 :
        (grade >= 70 ? 2.76 :
        (grade >= 67 ? 2.14 :
        (grade >= 63 ? 1.84 :
        (grade >= 60 ? 1.53 :
        0.0)))))))))));
}

function gradeCalcH(grade) {
    return (grade >= 95 ? 5.3 :
        (grade >= 90 ? 4.97 :
        (grade >= 87 ? 4.64 :
        (grade >= 83 ? 4.31 :
        (grade >= 80 ? 3.98 :
        (grade >= 77 ? 3.64 :
        (grade >= 73 ? 3.31 :
        (grade >= 70 ? 2.98 :
        (grade >= 67 ? 2.32 :
        (grade >= 63 ? 1.99 :
        (grade >= 60 ? 1.66 :
        0.0)))))))))));
}
