function loco() {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

loco()

var clutter = "";

document.querySelector("#page2-inner h1").textContent.split(" ").forEach((dets) => {
    clutter+= `<span> ${dets} </span>`

    document.querySelector("#page2-inner h1").innerHTML = clutter;
})

gsap.to("#page2-inner h1 span", {
    scrollTrigger: {
        
        trigger:"#page2-inner h1 span",
        scroller:"#main",
        start:"top 80%",
        end:"bottom 30%",
        scrub:.5
    },
    color:"#fff",
    stagger:.2
})

function canvas1() {
    const canvas = document.querySelector("canvas");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;


    window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
    });

    function files(index) {
    var data = `
    ./magma/frames00007.png 
    ./magma/frames00010.png 
    ./magma/frames00013.png 
    ./magma/frames00016.png 
    ./magma/frames00019.png 
    ./magma/frames00022.png 
    ./magma/frames00025.png 
    ./magma/frames00028.png 
    ./magma/frames00031.png 
    ./magma/frames00034.png 
    ./magma/frames00037.png 
    ./magma/frames00040.png 
    ./magma/frames00043.png 
    ./magma/frames00046.png 
    ./magma/frames00049.png 
    ./magma/frames00052.png 
    ./magma/frames00055.png 
    ./magma/frames00058.png 
    ./magma/frames00061.png 
    ./magma/frames00064.png 
    ./magma/frames00067.png 
    ./magma/frames00070.png 
    ./magma/frames00073.png 
    ./magma/frames00076.png 
    ./magma/frames00079.png 
    ./magma/frames00082.png 
    ./magma/frames00085.png 
    ./magma/frames00088.png 
    ./magma/frames00091.png 
    ./magma/frames00094.png 
    ./magma/frames00097.png 
    ./magma/frames00100.png 
    ./magma/frames00103.png 
    ./magma/frames00106.png 
    ./magma/frames00109.png 
    ./magma/frames00112.png 
    ./magma/frames00115.png 
    ./magma/frames00118.png 
    ./magma/frames00121.png 
    ./magma/frames00124.png 
    ./magma/frames00127.png 
    ./magma/frames00130.png 
    ./magma/frames00133.png 
    ./magma/frames00136.png 
    ./magma/frames00139.png 
    ./magma/frames00142.png 
    ./magma/frames00145.png 
    ./magma/frames00148.png 
    ./magma/frames00151.png 
    ./magma/frames00154.png 
    ./magma/frames00157.png 
    ./magma/frames00160.png 
    ./magma/frames00163.png 
    ./magma/frames00166.png 
    ./magma/frames00169.png 
    ./magma/frames00175.png 
    ./magma/frames00172.png 
    ./magma/frames00178.png 
    ./magma/frames00181.png 
    ./magma/frames00184.png 
    ./magma/frames00187.png 
    ./magma/frames00190.png 
    ./magma/frames00193.png 
    ./magma/frames00196.png 
    ./magma/frames00199.png 
    ./magma/frames00202.png
    `;
    return data.split("\n")[index];
    }

    const frameCount = 67;

    const images = [];
    const imageSeq = {
    frame: 1,
    };

    for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
    }

    gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
        scrub: 1,
        trigger: `#page3>canvas`,
        //   set start end according to preference
        start: `top top`,
        end: `600% top`,
        scroller: `#main`,
    },
    onUpdate: render,
    });

    images[1].onload = render;

    function render() {
    scaleImage(images[imageSeq.frame], context);
    }

    function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
    );
    }
    ScrollTrigger.create({

    trigger: "#page3",
    pin: true,
    // markers:true,
    scroller: `#main`,
    //   set start end according to preference
    start: `top top`,
    end: `600% top`,
    });
}
canvas1()

var clutter = "";

document.querySelector("#page4-inner h1").textContent.split(" ").forEach((dets) => {
    clutter+= `<span> ${dets} </span>`

    document.querySelector("#page4-inner h1").innerHTML = clutter;
})

gsap.to("#page4-inner h1 span", {
    scrollTrigger: {
        
        trigger:"#page4-inner h1 span",
        scroller:"#main",
        start:"top 80%",
        end:"bottom 30%",
        scrub:.5
    },
    color:"#fff",
    stagger:.2
})

