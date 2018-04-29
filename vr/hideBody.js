const hideBody = () =>  {
    let body = document.getElementsByTagName('body')[0]; 
    body.setAttribute('style', 'visibility: hidden'); 
    document.addEventListener('DOMContentLoaded', () => hideChildren()); 
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

const hideHtml = () => {
    let body = document.body;
    let children = Array.from(body.children); 
    children.forEach((child) => {
        if (child.id !== "phantom"){
        child.setAttribute('style','display: none;'); 
        }
    });
};

export default hideHtml;