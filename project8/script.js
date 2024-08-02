var t1=gsap.timeline()

t1.from(("#nav h3"),{
  y:-50,
  opacity:0,
  delay:0.4,
  duration:1,
  stagger:0.2
})

t1.from(("#main h1"),{
    x:-450,
    opacity:0,
    duration:0.8,
    stagger:0.3
})

t1.from(("img"),{
    x:100,
    rotate:45,
    opacity:0,
    duration:0.5,
    stagger:0.5
})