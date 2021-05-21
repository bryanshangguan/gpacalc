function saveGrade(index, grade, credit, group, length) {
  localStorage.setItem('grade' + index, grade);
  localStorage.setItem('credit' + index, credit);
  localStorage.setItem('group' + index, group);
  localStorage.setItem('length', length);
}

function removeGrade(currlength) {
  localStorage.removeItem('grade' + currlength);
  localStorage.removeItem('credit' + currlength);
  localStorage.removeItem('group' + currlength);
  localStorage.setItem('length', currlength--);
}

function loadGrades() {
  if (localStorage.getItem('length') === null) {
    return 'Error';
  }
  $('#num').val(localStorage.getItem('length'));
  $('#displayCalcBtn').click();
  for (var i = 1; i <= localStorage.length; i++) {
    $('#grade' + i).val(localStorage.getItem('grade' + i));
    $('#credit' + i).val(localStorage.getItem('credit' + i));
    $('input[name=group' + i + '][value=' + localStorage.getItem('group' + i) + ']').attr('checked', 'checked');
  }
}

function clearGrades() {
  localStorage.clear();
}
