let counterapp = document.getElementById("counter-app")
let saveEl = document.getElementById("save-el")

let count = 0;
function increment(){
  count += 1
  counterapp.textContent = count;
  // textContent --> it returns all elements , including <script>, <style>
}

function decrement(){
  if(count>0){
  count -= 1
  counterapp.textContent = count;
  }
}

function reset(){
  count = 0
  counterapp.textContent = count;
}

function save(){
  let countStr = count + " - "
   saveEl.textContent += countStr
}
