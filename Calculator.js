function insert(num){
  document.form.textview.value = document.form.textview.value + num;
}

function equal(){
  var eql = document.form.textview.value;
    if (eql){
  document.form.textview.value = eval(eql);
  }
}

function C(){
  document.form.textview.value = "";
}

function back(){
  var eql = document.form.textview.value;
  document.form.textview.value = eql.substring(0, eql.length-1);
}
