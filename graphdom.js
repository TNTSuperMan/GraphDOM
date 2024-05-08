const GraphDom = Object.freeze({
    fromNative(element){
        const dom = {
            color: {
                red: 0,
                green: 0,
                blue: 0
            },
            e:element
        }
        let prop = Object.defineProperty;
        prop(dom,"text",{
            get:t=>dom.e.innerText,
            set:text=>{
                dom.e.innerText = text
            }
        })
        prop(dom,"html",{
            get:t=>dom.e.innerHTML,
            set:html=>{
                dom.e.innerHTML = html
            }
        })
        prop(dom,"style",{
            get:t=>dom.e.style,
            set:style=>{
                dom.e.style = style
            }
        })
        prop(dom,"isShow",{
            get:t=>dom.style.display == "none" ? false : true,
            set:is=>{
                if(!is){
                    dom.style.display = "none";
                }else{
                    dom.style.display = "";
                }
            }
        })
        prop(dom,"x",{
            get:t=>parseInt(dom.style.left.split("p")[0]),
            set:x=>{
                dom.style.left = x + "px";
            }
        })
        prop(dom,"y",{
            get:t=>parseInt(dom.style.top.split("p")[0]),
            set:y=>{
                dom.style.top = y + "px";
            }
        })
        prop(dom,"rotate",{
            get:t=> parseInt(dom.style.transform.split("(")[1].split("d")),
            set:deg=>{
                dom.style.transform = "rotate(" + deg + "deg)";
            }
        })
        prop(dom,"color",{
            get:t=>0,
            set:color=>{
                dom.style.color = color
            }
        })
        dom.style.position = "fixed";
        dom.style.transform = "rotate(0deg)";
        dom.style.left = 0;
        dom.style.top = 0;
        return dom;
    },
    new: tag => GraphDom.fromNative(
        document.createElement(tag)),
    fromDoc: selector => GraphDom.fromNative(
        document.querySelector(selector))
})