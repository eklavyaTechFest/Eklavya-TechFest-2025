document.addEventListener("DOMContentLoaded", function () {
  const accordionHeadings = document.querySelectorAll(".accordion-heading");

  accordionHeadings.forEach((heading) => {
    heading.addEventListener("click", function () {
      // Toggle active class on heading
      this.classList.toggle("active");

      // Toggle show class on content
      const content = this.nextElementSibling;
      content.classList.toggle("show");

      // Close other accordions
      accordionHeadings.forEach((otherHeading) => {
        if (otherHeading !== heading) {
          otherHeading.classList.remove("active");
          otherHeading.nextElementSibling.classList.remove("show");
        }
      });
    });
  });
});
