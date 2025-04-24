
// document.addEventListener("DOMContentLoaded", () => {
//   gsap.registerPlugin(ScrollTrigger);

//   const lenis = new Lenis();
//   lenis.on("scroll", ScrollTrigger.update);
//   gsap.ticker.add((time) => {
//     lenis.raf(time * 1000);
//   });
//   gsap.ticker.lagSmoothing(0);

//   const stickySection = document.querySelector(".sticky_homepage");
//   const slidesContainer = document.querySelector(".slides");
//   const slider = document.querySelector(".slider");
//   const slides = document.querySelectorAll(".slide");

//   const stickyHeight = window.innerHeight * 6;
//   const totalMove = slidesContainer.offsetWidth - slider.offsetWidth;
//   const slideWidth = slider.offsetWidth;

//   slides.forEach((slide) => {
//     const title = slide.querySelector(".title h3");
//     const para = slide.querySelector(".title p");
//     const btn = slide.querySelector(".banner_btn");

//     gsap.set(title, { y: -200 });
//     gsap.set(para, { y: 200 });
//     gsap.set(btn, { y: 200 });
//   });

//   let currentVisibleIndex = null;

//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         const currentIndex = Array.from(slides).indexOf(entry.target);
//         const titles = Array.from(slides).map((slide) => ({
//           h3: slide.querySelector(".title h3"),
//           p: slide.querySelector(".title p"),
//           btn: slide.querySelector(".banner_btn"),
//         }));

//         if (entry.intersectionRatio >= 0.5) {
//           currentVisibleIndex = currentIndex;
//           titles.forEach((title, index) => {
//             gsap.to(title.h3, {
//               y: index === currentIndex ? 0 : -200,
//               duration: 0.5,
//               ease: "power2.out",
//               overwrite: true,
//             });
//             gsap.to(title.p, {
//               y: index === currentIndex ? 0 : 200,
//               duration: 0.5,
//               delay: 0.1,
//               ease: "power2.out",
//               overwrite: true,
//             });
//             gsap.to(title.btn, {
//               y: index === currentIndex ? 0 : 200,
//               duration: 0.5,
//               delay: 0.2,
//               ease: "power2.out",
//               overwrite: true,
//             });
//           });
//         } else if (
//           entry.intersectionRatio < 0.5 &&
//           currentVisibleIndex === currentIndex
//         ) {
//           const prevIndex = currentIndex - 1;
//           currentVisibleIndex = prevIndex >= 0 ? prevIndex : null;

//           titles.forEach((title, index) => {
//             gsap.to(title.h3, {
//               y: index === prevIndex ? 0 : -200,
//               duration: 0.5,
//               ease: "power2.out",
//               overwrite: true,
//             });
//             gsap.to(title.p, {
//               y: index === prevIndex ? 0 : 200,
//               duration: 0.5,
//               delay: 0.1,
//               ease: "power2.out",
//               overwrite: true,
//             });
//             gsap.to(title.btn, {
//               y: index === prevIndex ? 0 : 200,
//               duration: 0.5,
//               delay: 0.2,
//               ease: "power2.out",
//               overwrite: true,
//             });
//           });
//         }
//       });
//     },
//     {
//       root: slider,
//       threshold: [0, 0.5],
//     }
//   );

//   slides.forEach((slide) => observer.observe(slide));

//   ScrollTrigger.create({
//     trigger: stickySection,
//     start: "top top",
//     end: `+=${stickyHeight}px`,
//     scrub: 1,
//     pin: true,
//     pinSpacing: true,
//     onUpdate: (self) => {
//       const progress = self.progress;
//       const mainMove = progress * totalMove;

//       gsap.set(slidesContainer, {
//         x: -mainMove,
//       });

//       const currentSlide = Math.floor(mainMove / slideWidth);
//       const sliderProgress = (mainMove % slideWidth) / slideWidth;

//       slides.forEach((slide, index) => {
//         const image = slide.querySelector("img");
//         if (image) {
//           if (index == currentSlide || index === currentSlide + 1) {
//             const relativeProgress =
//               index === currentSlide ? sliderProgress : sliderProgress - 1;
//             const parallaxAmount = relativeProgress * slideWidth * 0.5;
//             gsap.set(image, {
//               x: parallaxAmount,
//             });
//           } else {
//             gsap.set(image, {
//               x: 0,
//             });
//           }
//         }
//       });
//     },
//   });
// });


// document.addEventListener("DOMContentLoaded", () => {
//   gsap.registerPlugin(ScrollTrigger);

//   const lenis = new Lenis();
//   lenis.on("scroll", ScrollTrigger.update);
//   gsap.ticker.add((time) => {
//     lenis.raf(time * 1000);
//   });
//   gsap.ticker.lagSmoothing(0);

