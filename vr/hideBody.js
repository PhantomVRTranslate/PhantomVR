const hideBody = () =>  {
    let body = document.getElementsByTagName('body')[0]; 
    console.log(body); 
    body.setAttribute('style', 'visibility: hidden'); 
};


const hideChildren = () =>  {
    let body = document.getElementsByTagName('body')[0]; 
    let phantom = document.getElementById('phantom'); 
    let children = Array.from(body.children); 
    children.forEach((child) => {
        if (child.id !== "phantom"){
        child.setAttribute('style','display: none;'); 
        }
    });

    body.setAttribute('style', 'visibility: visible'); 
};


hideBody(); 
document.addEventListener('DOMContentLoaded', () => hideChildren()); 