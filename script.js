

//create an infinite horizontal scroll animation
const scrollers = document.querySelectorAll('.scroller');

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
  addAnimation();
}

function addAnimation(){
  scrollers.forEach((scroller) => {
   scroller.setAttribute("data-animated", true);

   const scrollerInner = scroller.querySelector(".scroller-inner");
   const scrollerContent = Array.from(scrollerInner.children);
   /* please search Array.from */
   scrollerContent.forEach((item) => {
    const duplicatedItem = item.cloneNode(true);
    /*please check cloneNode */
    duplicatedItem.setAttribute('area-hidden', true);
    scrollerInner.appendChild(duplicatedItem);

   })
  });
}