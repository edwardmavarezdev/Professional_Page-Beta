const project1 = document.getElementById("projectId1")
const contact = document.querySelector('#projectId1')

const options = {
    //root:,
    rootMargin: '0px',
    threshold: 1
  }

let observer = new IntersectionObserver(projectObserve1, options);

function projectObserve1(entries,options){
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0.9) {
      entry.target.classList.add('in-viewport');
      project1.className = "project1"
    } else {
      entry.target.classList.remove('in-viewport');
     
    }
  });
}
observer.observe(contact);

