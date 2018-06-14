function toggleGameMenuOption(currentElement){
    let suspectElementsArr=document.getElementsByName('menuElement');
    for (let i=0;i<suspectElementsArr.length;i++){
        if(suspectElementsArr[i].classList.contains('show')&&suspectElementsArr!==currentElement){
            suspectElementsArr[i].classList.toggle('show');
        }
    }
}