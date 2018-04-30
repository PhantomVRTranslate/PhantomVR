import { Module } from "react-vr-web";
import { merge, isEmpty } from "lodash";

export default class DocumentGet extends Module {
  constructor() {
    super("DocumentGet");
    this.userAgent = navigator.userAgent;
    this._bridgename = "BrowserBridge";
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

  triggerEvent(classname, key) {
<<<<<<< HEAD
    let el = document.getElementsByClassName(classname)[0];
=======
    let el = document.getElementsByClassName(classname)[0];   
>>>>>>> 64698df167a8f89ebe3047fb3a6d1567ea4f8bec
    el.click();
  }

  _emit(addContent, removeContent) {
    if (!this._rnctx) return;
    if (isEmpty(addContent) && removeContent.length === 0) return;
    this._rnctx.callFunction("BrowserBridge", "notifyEvent", [
      addContent,
      removeContent
    ]);
  }

  domListener(cb) {
    let targetNode = document.body;
    const config = { childList: true, subtree: true };
    let rnc = this._rnctx;
    const observer = new MutationObserver(cb);
    observer.observe(targetNode, config);
  }
  modifyContent(mutationList) {
    let typeArray = ["gallery-item", "carousel-image-vr", "navlink-vr", "text-vr", "image-vr", "video-vr"];
    let addContent = {};
    let removeContent = [];
    Array.from(mutationList).forEach(mutation => {
      Array.from(mutation.addedNodes).forEach(node => {
        let resultObj = this.makeResult(node);
        if (resultObj) addContent = merge({}, addContent, resultObj);
      });
      Array.from(mutation.removedNodes).forEach(node => {
        let classList = node.className.split(" ");
        if (typeArray.indexOf(classList[classList.length - 2]) !== -1)
          removeContent.push(node.classList[classList.length - 1]);
      });
    });
    this._emit(addContent, removeContent);
  }



  makeResult(node) {
    let key = Math.floor(Math.random() * 1000000000000);
    let nodeObj = { [key]: { type: node.className, events: [], key: key } };

    switch (node.className) {
      case "text-vr":
        nodeObj[key]["content"] = node.innerHTML;
        node.classList.add(key);
        return nodeObj;
      case "image-vr":
        nodeObj[key]["content"] = node.getAttribute("src");
        node.classList.add(key);
        nodeObj[key]["flex"] = parseInt(node.getAttribute("image-flex")) || 1;
        return nodeObj;
      case "video-vr":
        nodeObj[key]["content"] = node.getAttribute("src");
        node.classList.add(key);
        return nodeObj;
      case "navlink-vr":
        nodeObj[key]["content"] = node.getAttribute("href");
        nodeObj[key]["navTitle"] = node.innerHTML;
        node.classList.add(key);
        return nodeObj;
      case "carousel-image-vr":
        nodeObj[key]["content"] = node.getAttribute("src");
        nodeObj[key]["flex"] = parseInt(node.getAttribute("ci-flex-vr")) || 2;
        node.classList.add(key);
        return nodeObj;
      case "gallery-item":
        nodeObj[key]["content"] = node.getAttribute("src");
        node.classList.add(key); 
        return nodeObj;
      default:
        false;
    }
  }

  getBaseContent() {
    let result = {}; 
    let title = document.getElementsByClassName('title-vr')[0];
    title = {title: title.innerHTML};
    result = merge({}, result, title);

    let types = ["gallery-item", "carousel-image-vr", "navlink-vr", "text-vr", "image-vr", "video-vr"];
    types.forEach(type => {
      let content = Array.from(document.getElementsByClassName(type));
      content.forEach(el => {
        result = merge({}, result, this.makeResult(el));
      });
    });
    return result;
  }
}