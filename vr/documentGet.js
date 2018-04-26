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
        let result = [];

        let textEls = document.getElementsByClassName('text-vr');
        textEls = Array.from(textEls);
        textEls.forEach((textEl) => 
            result.push({
                type: "text",
                content: textEl.innerHTML,
            })
        );

        let imageEls = document.getElementsByClassName('image-vr');
        imageEls = Array.from(imageEls);
        imageEls.forEach((imageEl) => 
            result.push({
                type: "image",
                content: imageEl.getAttribute('src'),
            })
        );

        let videoEls = document.getElementsByClassName('video-vr');
        videoEls = Array.from(videoEls);
        videoEls.forEach((videoEl) => 
            result.push({
                type: "video",
                content: videoEl.getAttribute('src'),
            })
        );


        let body = document.getElementsByTagName('body')[0];

        while (body.firstChild.className !== "stophere") {
            console.log('first child: ', body.firstChild); 
            body.removeChild(body.firstChild);
            
        }

        // Array.from(body.children).forEach((child) =>{
        //     if (child !)
        // }
    

        if (this._rnctx) {
            this
                ._rnctx
                .invokeCallback(cb, [result]);
        }

    }
    setTitle(title) {
        document.title = title;
    }

    findElement(type) {
        return console.log(document.type);
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