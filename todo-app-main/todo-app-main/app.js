"use strict";
const text = document.querySelector(".text");
const span = document.getElementById("span");
const secondDiv = document.querySelector(".secondDiv");
const todoContainer = document.querySelector(".todoContainer");
const myDiv = document.querySelector(".myDiv");
const secondContainer = document.querySelector(".secondContainer");
const thirdContainer = document.querySelector(".thirdContainer");
const clearCompleted = document.querySelector(".completed");
const active = document.querySelector(".active");
text.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) {
        const checkBox = document.createElement("input");
        const div = document.createElement("div");
        const divCount = todoContainer.querySelectorAll("div").length;
        console.log(`Number of div elements inside todoContainer: ${divCount}`);
        const par = document.createElement("p");
        par.className = "par";
        secondDiv.style.display = "block";
        const img = document.createElement("img");
        div.className = "myDiv";
        // img.src = "cross.svg";
        img.src = `${"cross"}.svg`;
        // creating the clear cpmpleted text
        // creating the div to host values
        const h1 = document.createElement("h4");
        h1.textContent = text.value;
        checkBox.type = "checkbox";
        checkBox.className = "inputCheck";
        h1.className = "hOne";
        div.append(h1, checkBox);
        todoContainer.append(div);
        checkBox.addEventListener("click", () => {
            h1.classList.toggle("toggle");
            h1.classList.toggle("color");
            clearCompleted.addEventListener("click", () => {
                if (h1.classList.contains("toggle") && h1.classList.contains("color")) {
                    todoContainer.style.display = "none";
                }
            });
        });
        if (text.value.trim() === "") {
            alert("What is on your mind");
            window.location.reload();
        }
        span.textContent = `${divCount}`;
        // active.addEventListener("click", () => {
        //   if (h1.classList.contains("toggle") && h1.classList.contains("color")) {
        //     myDiv.style.display = "none";
        //   }
        // });
    }
});
// //const todoContainer = document.querySelector(".todoContainer")! as HTMLElement;
// // Keep track of the currently dragged element
// let draggedElement: HTMLElement | null = null;
// // Add event listeners for drag and drop
// todoContainer.addEventListener("dragstart", (event: DragEvent) => {
//   draggedElement = event.target as HTMLElement;
// });
// todoContainer.addEventListener("dragover", (event: DragEvent) => {
//   event.preventDefault();
// });
// todoContainer.addEventListener("drop", (event: DragEvent) => {
//   if (draggedElement) {
//     const targetElement = event.target as HTMLElement;
//     if (targetElement && targetElement !== draggedElement) {
//       // Swap the positions of the dragged element and the drop target
//       const draggedIndex = Array.from(todoContainer.children).indexOf(draggedElement);
//       const targetIndex = Array.from(todoContainer.children).indexOf(targetElement);
//       if (draggedIndex >= 0 && targetIndex >= 0) {
//         if (draggedIndex < targetIndex) {
//           todoContainer.insertBefore(draggedElement, targetElement.nextSibling);
//         } else {
//           todoContainer.insertBefore(draggedElement, targetElement);
//         }
//       }
//     }
//     draggedElement = null;
//   }
// });
// // Add draggable attribute to each div element
// const divElements = todoContainer.querySelectorAll(".myDiv");
// divElements.forEach((div: HTMLElement) => {
//   div.setAttribute("draggable", "true");
// });
// const clearCompleted = document.createElement("p");
// clearCompleted.innerText = "Clear Completed";
// clearCompleted.className = "completed";
