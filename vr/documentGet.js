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

        while (body.firstChild.className !== "stophere") {
            body.removeChild(body.firstChild);
            
        }
        if (this._rnctx) {
            this
                ._rnctx
                .invokeCallback(cb, [result]);
        }
        return result;
    }

    getBaseContent() { 
        let result = [];
        let types = ['text-vr', 'image-vr', 'video-vr']; 
            types.forEach(type => {
                let content = Array.from(document.getElementsByClassName(type)); 
                content.forEach((el) => {
                    let specify = type === "text-vr" ? el.innerHTML : el.getAttribute('src');
                    result.push({
                        type: type,
                        content: specify
                    });
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