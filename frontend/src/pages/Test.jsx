import '../styles/Test.css';
import { gsap } from 'gsap';
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

console.clear();

gsap.set(".split", { opacity: 1 });

document.fonts.ready.then(() => {
  let containers = gsap.utils.toArray(".container");

  containers.forEach((container) => {
    let text = container.querySelector(".split");
    let animation;

    SplitText.create(text, {
      type: "words,lines",
      mask: "lines",
      linesClass: "line",
      autoSplit: true,
      onSplit: (instance) => {
        console.log("split")
        return gsap.from(instance.lines, {
          yPercent: 120,
          stagger: 0.1,
          scrollTrigger: {
            trigger: container,
            //markers: true,
            scrub: true,
            start: "clamp(top center)",
            end: "clamp(bottom center)"
          }
        });
      }
    });
  });
});


export default function Test() {

    return (
        <>
        <div class="spacer"></div>
        
        <div class="container">
            <h2 class="split">The text in this paragraph is split by words and lines. Lines can be tricky to manage responsively and other Text splitting libraries will break when the text reflows due to a resize.</h2>
        </div>
        
        <div class="container">
            <h2 class="split">The text in this paragraph is split by words and lines. Lines can be tricky to manage responsively and other Text splitting libraries will break when the text reflows due to a resize.</h2>
        </div>
        
        <div class="container">
            <h2 class="split">The text in this paragraph is split by words and lines. Lines can be tricky to manage responsively and other Text splitting libraries will break when the text reflows due to a resize.</h2>
        </div>
        
        <div class="container">
            <h2 class="split">The text in this paragraph is split by words and lines. Lines can be tricky to manage responsively and other Text splitting libraries will break when the text reflows due to a resize.</h2>
        </div>

        <div class="container">
            <h2 class="split">The text in this paragraph is split by words and lines. Lines can be tricky to manage responsively and other Text splitting libraries will break when the text reflows due to a resize.</h2>
        </div>

        <div class="spacer"></div>
        </>
    );
}