function val(){
  let xhr = new XMLHttpRequest();
  let nominal = document.getElementById('nominal').value;
  let year = document.getElementById('year').value;
  let newBody = {};
  newBody['nominal'] = nominal;
  newBody['year'] = year;
  let json = JSON.stringify(newBody);
  xhr.open("POST", '/all', true);
  xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  console.log(json);
  xhr.send(json);
}

