$(function(){
  //스킬바 채워지기
  const skillSpans = document.querySelectorAll('#main .aboutme_wrap .aboutme_right .aboutbot li .skillbar div span');

  function checkScroll() {
    const aboutMe = document.querySelector('#main .aboutme_wrap');
    const rect = aboutMe.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {
      skillSpans.forEach(span => span.classList.add('on'));
    } else {
      skillSpans.forEach(span => span.classList.remove('on'));
    }
  }

  window.addEventListener('scroll', checkScroll);
  window.addEventListener('load', checkScroll);
});