let rect = document.querySelector("#center");

    rect.addEventListener("mousemove", function(details) {
      let rectangleLocation = rect.getBoundingClientRect();
      let insideRect = details.clientX - rectangleLocation.left;

      if (insideRect < rectangleLocation.width / 2) {
        let redColor = gsap.utils.mapRange(
          0,
          rectangleLocation.width / 2,
          255,
          0,
          insideRect
        );
        gsap.to(rect, {
          backgroundColor: `rgb(${redColor}, 0, 0)`,
          ease: "power4.out"
        });
      } else {
        let blueColor = gsap.utils.mapRange(
          rectangleLocation.width / 2,
          rectangleLocation.width,
          0,
          255,
          insideRect
        );
        gsap.to(rect, {
          backgroundColor: `rgb(0, 0, ${blueColor})`,
          ease: "power4.out"
        });
      }
    });

    rect.addEventListener("mouseleave", function() {
      gsap.to(rect, {
        backgroundColor: "white",
        ease: "power4.out"
      });
    });