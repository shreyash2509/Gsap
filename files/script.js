function display_s1() {
  gsap.from(".s1", {
    y: 200,
    stagger: 0.1,
    duration: 0.5,
    opacity: 0,
  });
  gsap.from(".d1", {
    y: 100,
    stagger: 0.1,
    duration: 0.5,
    opacity: 0,
  });
  gsap.from(".page-1-img-1", {
    opacity: 0,
    duration: 1,
    y: 700,
  });
  gsap.from(".page-1-img-2", {
    opacity: 0,
    duration: 1,
    y: 700,
  });
  document.getElementById("main1").classList.remove("hide");
  document.getElementById("main2").classList.add("hide");
  document.getElementById("main3").classList.add("hide");
  document.getElementById("main4").classList.add("hide");
  document.getElementById("main5").classList.add("hide");
  document.getElementById("main6").classList.add("hide");
  document.getElementById("main7").classList.add("hide");
}

function display_s2() {
  gsap.from(".s2", {
    y: 100,
    stagger: 0.1,
    duration: 0.5,
    opacity: 0,
  });
  gsap.from(".d2", {
    y: 100,
    stagger: 0.1,
    duration: 0.5,
    opacity: 0,
  });
  gsap.from(".page-2-img-1", {
    opacity: 0,
    duration: 0.5,
    y: 250,
  });
  gsap.from(".page-2-img-2", {
    opacity: 0,
    duration: 0.5,
    y: -250,
  });

  document.getElementById("main1").classList.add("hide");
  document.getElementById("main2").classList.remove("hide");
  document.getElementById("main3").classList.add("hide");
  document.getElementById("main4").classList.add("hide");
  document.getElementById("main5").classList.add("hide");
  document.getElementById("main6").classList.add("hide");
  document.getElementById("main7").classList.add("hide");
}

function display_s3() {
  gsap.from(".s3", {
    y: 100,
    stagger: 0.1,
    duration: 0.5,
    opacity: 0,
  });
  gsap.from(".d3", {
    y: 100,
    stagger: 0.1,
    duration: 0.5,
    opacity: 0,
  });
  gsap.from(".page-3-img-1", {
    opacity: 0,
    duration: 0.5,
    y: 300,
  });
  gsap.from(".page-3-img-2", {
    opacity: 0,
    duration: 0.5,
    y: -275,
  });

  document.getElementById("main1").classList.add("hide");
  document.getElementById("main2").classList.add("hide");
  document.getElementById("main3").classList.remove("hide");
  document.getElementById("main4").classList.add("hide");
  document.getElementById("main5").classList.add("hide");
  document.getElementById("main6").classList.add("hide");
  document.getElementById("main7").classList.add("hide");
}

function display_s4() {
  gsap.from(".s4", {
    y: 100,
    stagger: 0.1,
    duration: 0.5,
    opacity: 0,
  });
  gsap.from(".d4", {
    y: 250,
    stagger: 0.1,
    duration: 0.5,
    opacity: 0,
  });
  gsap.from(".page-4-img-2", {
    opacity: 0,
    duration: 0.5,
    y: 100,
  });
  gsap.from(".page-4-img-3", {
    opacity: 0,
    duration: 0.5,
    y: -100,
  });
  gsap.from(".page-4-img-4", {
    opacity: 0,
    duration: 0.5,
    y: -200,
    x: 200,
  });
  gsap.from(".page-4-img-5", {
    opacity: 0,
    duration: 0.5,
    y: 200,
    x: 200,
  });

  document.getElementById("main1").classList.add("hide");
  document.getElementById("main2").classList.add("hide");
  document.getElementById("main3").classList.add("hide");
  document.getElementById("main4").classList.remove("hide");
  document.getElementById("main5").classList.add("hide");
  document.getElementById("main6").classList.add("hide");
  document.getElementById("main7").classList.add("hide");
}

