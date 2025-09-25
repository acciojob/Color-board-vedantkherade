 let container = document.getElementById("container");
      const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];

      //create 800 square
      for (let i = 1; i <= 800; i++) {
        const square = document.createElement("div");
        square.classList.add("square");

        //on hover
        square.addEventListener("mouseover", () => setColor(square));
        square.addEventListener("mouseout", () => delayRemoveColor(square));

        container.appendChild(square);
      }

      function setColor(ele) {
        const color = getRandomColor();
        ele.style.backgroundColor = color;
      }

      function delayRemoveColor(ele) {
        setTimeout(()=>{
          ele.style.backgroundColor='#1d1d1d';  // fade back after 1s
        },1000)
      }

      function getRandomColor() {
        return colors[Math.floor(Math.random() * colors.length)];
      }