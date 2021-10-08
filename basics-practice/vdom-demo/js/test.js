const snabbdom = window.snabbdom;
const patch = snabbdom.init([
  snabbdom_class,
  snabbdom_props,
  snabbdom_style,
  snabbdom_eventlisteners,
]);
const h = snabbdom.h;
const container = document.getElementById("container");
let vnode = h("ul#list", {}, [h("li.item", {}, "item1"), h("li.item", {}, "item2")]);
console.log(vnode);
patch(container, vnode);

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  const newVnode = h("ul#list", {}, [
    h("li.item", {}, "item1"),
    h("li.item", {}, "item2"),
    h("li.item", {}, "item3"),
  ]);
  patch(vnode, newVnode); // vnode 中包含 elm dom，指向 DOM
  // 重点在于 function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue) {
  // while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
  vnode = newVnode;
});
