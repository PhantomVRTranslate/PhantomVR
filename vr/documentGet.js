import {Module} from 'react-vr-web';
import {merge} from 'lodash';

export default class DocumentGet extends Module {
    constructor() {
        super('DocumentGet');
        this.userAgent = navigator.userAgent;
        this._bridgename = 'BrowserBridge'; 
        this.domListener = this.domListener.bind(this); 
        this.modifyContent = this.modifyContent.bind(this); 
    }

    _setRNContext(rnctx) {
        this._rnctx = rnctx;
    }

    getDocument(cb) {
        let result = this.getBaseContent();
        this._emit(result, []);
        this.domListener(this.modifyContent);
    }

    triggerEvent(classname, key){
        let el = document.getElementsByClassName(key)[0]; 
        el.click(); 
        let body = document.body;
        let div = document.createElement('div'); 
        div.classList.add('text-vr'); 
        div.innerHTML = Math.floor(Math.random() * 1000000000000); 
        div.addEventListener('click', () => div.remove()); 
        body.appendChild(div);    
    }

    _emit(addContent, removeContent) {
        if (!this._rnctx) {
            return;
        }
        this._rnctx.callFunction('BrowserBridge', 'notifyEvent', [addContent, removeContent]);
    }
    
    domListener(cb){
        let targetNode = document.body;
        const config = {childList: true, subtree: true };
        let rnc = this._rnctx; 
        const observer = new MutationObserver(cb);
        observer.observe(targetNode, config);
    }

    modifyContent(mutationList){
        let addContent = {}; 
        let removeContent = []; 
        Array.from(mutationList).forEach(mutation => {
            console.warn('mutation: ', mutation); 
            Array.from(mutation.addedNodes).forEach(node => {
                    let resultObj = this.makeResult(node); 
                    if (resultObj) addContent = merge({}, addContent, resultObj); 
            });
            Array.from(mutation.removedNodes).forEach(node => {
                let classList = node.className.split(' ');
                removeContent.push(node.classList[classList.length - 1]); 
            });
        });
        this._emit(addContent, removeContent);
    }

    makeResult(node){
        
        let key = Math.floor(Math.random() * 1000000000000); 
        let nodeObj = {[key]: {type: node.className, events: [], key: key}};
 
        switch(node.className) {
            case 'text-vr': 
                nodeObj[key]['content'] = node.innerHTML;
                node.classList.add(key); 
                return nodeObj; 
            case 'image-vr':
                nodeObj[key]['content'] = node.getAttribute('src'); 
                node.classList.add(key); 
                return nodeObj; 
            case 'video-vr':
                nodeObj[key]['content'] = node.getAttribute('src'); 
                node.classList.add(key); 
                return nodeObj; 
            default: 
                false; 
            }
    }

    getBaseContent() { 
        let result = {};
        let types = ['text-vr', 'image-vr', 'video-vr']; 
            types.forEach(type => {
                let content = Array.from(document.getElementsByClassName(type)); 
                content.forEach((el) => {
                    result = merge({}, result, this.makeResult(el));
                });
            });
        return result; 
    }
}