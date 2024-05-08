const GraphDom = Object.freeze({
    fromNative(e){
        const t = {
            color: {
                red: 0,
                green: 0,
                blue: 0
            },
            e: e
        };
        let s = Object.defineProperty;
       return s(t, "text", {
            get: e=>t.e.innerText,
            set:e=>{t.e.innerText=e}
        }), s(t, "html", {
            get:e=>t.e.innerHTML,
            set:e=>{t.e.innerHTML=e}
        }), s(t, "style", {
            get:e=>t.e.style,
            set:e=>{t.e.style=e}
        }), s(t, "isShow", {
            get:e=>"none" != t.style.display,
            set:e=>{t.style.display=e?"":"none"}
        }), s(t, "x", {
            get:e=>parseInt(t.style.left.split("p")[0]),
            set:e=>{t.style.left=e+"px"}
        }), s(t, "y", {
            get:e=>parseInt(t.style.top.split("p")[0]),
            set:e=>{t.style.top=e+"px"}
        }), s(t, "rotate", {
            get:e=>parseInt(t.style.transform.split("(")[1].split("d")),
            set:e=>{t.style.transform="rotate("+e+"deg)"}
        }), s(t, "color", {
            get:e=>0,
            set:e=>{t.style.color=e}
        }),
        t.style.position="fixed",
        t.style.transform="rotate(0deg)",
        t.style.left=0,t.style.top=0,t},
    new:e=>GraphDom.fromNative(document.createElement(e)),
    fromDoc:e=>GraphDom.fromNative(document.querySelector(e))
});