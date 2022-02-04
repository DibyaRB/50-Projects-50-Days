const fill = document.querySelector('.fill');

const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

empties.forEach(empty=>{
    empty.addEventListener('dragover',dragOver);
    empty.addEventListener('dragenter',dragEnter);
    empty.addEventListener('dragleave',dragLeave);
    empty.addEventListener('drop',dragDrop);
})

function dragStart(){
    console.log('drag start');
  
    this.className+=' hold';

    setTimeout(()=>{
        this.className= 'invisible';
    },0);
   

}

function dragEnd(){
    console.log('drag end');
    this.className = 'fill';
}


function dragOver(e){
    console.log('drag over');
    e.preventDefault();
}


function dragEnter(e){
    console.log('drag enter');
    e.preventDefault();
    this.classsName += ' hovered';
}


function dragLeave(){
    this.className='empty';
}


function dragDrop(){
    this.className = 'empty';
    this.append(fill);
}