function canvas2() {
    const canvas = document.querySelector("#page5 canvas");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;


    window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
    });

    function files(index) {
    var data = `
    
    ./magma/bridges00004.png 
    ./magma/bridges00007.png 
    ./magma/bridges00010.png 
    ./magma/bridges00013.png 
    ./magma/bridges00016.png 
    ./magma/bridges00019.png 
    ./magma/bridges00022.png 
    ./magma/bridges00025.png 
    ./magma/bridges00028.png 
    ./magma/bridges00031.png 
    ./magma/bridges00034.png 
    ./magma/bridges00037.png 
    ./magma/bridges00040.png 
    ./magma/bridges00043.png 
    ./magma/bridges00046.png 
    ./magma/bridges00049.png 
    ./magma/bridges00052.png 
    ./magma/bridges00055.png 
    ./magma/bridges00058.png 
    ./magma/bridges00061.png 
    ./magma/bridges00064.png 
    ./magma/bridges00067.png 
    ./magma/bridges00070.png 
    ./magma/bridges00073.png 
    ./magma/bridges00076.png 
    ./magma/bridges00079.png 
    ./magma/bridges00082.png 
    ./magma/bridges00085.png 
    ./magma/bridges00088.png 
    ./magma/bridges00091.png 
    ./magma/bridges00094.png 
    ./magma/bridges00097.png 
    ./magma/bridges00100.png 
    ./magma/bridges00103.png 
    ./magma/bridges00106.png 
    ./magma/bridges00109.png 
    ./magma/bridges00112.png 
    ./magma/bridges00115.png 
    ./magma/bridges00118.png 
    ./magma/bridges00121.png 
    ./magma/bridges00124.png 
    ./magma/bridges00127.png 
    ./magma/bridges00130.png 
    ./magma/bridges00133.png 
    ./magma/bridges00136.png 
    ./magma/bridges00139.png 
    ./magma/bridges00142.png 
    ./magma/bridges00145.png 
    ./magma/bridges00148.png 
    ./magma/bridges00151.png 
    ./magma/bridges00154.png 
    ./magma/bridges00157.png 
    ./magma/bridges00160.png 
    ./magma/bridges00163.png
    `;
    return data.split("\n")[index];
    }

    const frameCount = 54;

    const images = [];
    const imageSeq = {
    frame: 1,
    };

    for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
    }

    gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
        scrub: 1,
        trigger: `#page5>canvas`,
        //   set start end according to preference
        start: `top top`,
        end: `600% top`,
        scroller: `#main`,
    },
    onUpdate: render,
    });

    images[1].onload = render;

    function render() {
    scaleImage(images[imageSeq.frame], context);
    }

    function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
    );
    }
    ScrollTrigger.create({

    trigger: "#page5",
    pin: true,
    // markers:true,
    scroller: `#main`,
    //   set start end according to preference
    start: `top top`,
    end: `600% top`,
    });
}
canvas2()

var clutter = "";

document.querySelector("#page6-inner h1").textContent.split(" ").forEach((dets) => {
    clutter+= `<span> ${dets} </span>`

    document.querySelector("#page6-inner h1").innerHTML = clutter;
})

gsap.to("#page6-inner h1 span", {
    scrollTrigger: {
        
        trigger:"#page6-inner h1 span",
        scroller:"#main",
        start:"top 80%",
        end:"bottom 30%",
        scrub:.5
    },
    color:"#fff",
    stagger:.2
})

