const contact = document.querySelector('.projectContainer')

const options = {
    //root:,
    rootMargin: '0px',
    threshold: 1
  }

let observer = new IntersectionObserver(x, options);


function x(entries, observer) {

  console.log("asd")
}

observer.observe(contact);
/*
const $video = document.querySelector('.contact')
    const options = {
      // root: document.querySelector('body'),
      rootMargin: '0px 0px 0px 0px',
      threshold: .5,
    }

    function callback(entries, observer) {
     alert("observed")
    }
    const observer = new IntersectionObserver(callback, options)
    observer.observe($video)*/