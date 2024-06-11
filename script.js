(()=>{
const $ = GraphDom;
const p = $("p");
p.text = "ま～るをえ～がくあやしい文字～♪";
p.color = "#0000FF";
p.width = "auto";
let count = 0;
const handler = e => {
    count++;
    p.x = (1 + Math.sin(count / 200)) / 3 * innerWidth;
    p.y = (1 + Math.cos(count / 200)) / 3 * innerHeight;
    p.rotate++
    setTimeout(handler,10)
}
handler()})()