//   const stickySection = document.querySelector(".sticky_homepage");
//   const slidesContainer = document.querySelector(".slides");
//   const slider = document.querySelector(".slider");
//   const slides = document.querySelectorAll(".slide");

//   const stickyHeight = window.innerHeight * 6;
//   const totalMove = slidesContainer.offsetWidth - slider.offsetWidth;

//   const slideWidth = slider.offsetWidth;

//   slides.forEach((slide) => {
//     const title = slide.querySelector(".title h3");
//     const para = slide.querySelector(".title p");
//     const btn = slide.querySelector(".banner_btn");
//     const imgTitle = slide.querySelector(".main_title img");

//     gsap.set(title, { y: -200 });
//     gsap.set(para, { y: 200 });
//     gsap.set(btn, { y: 200 });
//     gsap.set(imgTitle, { scale: 0.8 });
//   });

//   let currentVisibleIndex = null;

//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         const currentIndex = Array.from(slides).indexOf(entry.target);
//         const titles = Array.from(slides).map((slide) => ({
//           h3: slide.querySelector(".title h3"),
//           p: slide.querySelector(".title p"),
//           btn: slide.querySelector(".banner_btn"),
//           img: slide.querySelector(".main_title img"),
//         }));

//         if (entry.intersectionRatio >= 0.5) {
//           currentVisibleIndex = currentIndex;
//           titles.forEach((title, index) => {
//             gsap.to(title.h3, {
//               y: index === currentIndex ? 0 : -200,
//               duration: 0.5,
//               ease: "power2.out",
//               overwrite: true,
//             });

//             gsap.to(title.p, {
//               y: index === currentIndex ? 0 : 200,
//               duration: 0.5,
//               delay: 0.15,
//               ease: "power2.out",
//               overwrite: true,
//             });

//             gsap.to(title.btn, {
//               y: index === currentIndex ? 0 : 200,
//               duration: 0.5,
//               delay: 0.25,
//               ease: "power2.out",
//               overwrite: true,
//             });

//             gsap.to(title.img, {
//               scale: index === currentIndex ? 1 : 0.8,
//               duration: 0.5,
//               delay: 0.25,
//               ease: "power2.out",
//               overwrite: true,
//             });
//           });
//         } else if (
//           entry.intersectionRatio < 0.5 &&
//           currentVisibleIndex === currentIndex
//         ) {
//           const prevIndex = currentIndex - 1;
//           currentVisibleIndex = prevIndex >= 0 ? prevIndex : null;

//           titles.forEach((title, index) => {
//             gsap.to(title.h3, {
//               y: index === prevIndex ? 0 : -200,
//               duration: 0.5,
//               ease: "power2.out",
//               overwrite: true,
//             });

//             gsap.to(title.p, {
//               y: index === prevIndex ? 0 : 200,
//               duration: 0.5,
//               delay: 0.15,
//               ease: "power2.out",
//               overwrite: true,
//             });

//             gsap.to(title.btn, {
//               y: index === prevIndex ? 0 : 200,
//               duration: 0.5,
//               delay: 0.25,
//               ease: "power2.out",
//               overwrite: true,
//             });

//             gsap.to(title.img, {
//               scale: index === prevIndex ? 1 : 0.8,
//               duration: 0.5,
//               delay: 0.25,
//               ease: "power2.out",
//               overwrite: true,
//             });
//           });
//         }
//       });
//     },
//     {
//       root: slider,
//       threshold: [0, 0.5],
//     }
//   );

//   slides.forEach((slide) => observer.observe(slide));

//   ScrollTrigger.create({
//     trigger: stickySection,
//     start: "top top",
//     end: `+=${stickyHeight}px`,
//     scrub: 1,
//     pin: true,
//     pinSpacing: true,
//     onUpdate: (self) => {
//       const progress = self.progress;
//       const mainMove = progress * totalMove;

//       gsap.set(slidesContainer, {
//         x: -mainMove,
//       });

//       const currentSlide = Math.floor(mainMove / slideWidth);
//       const sliderProgress = (mainMove % slideWidth) / slideWidth;

//       slides.forEach((slide, index) => {
//         const image = slide.querySelector("img");
//         if (image) {
//           if (index == currentSlide || index === currentSlide + 1) {
//             const relativeProgress =
//               index === currentSlide ? sliderProgress : sliderProgress - 1;
//             const parallaxAmount = relativeProgress * slideWidth * 0.5;
//             gsap.set(image, {
//               x: parallaxAmount,
//             });
//           } else {
//             gsap.set(image, {
//               x: 0,
//             });
//           }
//         }
//       });
//     },
//   });
// });


