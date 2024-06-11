(()=>{
    let fromNative=element=>{
        let dom = {
            e:element,
            append:t=>element.append(t.e),
            appendChild:t=>element.appendChild(t.e),
        }
        let p = (n,g,s) => Object.defineProperty(dom,n,{get:g,set:s})
        p("text",
            t=>element.innerText,
            text=>element.innerText = text
        )
        p("html",
            t=>element.innerHTML,
            html=>element.innerHTML = html
        )
        p("style",
            t=>element.style,
            style=>element.style = style
        )
        p("isShow",
            t=>dom.style.display != "none",
            is=>dom.style.display = is ? "block" : "none"        
        )
        p("x",
            t=>parseInt(dom.style.left.split("p")[0]),
            x=>dom.style.left = x + "px"
        )
        p("y",
            t=>parseInt(dom.style.top.split("p")[0]),
            y=>dom.style.top = y + "px"
        )
        p("rotate",
            t=> parseInt(dom.style.transform.split("(")[1].split("d")),
            deg=>dom.style.transform = "rotate(" + deg + "deg)"
        )
        p("color",
            t=>0,
            color=>dom.style.color = color
        )
        p("width",
            t=>parseInt(dom.style.width == "auto" ? "auto" : dom.style.width.split("p")[0]),
            w=>dom.style.width = w ? w + "px" : "auto"
        )
        p("height",
            t=>parseInt(dom.style.height == "auto" ? "auto" : dom.style.height.split("p")[0]),
            h=>dom.style.height = h ? h + "px" : "auto"
        )
        if(!element.attributes.gde){
            element.setAttribute("gde","");
            dom.style.position = "fixed";
            dom.style.display = "block"
            dom.style.transform = "rotate(0deg)";
            dom.style.left = "0px";
            dom.style.top = "0px";
            dom.style.width = "auto";
            dom.style.height = "auto";
        }
        return dom;
    }
    let GraphDom = selector => 
        typeof selector == "string" ? fromNative(document.querySelector(selector)):
        selector instanceof HTMLElement ? fromNative(selector):
        undefined
    GraphDom.new = tag => GraphDom(document.createElement(tag))
    window.GraphDom = GraphDom;
})()