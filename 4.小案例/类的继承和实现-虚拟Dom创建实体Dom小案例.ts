interface Options {
  el: string | HTMLElement;
}
interface VueCls {
  option: Options;
  init(): void;
}
//虚拟Dom
interface Vnode {
  //节点名：div span p ...
  tag: string;
  //填充文本
  text?: string;
  //子节点
  childrenNode?: Vnode[];
}
//Dom操作类
class Dom {
  createElement(ele: string) {
    return document.createElement(ele);
  }
  setText(ele: HTMLElement, text: string | undefined) {
    if (typeof text === "string") {
      ele.textContent = text;
    }
  }
  //通过虚拟Dom渲染真实Dom
  render(node: Vnode) {
    let rootNode = this.createElement(node.tag);
    //如果还存在子节点，遍历并创建子节点,没有子节点，填充文字
    if (node.childrenNode && Array.isArray(node.childrenNode)) {
      node.childrenNode.forEach((item) => {
        let childNode = this.render(item);
        rootNode.appendChild(childNode);
      });
    } else {
      this.setText(rootNode, node.text);
    }
    return rootNode;
  }
}
//Vue继承Dom并实现VueCls接口
class Vue extends Dom implements VueCls {
  constructor(public option: Options) {
    super();
    this.init();
  }
  init() {
    //虚拟Dom数据
    let VNodeData: Vnode = {
      tag: "div",
      childrenNode: [
        { tag: "p", text: "child node 01" },
        {
          tag: "p",
          text: "child node 02",
          childrenNode: [
            {
              tag: "span",
              text: "child node 02-01",
            },
          ],
        },
        { tag: "p", text: "child node 03" }
      ],
    };
    //获取根节点
    let app =
      typeof this.option.el === "string"
        ? document.querySelector(this.option.el)
        : this.option.el;
    //将生成的DOM添加到根节点上
    app?.appendChild(this.render(VNodeData))
  }
}

const vue = new Vue({
  el: "#app",
});
export {};
