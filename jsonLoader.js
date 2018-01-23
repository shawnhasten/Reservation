var newRequest = new XMLHttpRequest();
newRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
newRequest.onload = function(){
  console.log(newRequest[0].name);  
};
newRequest.send();