const Bar=document.querySelector('#bar');
const menuBar=document.querySelector('.menuBar');
const closeBar=document.querySelector('#crossbar');


Bar.addEventListener('click',()=>{
    menuBar.classList.remove('cross');
    Bar.style.display="none";
    menuBar.style.display="flex";
    menuBar.style.flexDirection="column";
    menuBar.style.transition="opacity 2s";
   
});

closeBar.addEventListener('click',()=>{
    Bar.style.display="inline";
    menuBar.classList.add('cross');
    setTimeout(()=>{
        menuBar.style.display="none";
    },1000);
    
});
window.addEventListener('resize',()=>{
    menuBar.style.display="none";
    Bar.style.display="none";
})


