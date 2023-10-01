

   let p = document.getElementsByTagName('p');
   let choice = document.getElementsByClassName('choice');
   let dragItem = null;

   for(let i of p){
    i.ondragstart = dragStart;
    i.ondragend = dragEnd;
    i.ondblclick = editable;
   }

   function dragStart() {
    dragItem = this;
    setTimeout(()=>this.style.display= "none", 0);
   }

   function dragEnd() {
    dragItem = null;
    setTimeout(()=>this.style.display= "block", 0);
   }

   function editable(){
    this.classList.toggle('edit');
    this.setAttribute('contendetitable',true);
    if (!this.classList.contains('edit')) {
        this.remoteAttribute('contendetitable');
    }
   }


   for(let x of choice){
    x.ondragover = dragOver;
    x.ondragenter = dragEnter;
    x.ondragleave = dragLeave;
    x.ondrop = Drop;
   }

   function dragOver(e){
    e.preventDefault();
    this.style.border = "2px solid cyan";
   }

   function dragEnter(e){
    e.preventDefault();
   }

   function dragLeave(e){
    this.style.border = "none";
   }

   function Drop(){
    this.append(dragItem);
   }