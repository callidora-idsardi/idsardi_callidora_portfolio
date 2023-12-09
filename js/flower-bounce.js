(() => {



    // let tl = gsap.timeline({
    //     scrollTrigger: {
    //         trigger:'#pink-flower',
    //         start: 'top center',
    //         end: 'bottom center',
    //         scrub: true,
    //         markers: true,
    //         duration: 2,
           

    //     }
    // }) 

    gsap.from('.flower', {
            scale: 1,
            y:'50',
            duration: 2.5,
            ease: "bounce.out",
            stagger: 2
    })

  

  
})();