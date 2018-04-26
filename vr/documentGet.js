import {Module} from 'react-vr-web';

export default class DocumentGet extends Module {
    constructor() {
        super('DocumentGet');
        this.userAgent = navigator.userAgent;
    }

    _setRNContext(rnctx) {
        this._rnctx = rnctx;
    }

    getDocument(cb) {
        let result = this.getBaseContent();
        const body = document.getElementsByTagName('body')[0];

        // while (body.firstChild.className !== "stophere") {
        //     body.removeChild(body.firstChild);
            
        // }
        if (this._rnctx) {
            this
                ._rnctx
                .invokeCallback(cb, [result]);
        }
        return result;
    }

    triggerEvent(classname, i){
        let el = document.getElementsByClassName(classname)[i]; 
        console.log('triggered'); 
        el.click(); 
        let testtt = document.getElementsByClassName('jessica')[0] || 'no jessica';
        console.log(testtt); 
        console.log('triggered'); 
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