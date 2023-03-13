$(".home-about_team-pictures-item").each(function (index) {
    let teamPicturesTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".section_home-about",
            start: "top bottom",
            end: "bottom top",
            scrub: 1
        }
    });

    // Check if index is prime or not
    let number = parseInt(index);
    let rest = number % 2;
    if (rest == 0) {
        teamPicturesTimeline.fromTo($(this).find(".home-about_team-pictures-wrapper"), {
            y: "-10%"
        }, {
            y: "10%",
            ease: "power1.out"
        });
    }
    else {
        teamPicturesTimeline.from($(this).find(".home-about_team-pictures-wrapper"), {
            y: "10%"
        }, {
            y: "-10%",
            ease: "power1.out"
        });
    }
});