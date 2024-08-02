// gsap.to("#box",{
//     x:800,
//     rotate:360,
//     duration:2,
//     delay:1,
//     backgroundColor:"blue"
// })

// gsap.from("#box",{
//     x:800,
//     rotate:360,
//     duration:2,
//     delay:1,
//     backgroundColor:"blue"
// })

var t1=gsap.timeline()

t1.to("#box1",{
    x:800,
    rotate:360,
    scale:0.5,
    duration:2,
    delay:1
})
t1.to("#box2",{
    x:800,
    rotate:360,
    scale:0.5,
    duration:2,
})
t1.to("#box3",{
    x:800,
    rotate:360,
    scale:0.5,
    duration:2,
})