const wrapper = document.querySelector('.wrapper');

const animationDelay = (...args) => {
  let time = 0;
  args.forEach(elem => {
    let currentTime = time + elem.time;
    time = currentTime;

    if (typeof elem.func === 'function') {
      setTimeout(() => {
        elem.func.call();
      }, currentTime);
    }
  });
};

const firstStep = () => {
  wrapper.classList.toggle('first');
};

const secondStep = () => {
  wrapper.classList.toggle('first');
  wrapper.classList.toggle('second');
};

const thirdStep = () => {
  wrapper.classList.toggle('third');
  wrapper.classList.toggle('second');
};

wrapper.addEventListener('click', () => {
  if (!wrapper.classList.contains('third')) animationDelay({
    func: firstStep,
    time: 200
  }, {
    func: secondStep,
    time: 300
  }, {
    func: thirdStep,
    time: 200
  });else wrapper.classList.toggle('third'), location.reload();
});

$(function() {
  $(".wrapper").on("click", function() {
      setTimeout(function() {
          $('#letters').text('Flutter!');
        }, 1000);
      },)
})
