import {Module} from 'react-vr-web';
import {merge} from 'lodash';

export default class DocumentGet extends Module {
    constructor() {
        super('DocumentGet');
        this.userAgent = navigator.userAgent;
        this._bridgename = 'BrowserBridge'; 


        this.domListener = this.domListener.bind(this); 
        this.passObjectElementInfo = this.passObjectElementInfo.bind(this); 
        this.getNewContent = this.getNewContent.bind(this); 
    }

    _setRNContext(rnctx) {
        this._rnctx = rnctx;
    }

    getDocument(cb) {
        let result = this.getBaseContent();
        const body = document.getElementsByTagName('body')[0];

        this._emit('initial countdown', result);
        if (this._rnctx) {
            this
                ._rnctx
                .invokeCallback(cb, [result]);
        }
        
    this.domListener(this.getNewContent);
    }

    triggerEvent(classname, key){
        let el = document.getElementsByClassName(key)[0]; 
        
        el.click(); 
        let body = document.body;
        
        let div = document.createElement('div'); 
        div.classList.add('text-vr'); 
        div.innerHTML = 'please work'; 
        body.appendChild(div);
             
        
    }

    passObjectElementInfo(cb) {
        const rnc = this._rnctx; 
        return function(arr) {
            
            if (rnc) { 
                rnc.invokeCallback(cb, [arr]);
            }
        };
    }
       
    _emit(name, event) {
        if (!this._rnctx) {
            return;
        }
        this._rnctx.callFunction('BrowserBridge', 'notifyEvent', [name, event]);
    }
    
    domListener(cb){

        var targetNode = document.getElementsByTagName('body')[0];
        var config = {childList: true, subtree: true };
        let rnc = this._rnctx; 

   
        var observer = new MutationObserver(cb);
        observer.observe(targetNode, config);

    }

    getNewContent(mutationList){
        
        let result = {}; 
        Array.from(mutationList).forEach(mutation => {
            Array.from(mutation.addedNodes).forEach(node => {
                    let resultObj = this.makeResult(node); 
                    if (resultObj) result = merge({}, result, resultObj); 
            });
        });

    this._emit('the final countdown', result);
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

    $getConfirmation(message, resolve, reject) {
        const result = window.confirm(message);
        if (this._rnctx) {
            if (result) {
                this
                    ._rnctx
                    .invokeCallback(resolve, []);
            } else {
                // When rejecting a Promise, a message should be provided to populate the Error
                // object on the React side
                this
                    ._rnctx
                    .invokeCallback(reject, [
                        {
                            message: 'Canceled the dialog'
                        }
                    ]);
            }
        }
    }

}