function display_s5() {
  gsap.from(".s5", {
    y: 100,
    stagger: 0.1,
    duration: 0.5,
    opacity: 0,
  });
  gsap.from(".d5", {
    y: 100,
    stagger: 0.1,
    duration: 0.5,
    opacity: 0,
  });
  gsap.from(".page-5-img-1", {
    opacity: 0,
    duration: 0.5,
    y: 150,
  });
  gsap.from(".page-5-img-2", {
    opacity: 0,
    duration: 0.5,
    y: -250,
  });
  gsap.from(".page-5-img-3", {
    opacity: 0,
    duration: 0.5,
    y: 150,
  });
  gsap.from(".page-5-img-4", {
    opacity: 0,
    duration: 0.5,
    y: -200,
  });
  gsap.from(".page-5-img-5", {
    opacity: 0,
    duration: 0.5,
    y: 200,
  });

  document.getElementById("main1").classList.add("hide");
  document.getElementById("main2").classList.add("hide");
  document.getElementById("main3").classList.add("hide");
  document.getElementById("main4").classList.add("hide");
  document.getElementById("main5").classList.remove("hide");
  document.getElementById("main6").classList.add("hide");
  document.getElementById("main7").classList.add("hide");
}

function display_s6() {
  gsap.from(".s6", {
    y: 100,
    stagger: 0.1,
    duration: 0.5,
    opacity: 0,
  });
  gsap.from(".d6", {
    y: 100,
    stagger: 0.1,
    duration: 0.5,
    opacity: 0,
  });
  gsap.from(".page-6-img-1", {
    opacity: 0,
    duration: 0.5,
    y: 300,
  });

  document.getElementById("main1").classList.add("hide");
  document.getElementById("main2").classList.add("hide");
  document.getElementById("main3").classList.add("hide");
  document.getElementById("main4").classList.add("hide");
  document.getElementById("main5").classList.add("hide");
  document.getElementById("main6").classList.remove("hide");
  document.getElementById("main7").classList.add("hide");
}

function display_s7() {
  gsap.from(".s7", {
    y: 100,
    stagger: 0.1,
    duration: 0.5,
    opacity: 0,
  });
  gsap.from(".d7", {
    y: 100,
    stagger: 0.1,
    duration: 0.5,
    opacity: 0,
  });
  gsap.from(".page-7-img-1", {
    opacity: 0,
    duration: 0.5,
    y: 200,
  });
  gsap.from(".page-7-img-2", {
    opacity: 0,
    duration: 0.5,
    y: 200,
  });

  document.getElementById("main1").classList.add("hide");
  document.getElementById("main2").classList.add("hide");
  document.getElementById("main3").classList.add("hide");
  document.getElementById("main4").classList.add("hide");
  document.getElementById("main5").classList.add("hide");
  document.getElementById("main6").classList.add("hide");
  document.getElementById("main7").classList.remove("hide");
}

//scroll trigger

var t1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".largest-div",
    start: "center 105%",
    end: "center 91%",
    //markers: true,
    onLeave: () => display_s2(),
    onEnterBack: () => display_s1(),
  },
});

var t2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".largest-div",
    start: "center 91%",
    end: "center 78%",
    //markers: true,
    onLeave: () => display_s3(),
    onEnterBack: () => display_s2(),
  },
});
var t3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".largest-div",
    start: "center 78%",
    end: "center 65%",
    onLeave: () => display_s4(),
    onEnterBack: () => display_s3(),
  },
});
var t4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".largest-div",
    start: "center 65%",
    end: "center 52%",
    onLeave: () => display_s5(),
    onEnterBack: () => display_s4(),
  },
});
var t5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".largest-div",
    start: "center 52%",
    end: "center 39%",

    onLeave: () => display_s6(),
    onEnterBack: () => display_s5(),
  },
});

var t6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".largest-div",
    start: "center 39%",
    end: "center 26%",
    onLeave: () => display_s7(),
    onEnterBack: () => display_s6(),
  },
});

var t7 = gsap.timeline({
  scrollTrigger: {
    trigger: ".largest-div",
    start: "center 26%",
    end: "center -30%",
    //markers: true,
    onLeave: () => display_s1(),
    onEnterBack: () => display_s7(),
  },
});
