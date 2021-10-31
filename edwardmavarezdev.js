//project selector

const project1 = document.querySelector('#projectId1')
const project2 = document.querySelector('#projectId2')
const project3 = document.querySelector('#projectId3')

//observer options

const options = {
    //root:,
    rootMargin: '0px',
    threshold: 1
  }

// observer presentation

const presentationPicture = document.querySelector('#personalPicture')
const textPresent = document.querySelector('#presentation')

let observePresentation = new IntersectionObserver(observerEntry, options)

function observerEntry(entries,data){
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0.9) {
      entry.target.classList.add('in-viewport');
      presentationPicture.className = "personalPictureAppear"
      textPresent.className = "presentationAppear"

    } else {
      entry.target.classList.remove('in-viewport');
     
    }
  });
}

observePresentation.observe(presentation);

//observer project 1

let observer1 = new IntersectionObserver(projectObserve1, options);

function projectObserve1(entries,data){
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0.9) {
      entry.target.classList.add('in-viewport');
      project1.className = "projectAppear"
    } else {
      entry.target.classList.remove('in-viewport');
     
    }
  });
}
observer1.observe(project1);


// //observer priject 2

// let observer2 = new IntersectionObserver(projectObserve2, options);

// function projectObserve2(entries,data){
//   entries.forEach(entry => {
//     if (entry.intersectionRatio > 0.9) {
//       entry.target.classList.add('in-viewport');
//       project2.className = "projectAppear"
//     } else {
//       entry.target.classList.remove('in-viewport');
     
//     }
//   });
// }
// observer2.observe(project2);


// //observer priject 3

// let observer3 = new IntersectionObserver(projectObserve3, options);

// function projectObserve3(entries,data){
//   entries.forEach(entry => {
//     if (entry.intersectionRatio > 0.9) {
//       entry.target.classList.add('in-viewport');
//       project3.className = "projectAppear"
//     } else {
//       entry.target.classList.remove('in-viewport');
     
//     }
//   });
// }
// observer3.observe(project3);
