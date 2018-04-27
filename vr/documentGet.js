import {Module} from 'react-vr-web';

export default class DocumentGet extends Module {
    constructor() {
        super('DocumentGet');
        this.userAgent = navigator.userAgent;
        // this.domListener(); 
        this._bridgename = 'BrowserBridge'; 


        this.domListener = this.domListener.bind(this); 
        this.passObjectElementInfo = this.passObjectElementInfo.bind(this); 
    }

    _setRNContext(rnctx) {
        this._rnctx = rnctx;
    }

    getDocument(cb) {
    
        // console.log('this is cb', cb); 
        let result = this.getBaseContent();
        const body = document.getElementsByTagName('body')[0];

        // while (body.firstChild.className !== "stophere") {
        //     body.removeChild(body.firstChild);
            
        // }


        console.log('in getDoc thisRnctx:', this._rnctx); 
        if (this._rnctx) {
            this
                ._rnctx
                .invokeCallback(cb, [result]);
        }
        
    this.domListener((event) => this._emit('click', event));
    }

    triggerEvent(classname, i){
        let el = document.getElementsByClassName(classname)[i]; 
        console.log('triggered'); 
        el.click(); 
        let body = document.body;
        console.log('document.body works: ', body); 
        let div = document.createElement('div'); 
        div.classList.add('text-vr'); 
        div.innerHTML = 'please work'; 
        body.appendChild(div);
             
        console.log('triggered'); 
    }

    passObjectElementInfo(cb) {
        const rnc = this._rnctx; 
        return function(arr) {
            console.log('in getDoc thisRnctx:', rnc); 
            if (rnc) { 
                rnc.invokeCallback(cb, [arr]);
            }
        };
    }
       
    _emit(name, event) {
        if (!this._rnctx) {
            return;
        }
        this._rnctx.callFunction('BrowserBridge', 'notifyEvent', [name, 1]);
    }
    
    domListener(cb){
        // Select the node that will be observed for mutations
        // console.warn('top domL cb; ', cb); 
        var targetNode = document.getElementsByTagName('body')[0];
        // console.log('getting set up'); 
        // Options for the observer (which mutations to observe)
        var config = { attribute: true, childList: true, subtree: true };
        // console.log('in domListener thisRnctx:', this._rnctx); 
        // console.log('this is THIS: ',this); 
        let rnc = this._rnctx; 
        // let indexcb = this.passObjectElementInfo(cb);



        // console.warn('index cb: ',indexcb);  
        console.log('logging cb ', cb);
        
        

        // Callback function to execute when mutations are observed
        // var callback = (mutationsList) =>  {
        //     console.warn('this is mutations list on test: ', mutationsList); 
        //     // console.warn('CALLBACK this is this: ', this); 
        //     // console.log('RNC:', rnc); 
        //     for(var mutation of mutationsList){
        //         // console.log('this is mutation: ', mutation); 
        //         // console.log('this is this._rnctx', this._rnctx); 
        //         if (rnc) {
        //             // console.log('inside this._rnctx'); 
        //             // console.warn('indexcb',indexcb); 
        //             rnc.invokeCallback(indexcb, [mutation]);
        //         }
        //     }
           
            // for(var mutation of mutationsList) {
            //     console.log('this is mutation in for: ', mutation); 
            //     if (mutation.type === 'childList') {
            //         console.log('A child node has been added or removed.');
            //     }
            //     else if (mutation.type == 'attributes') {
            //         console.log('The ' + mutation.attributeName + ' attribute was modified.');
            //     }
            // }
        // };
        // Create an observer instance linked to the callback function
        var observer = new MutationObserver(cb);

        // Start observing the target node for configured mutations
        observer.observe(targetNode, config);

        // Later, you can stop observing
        // observer.disconnect();
    }

    getNewContent(mutationList){
        console.log(mutationList); 
    }

    getBaseContent() { 

        let result = [];
        let types = ['text-vr', 'image-vr', 'video-vr']; 
            types.forEach(type => {
                let content = Array.from(document.getElementsByClassName(type)); 
                content.forEach((el, i) => {
                    console.log('this is el in gBC: ', el);
                   
                    let specify = type === "text-vr" ? el.innerHTML : el.getAttribute('src');
                    result.push({
                        type: type,
                        content: specify,
                        index: i
                    });
                });
            });
            // this.triggerEvent('text-vr'); 
            console.log('result in gbc: ', result); 
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