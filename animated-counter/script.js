const counters = document.querySelectorAll(".counter");
const animationSpeed = 500; // smaller = faster

const updateCounters = (counter) => {
  const targetCount = +counter.getAttribute("data-target");
  const currentCount = +counter.innerText;

  const increment = targetCount / animationSpeed;

  if (currentCount < targetCount) {
    counter.innerText = Math.ceil(currentCount + increment);
    setTimeout(() => updateCounters(counter), 10); // small delay for smooth animation
  } else {
    counter.innerText = targetCount;
  }
};

counters.forEach((counter) => {
  updateCounters(counter);
});
