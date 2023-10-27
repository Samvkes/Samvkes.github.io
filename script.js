document.addEventListener("DOMContentLoaded", function () {
    let dragElem = document.getElementById("draggable");
    let slotElem = document.getElementById("slot");
    let styled_button = document.getElementById("styled-button");
    let offsetX, offsetY, lastBox = false;
    let items = document.querySelectorAll('.container .box');

    items.forEach(function (item) {
        item.addEventListener('dragstart', handleDragStart);
        item.addEventListener('dragend', handleDragEnd);
        item.addEventListener('dragenter', handleDragEnter);
        item.addEventListener('dragleave', handleDragLeave);
        item.addEventListener('dragover', handleDragOver);
        item.addEventListener('drop', handleDrop);
        item.addEventListener('drag', handleDrag);
    });

    // window.addEventListener('', function (e) {
    //     let items = document.querySelectorAll('.container .box');
    //     items.forEach(function (item) {
    //         item.setAttribute("draggable", "true");
    //     });

    // });

    // window.addEventListener('touchend', function (e) {
    //     let items = document.querySelectorAll('.container .box');
    //     items.forEach(function (item) {
    //         item.setAttribute("draggable", "false");
    //     });

    // });




    // window.addEventListener('mouseup', function (e) {
    //     isDragging = false;
    //     if (lastBox) {
    //         dragElem.style.cursor = 'grab';
    //         if (Math.abs(e.clientX - (parseInt(window.getComputedStyle(slotElem).getPropertyValue("left")) + 50)) < 50 &&
    //             Math.abs(e.clientY - (parseInt(window.getComputedStyle(slotElem).getPropertyValue("top")) + 50)) < 50)
    //         {
    //             dragElem.style.top = window.getComputedStyle(slotElem).getPropertyValue("top")
    //             dragElem.style.left = window.getComputedStyle(slotElem).getPropertyValue("left")
    //             slotElem.style.top = parseInt(window.getComputedStyle(slotElem).getPropertyValue("top")) + 50 + "px"
    //         }
    //         lastBox = false;
    //     }
        // if (Math.abs(e.clientY - parseInt(window.getComputedStyle(slotElem).getPropertyValue("top"))) < 100)
        // {
        //     dragElem.style.top = window.getComputedStyle(slotElem).getPropertyValue("top")
        // }
        // this.window.alert(parseInt(window.getComputedStyle(slotElem).getPropertyValue("top")) + " - " + slotElem.style.top);

    // });
});

function alertMessage(){

    let newDrag = document.createElement("div");
    newDrag.className = "box";
    newDrag.draggable = "true"; 
    newDrag.addEventListener('dragstart', handleDragStart);
    newDrag.addEventListener('dragend', handleDragEnd);
    newDrag.addEventListener('dragenter', handleDragEnter);
    newDrag.addEventListener('dragleave', handleDragLeave);
    newDrag.addEventListener('dragover', handleDragOver);
    newDrag.addEventListener('drop', handleDrop);
    let container = document.getElementById("container");
    container.appendChild(newDrag);
        // document.body.insertAdjacentElement(container, newDrag);
        // document.body.insertBefore(newDrag, oldDrag);
    // let newDrag = document.createElement("div");
    // newDrag.className = "draggable";
    // let slotElem = document.getElementById("slot");
    // let oldDrag = document.getElementById("draggable");
    // document.body.insertBefore(newDrag, oldDrag);
    // let offsetX, offsetY, isDragging, lastBox, slotted = false;
    // newDrag.addEventListener('mousedown', function (e) {
    //     isDragging = true;
    //     lastBox = true;
    //     offsetX = e.clientX - newDrag.getBoundingClientRect().left;
    //     offsetY = e.clientY - newDrag.getBoundingClientRect().top;
    //     newDrag.style.cursor = 'grabbing';
    // });

    // window.addEventListener('mousemove', function (e) {
    //     if (isDragging) {
    //         newDrag.style.left = e.clientX - offsetX + 'px';
    //         newDrag.style.top = e.clientY - offsetY + 'px';
    //     }
    // });

    // window.addEventListener('mouseup', function (e) {
    //     isDragging = false;
    //     if (lastBox) {
    //         newDrag.style.cursor = 'grab';
    //         if (Math.abs(e.clientX - (parseInt(window.getComputedStyle(slotElem).getPropertyValue("left")) + 50)) < 50 &&
    //             Math.abs(e.clientY - (parseInt(window.getComputedStyle(slotElem).getPropertyValue("top")) + 50)) < 50)
    //         {
    //             newDrag.style.top = window.getComputedStyle(slotElem).getPropertyValue("top")
    //             newDrag.style.left = window.getComputedStyle(slotElem).getPropertyValue("left")
    //             slotElem.style.top = parseInt(window.getComputedStyle(slotElem).getPropertyValue("top")) + 50 + "px"
    //             slotted = true;
    //         }
    //         else if (slotted)
    //         {
    //             slotElem.style.top = parseInt(window.getComputedStyle(slotElem).getPropertyValue("top")) - 50 + "px"
    //             slotted = false;
    //         }
    //         lastBox = false;
    //     }
    // });
}

function handleDragStart(e) {
    this.style.opacity = '0.01'; 
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.firstChild.value);
    console.log(this.firstChild.value);
    // var img = new Image();
    // img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';
    // e.dataTransfer.setDragImage(img, 0, 0);
} 

function handleDragEnd(e) {
    let items = document.querySelectorAll('.container .box');
    
    this.style.opacity = '1';
    items.forEach( function (item) {
        item.classList.remove('over');
        // item.setAttribute("draggable", "false");
    });
} 

function handleDragEnter(e) {
    this.classList.add('over');
}

function handleDragLeave(e) {
    this.classList.remove('over');
}

function handleDragOver(e) {
    e.preventDefault();
    return false;
}

function handleDrop(e) {
    e.stopPropagation();
    if (dragSrcEl !== this) {
        dragSrcEl.firstChild.value = this.firstChild.value;
        this.firstChild.value = e.dataTransfer.getData('text/html');
    }
    return false;
}

function handleDrag(e) {
    return false;
}

