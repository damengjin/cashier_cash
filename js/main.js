function CheckEmpty(){
  if (document.getElementById('idInput').value == ""){ return true;}
  return false;
}

function SaveID(){
  if (CheckEmpty()){
    alert("Please fill in your ID");
    return;
  }
  localStorage.setItem('id', document.getElementById('idInput').value);
  localStorage.setItem('session', 'CASH');
  window.location.href='Adding_numbers5.html';
  return;
}
