import {Module} from 'react-vr-web'; 

export default class DocumentGet extends Module {
    constructor() {
        super('DocumentGet');

        this.userAgent = navigator.userAgent;

    }

    _setRNContext(rnctx) {
        this._rnctx = rnctx; 
    }

    getDocument(cb){
        let result; 
     
 

        result = document.getElementsByClassName('Money');
        result = result[0].innerHTML;
        let body = document.getElementsByTagName('body')[0];
        
        console.log('this is body: ',body);
        console.log('bodys first child: ',body.firstChild);

        while (body.firstChild.className !== "stophere"){
            console.log('first child: ', body.firstChild);
            body.removeChild(body.firstChild);
        }
     
        if (this._rnctx) {
            this._rnctx.invokeCallback(cb, [result]);
        }
        
    }
    setTitle(title){
        document.title = title;
    }

    findElement(type){
        return console.log(document.type);
    }

    $getConfirmation(message, resolve, reject) {
        const result = window.confirm(message);
        if (this._rnctx) {
          if (result) {
            this._rnctx.invokeCallback(resolve, []);
          } else {
            // When rejecting a Promise, a message should be provided to populate
            // the Error object on the React side
            this._rnctx.invokeCallback(reject, [{message: 'Canceled the dialog'}]);
          }
        }
      }

}