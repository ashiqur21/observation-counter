const counters = document.querySelectorAll('.counter');

const updateCounter = (counter) => {
  const target = +counter.getAttribute('data-target');
  const current = +counter.innerText;
  const increment = target / 200;

  if (current < target) {
    counter.innerText = Math.ceil(current + increment);
    setTimeout(() => updateCounter(counter), 10);
  } else {
    counter.innerText = target;
  }
};

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        updateCounter(entry.target);
        observer.unobserve(entry.target); // Stop observing after counting starts
      }
    });
  },
  { threshold: 0.5 } // Trigger when 50% of the counter is visible
);

counters.forEach((counter) => {
  observer.observe(counter);
});
