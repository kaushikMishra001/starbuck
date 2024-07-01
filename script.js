document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("carousel");

  carousel.addEventListener("mouseover", () => {
    const images = carousel.querySelectorAll("img");
    images.forEach((image) => {
      image.style.animationPlayState = "paused";
    });
  });

  carousel.addEventListener("mouseout", () => {
    const images = carousel.querySelectorAll("img");
    images.forEach((image) => {
      image.style.animationPlayState = "running";
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const circle = document.getElementById("circle");
  let timeout;

  document.addEventListener("mousemove", (e) => {
    clearTimeout(timeout);

    circle.style.left = `${e.pageX - 10}px`;
    circle.style.top = `${e.pageY - 10}px`;
    circle.style.width = "40px";
    circle.style.height = "40px";

    timeout = setTimeout(() => {
      circle.style.width = "20px";
      circle.style.height = "20px";
    }, 200);
  });
});