document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  const stickySection = document.querySelector(".sticky_homepage");
  const slidesContainer = document.querySelector(".slides");
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");

  const stickyHeight = window.innerHeight * 6;
  const totalMove = slidesContainer.offsetWidth - slider.offsetWidth;
  const slideWidth = slider.offsetWidth;

  // Set initial states
  slides.forEach((slide, index) => {
    const title = slide.querySelector(".title h3");
    const para = slide.querySelector(".title p");
    const btn = slide.querySelector(".banner_btn");
    const imgTitle = slide.querySelector(".main_title img");

    if (index === 0) {
      // Animate the first slide right away
      gsap.fromTo(title, { y: -200 }, { y: 0, duration: 0.5, ease: "power2.out" });
      gsap.fromTo(para, { y: 200 }, { y: 0, duration: 0.5, delay: 0.15, ease: "power2.out" });
      gsap.fromTo(btn, { y: 200 }, { y: 0, duration: 0.5, delay: 0.25, ease: "power2.out" });
      gsap.fromTo(imgTitle, { scale: 0.8 }, { scale: 1, duration: 0.5, delay: 0.5, ease: "power2.out" });
    } else {
      gsap.set(title, { y: -200 });
      gsap.set(para, { y: 200 });
      gsap.set(btn, { y: 200 });
      gsap.set(imgTitle, { scale: 0.8 });
    }
  });

  let currentVisibleIndex = 0;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const currentIndex = Array.from(slides).indexOf(entry.target);
        const titles = Array.from(slides).map((slide) => ({
          h3: slide.querySelector(".title h3"),
          p: slide.querySelector(".title p"),
          btn: slide.querySelector(".banner_btn"),
          img: slide.querySelector(".main_title img"),
        }));

        if (entry.intersectionRatio >= 0.5) {
          currentVisibleIndex = currentIndex;
          titles.forEach((title, index) => {
            gsap.to(title.h3, {
              y: index === currentIndex ? 0 : -200,
              duration: 0.5,
              ease: "power2.out",
              overwrite: true,
            });

            gsap.to(title.p, {
              y: index === currentIndex ? 0 : 200,
              duration: 0.5,
              delay: 0.15,
              ease: "power2.out",
              overwrite: true,
            });

            gsap.to(title.btn, {
              y: index === currentIndex ? 0 : 200,
              duration: 0.5,
              delay: 0.25,
              ease: "power2.out",
              overwrite: true,
            });

            gsap.to(title.img, {
              scale: index === currentIndex ? 1 : 0.8,
              duration: 0.5,
              delay: 0.5,
              ease: "power2.out",
              overwrite: true,
            });
          });
        } else if (
          entry.intersectionRatio < 0.5 &&
          currentVisibleIndex === currentIndex
        ) {
          const prevIndex = currentIndex - 1;
          currentVisibleIndex = prevIndex >= 0 ? prevIndex : null;

          titles.forEach((title, index) => {
            gsap.to(title.h3, {
              y: index === prevIndex ? 0 : -200,
              duration: 0.5,
              ease: "power2.out",
              overwrite: true,
            });

            gsap.to(title.p, {
              y: index === prevIndex ? 0 : 200,
              duration: 0.5,
              delay: 0.15,
              ease: "power2.out",
              overwrite: true,
            });

            gsap.to(title.btn, {
              y: index === prevIndex ? 0 : 200,
              duration: 0.5,
              delay: 0.25,
              ease: "power2.out",
              overwrite: true,
            });

            gsap.to(title.img, {
              scale: index === prevIndex ? 1 : 0.8,
              duration: 0.5,
              delay: 0.5,
              ease: "power2.out",
              overwrite: true,
            });
          });
        }
      });
    },
    {
      root: slider,
      threshold: [0, 0.5],
    }
  );

  slides.forEach((slide) => observer.observe(slide));

  ScrollTrigger.create({
    trigger: stickySection,
    start: "top top",
    end: `+=${stickyHeight}px`,
    scrub: 1,
    pin: true,
    pinSpacing: true,
    onUpdate: (self) => {
      const progress = self.progress;
      const mainMove = progress * totalMove;

      gsap.set(slidesContainer, {
        x: -mainMove,
      });

      const currentSlide = Math.floor(mainMove / slideWidth);
      const sliderProgress = (mainMove % slideWidth) / slideWidth;

      slides.forEach((slide, index) => {
        const image = slide.querySelector("img");
        if (image) {
          if (index == currentSlide || index === currentSlide + 1) {
            const relativeProgress =
              index === currentSlide ? sliderProgress : sliderProgress - 1;
            const parallaxAmount = relativeProgress * slideWidth * 0.5;
            gsap.set(image, {
              x: parallaxAmount,
            });
          } else {
            gsap.set(image, {
              x: 0,
            });
          }
        }
      });
    },
  });
});