function canvas3() {
    const canvas = document.querySelector("#page7 canvas");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;


    window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
    });

    function files(index) {
    var data = `
      https://thisismagma.com/assets/home/lore/seq/1.webp?2
      https://thisismagma.com/assets/home/lore/seq/2.webp?2
      https://thisismagma.com/assets/home/lore/seq/3.webp?2
      https://thisismagma.com/assets/home/lore/seq/4.webp?2
      https://thisismagma.com/assets/home/lore/seq/5.webp?2
      https://thisismagma.com/assets/home/lore/seq/6.webp?2
      https://thisismagma.com/assets/home/lore/seq/7.webp?2
      https://thisismagma.com/assets/home/lore/seq/8.webp?2
      https://thisismagma.com/assets/home/lore/seq/9.webp?2
      https://thisismagma.com/assets/home/lore/seq/10.webp?2
      https://thisismagma.com/assets/home/lore/seq/11.webp?2
      https://thisismagma.com/assets/home/lore/seq/12.webp?2
      https://thisismagma.com/assets/home/lore/seq/13.webp?2
      https://thisismagma.com/assets/home/lore/seq/14.webp?2
      https://thisismagma.com/assets/home/lore/seq/15.webp?2
      https://thisismagma.com/assets/home/lore/seq/16.webp?2
      https://thisismagma.com/assets/home/lore/seq/17.webp?2
      https://thisismagma.com/assets/home/lore/seq/18.webp?2
      https://thisismagma.com/assets/home/lore/seq/19.webp?2
      https://thisismagma.com/assets/home/lore/seq/20.webp?2
      https://thisismagma.com/assets/home/lore/seq/21.webp?2
      https://thisismagma.com/assets/home/lore/seq/22.webp?2
      https://thisismagma.com/assets/home/lore/seq/23.webp?2
      https://thisismagma.com/assets/home/lore/seq/24.webp?2
      https://thisismagma.com/assets/home/lore/seq/25.webp?2
      https://thisismagma.com/assets/home/lore/seq/26.webp?2
      https://thisismagma.com/assets/home/lore/seq/27.webp?2
      https://thisismagma.com/assets/home/lore/seq/28.webp?2
      https://thisismagma.com/assets/home/lore/seq/29.webp?2
      https://thisismagma.com/assets/home/lore/seq/30.webp?2
      https://thisismagma.com/assets/home/lore/seq/31.webp?2
      https://thisismagma.com/assets/home/lore/seq/32.webp?2
      https://thisismagma.com/assets/home/lore/seq/33.webp?2
      https://thisismagma.com/assets/home/lore/seq/34.webp?2
      https://thisismagma.com/assets/home/lore/seq/35.webp?2
      https://thisismagma.com/assets/home/lore/seq/36.webp?2
      https://thisismagma.com/assets/home/lore/seq/37.webp?2
      https://thisismagma.com/assets/home/lore/seq/38.webp?2
      https://thisismagma.com/assets/home/lore/seq/39.webp?2
      https://thisismagma.com/assets/home/lore/seq/40.webp?2
      https://thisismagma.com/assets/home/lore/seq/41.webp?2
      https://thisismagma.com/assets/home/lore/seq/42.webp?2
      https://thisismagma.com/assets/home/lore/seq/43.webp?2
      https://thisismagma.com/assets/home/lore/seq/44.webp?2
      https://thisismagma.com/assets/home/lore/seq/45.webp?2
      https://thisismagma.com/assets/home/lore/seq/46.webp?2
      https://thisismagma.com/assets/home/lore/seq/47.webp?2
      https://thisismagma.com/assets/home/lore/seq/48.webp?2
      https://thisismagma.com/assets/home/lore/seq/49.webp?2
      https://thisismagma.com/assets/home/lore/seq/50.webp?2
      https://thisismagma.com/assets/home/lore/seq/51.webp?2
      https://thisismagma.com/assets/home/lore/seq/52.webp?2
      https://thisismagma.com/assets/home/lore/seq/53.webp?2
      https://thisismagma.com/assets/home/lore/seq/54.webp?2
      https://thisismagma.com/assets/home/lore/seq/55.webp?2
      https://thisismagma.com/assets/home/lore/seq/56.webp?2
      https://thisismagma.com/assets/home/lore/seq/57.webp?2
      https://thisismagma.com/assets/home/lore/seq/58.webp?2
      https://thisismagma.com/assets/home/lore/seq/59.webp?2
      https://thisismagma.com/assets/home/lore/seq/60.webp?2
      https://thisismagma.com/assets/home/lore/seq/61.webp?2
      https://thisismagma.com/assets/home/lore/seq/62.webp?2
      https://thisismagma.com/assets/home/lore/seq/63.webp?2
      https://thisismagma.com/assets/home/lore/seq/64.webp?2
      https://thisismagma.com/assets/home/lore/seq/65.webp?2
      https://thisismagma.com/assets/home/lore/seq/66.webp?2
      https://thisismagma.com/assets/home/lore/seq/67.webp?2
      https://thisismagma.com/assets/home/lore/seq/68.webp?2
      https://thisismagma.com/assets/home/lore/seq/69.webp?2
      https://thisismagma.com/assets/home/lore/seq/70.webp?2
      https://thisismagma.com/assets/home/lore/seq/71.webp?2
      https://thisismagma.com/assets/home/lore/seq/72.webp?2
      https://thisismagma.com/assets/home/lore/seq/73.webp?2
      https://thisismagma.com/assets/home/lore/seq/74.webp?2
      https://thisismagma.com/assets/home/lore/seq/75.webp?2
      https://thisismagma.com/assets/home/lore/seq/76.webp?2
      https://thisismagma.com/assets/home/lore/seq/77.webp?2
      https://thisismagma.com/assets/home/lore/seq/78.webp?2
      https://thisismagma.com/assets/home/lore/seq/79.webp?2
      https://thisismagma.com/assets/home/lore/seq/80.webp?2
      https://thisismagma.com/assets/home/lore/seq/81.webp?2
      https://thisismagma.com/assets/home/lore/seq/82.webp?2
      https://thisismagma.com/assets/home/lore/seq/83.webp?2
      https://thisismagma.com/assets/home/lore/seq/84.webp?2
      https://thisismagma.com/assets/home/lore/seq/85.webp?2
      https://thisismagma.com/assets/home/lore/seq/86.webp?2
      https://thisismagma.com/assets/home/lore/seq/87.webp?2
      https://thisismagma.com/assets/home/lore/seq/88.webp?2
      https://thisismagma.com/assets/home/lore/seq/89.webp?2
      https://thisismagma.com/assets/home/lore/seq/90.webp?2
      https://thisismagma.com/assets/home/lore/seq/91.webp?2
      https://thisismagma.com/assets/home/lore/seq/92.webp?2
      https://thisismagma.com/assets/home/lore/seq/93.webp?2
      https://thisismagma.com/assets/home/lore/seq/94.webp?2
      https://thisismagma.com/assets/home/lore/seq/95.webp?2
      https://thisismagma.com/assets/home/lore/seq/96.webp?2
      https://thisismagma.com/assets/home/lore/seq/97.webp?2
      https://thisismagma.com/assets/home/lore/seq/98.webp?2
      https://thisismagma.com/assets/home/lore/seq/99.webp?2
      https://thisismagma.com/assets/home/lore/seq/100.webp?2
      https://thisismagma.com/assets/home/lore/seq/101.webp?2
      https://thisismagma.com/assets/home/lore/seq/102.webp?2
      https://thisismagma.com/assets/home/lore/seq/103.webp?2
      https://thisismagma.com/assets/home/lore/seq/104.webp?2
      https://thisismagma.com/assets/home/lore/seq/105.webp?2
      https://thisismagma.com/assets/home/lore/seq/106.webp?2
      https://thisismagma.com/assets/home/lore/seq/107.webp?2
      https://thisismagma.com/assets/home/lore/seq/108.webp?2
      https://thisismagma.com/assets/home/lore/seq/109.webp?2
      https://thisismagma.com/assets/home/lore/seq/110.webp?2
      https://thisismagma.com/assets/home/lore/seq/111.webp?2
      https://thisismagma.com/assets/home/lore/seq/112.webp?2
      https://thisismagma.com/assets/home/lore/seq/113.webp?2
      https://thisismagma.com/assets/home/lore/seq/114.webp?2
      https://thisismagma.com/assets/home/lore/seq/115.webp?2
      https://thisismagma.com/assets/home/lore/seq/116.webp?2
      https://thisismagma.com/assets/home/lore/seq/117.webp?2
      https://thisismagma.com/assets/home/lore/seq/118.webp?2
      https://thisismagma.com/assets/home/lore/seq/119.webp?2
      https://thisismagma.com/assets/home/lore/seq/120.webp?2
      https://thisismagma.com/assets/home/lore/seq/121.webp?2
      https://thisismagma.com/assets/home/lore/seq/122.webp?2
      https://thisismagma.com/assets/home/lore/seq/123.webp?2
      https://thisismagma.com/assets/home/lore/seq/124.webp?2
      https://thisismagma.com/assets/home/lore/seq/125.webp?2
      https://thisismagma.com/assets/home/lore/seq/126.webp?2
      https://thisismagma.com/assets/home/lore/seq/127.webp?2
      https://thisismagma.com/assets/home/lore/seq/128.webp?2
      https://thisismagma.com/assets/home/lore/seq/129.webp?2
      https://thisismagma.com/assets/home/lore/seq/130.webp?2
      https://thisismagma.com/assets/home/lore/seq/131.webp?2
      https://thisismagma.com/assets/home/lore/seq/132.webp?2
      https://thisismagma.com/assets/home/lore/seq/133.webp?2
      https://thisismagma.com/assets/home/lore/seq/134.webp?2
      https://thisismagma.com/assets/home/lore/seq/135.webp?2
      https://thisismagma.com/assets/home/lore/seq/136.webp?2
    `;
    return data.split("\n")[index];
    }

    const frameCount = 136;

    const images = [];
    const imageSeq = {
    frame: 1,
    };

    for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
    }

    gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
        scrub: 1,
        trigger: `#page7>canvas`,
        //   set start end according to preference
        start: `top top`,
        end: `600% top`,
        scroller: `#main`,
    },
    onUpdate: render,
    });

    images[1].onload = render;

    function render() {
    scaleImage(images[imageSeq.frame], context);
    }

    function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
    );
    }
    ScrollTrigger.create({

    trigger: "#page7",
    pin: true,
    // markers:true,
    scroller: `#main`,
    //   set start end according to preference
    start: `top top`,
    end: `600% top`,
    });
}
canvas3()

gsap.to("#page7-circle", {
  scrollTrigger: {
    trigger:"#page7-circle",
    scroller:"#main",
    // markers:true,
    start:"top center",
    end:"top -600%",
    scrub:.5
  },
  scale:1.9
})

gsap.to("#page7-inner-circle", {
  scrollTrigger: {
    trigger:"#page7-inner-circle",
    scroller:"#main",
    // markers:true,
    start:"top center",
    end:"top -600%",
    scrub:.5
  },
  backgroundColor:"#0a3bce91"
})

gsap.from("#page8-inner h1, #page8-inner button", {
  opacity:0,
  y:100,
  stagger:.2,
  scrollTrigger: {
    trigger:"#page8-inner",
    scroller:"#main",
    // markers:true,
    start:"top 70%",
    end:"top 57%",
    scrub:4,
  }
})