(function() {
    let classArr = document.querySelectorAll("input")
      for (let i = 0; i < classArr.length; i++) {
        classArr[i].style.backgroundColor = 'yellow'
      }
  })();

  (function() {
    let id = document.getElementById('_id');
    let value = document.querySelector("input[type='text']").value;
      id.innerHTML = value
      id.style.color = "red"
  })();

  (function() { // Додавання елементу в кінець
    let child = document.createElement("Li")
      
     let text = document.createTextNode("Firth Item")
       
       child.appendChild(text) //<li> Firth Item</li>
      let parent = document.getElementById("List")
        
        parent.appendChild(child)
  })();

  (function() { // Додавання елементу на любу позицію
    let child = document.createElement("Li")
      
     let text = document.createTextNode("Firth Item")
       
       child.appendChild(text) //<li> Firth Item</li>
      let parent = document.getElementById("List")
        
       let items = document.getElementsByTagName("li")
         
        parent.insertBefore(child, items[1])
  })();


(function () {
  let child = document.createElement("Li") // Видалення елементів
      
  let text = document.createTextNode("Firth Item")
    
  child.appendChild(text) //<li> Firth Item</li>

  let parent = document.getElementById("List")
        
  let items = document.getElementsByTagName("li")

  parent.removeChild(items[0]);
})();

(function () { // Замінна елементів
  let child = document.createElement("Li")
      
  let text = document.createTextNode("Firth Item")
    
  child.appendChild(text) //<li> Firth Item</li>

  let parent = document.getElementById("List")
        
  let items = document.getElementsByTagName("li")

  parent.replaceChild(child, items[0])
    })();