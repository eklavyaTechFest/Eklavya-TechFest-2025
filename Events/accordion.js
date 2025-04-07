document.addEventListener("DOMContentLoaded", function () {
  // Added: Intersection Observer to add 'in-view' class when .accordion enters viewport
  const accordions = document.querySelectorAll(".accordion");
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  accordions.forEach((acc) => {
    observer.observe(acc);
  });

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
