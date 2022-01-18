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
      presentationPicture.id = "personalPictureAppear"
      textPresent.className = "presentationAppear"
      setTimeout(() => { presentationPicture.id = "personalPictureAppearHover" }, 1100);
      
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


//observer priject 2

let observer2 = new IntersectionObserver(projectObserve2, options);

function projectObserve2(entries,data){
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0.9) {
      entry.target.classList.add('in-viewport');
      project2.className = "projectAppear"
    } else {
      entry.target.classList.remove('in-viewport');
     
    }
  });
}
observer2.observe(project2);


//observer priject 3

let observer3 = new IntersectionObserver(projectObserve3, options);

function projectObserve3(entries,data){
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0.9) {
      entry.target.classList.add('in-viewport');
      project3.className = "projectAppear"
    } else {
      entry.target.classList.remove('in-viewport');
     
    }
  });
}
observer3.observe(project3);


console.log("Hello");
setTimeout(() => { console.log("World!"); }, 2000);
console.log("Goodbye!");


//observe aboutLetters

const aboutLetters = document.querySelector("#aboutLetters");
let boxup2 = document.querySelector(".boxup2");

let observerAboutLetters = new IntersectionObserver(projectObserveAboutLetters, options);

function projectObserveAboutLetters(entries,data){
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0.9) {
	entry.target.classList.add('in-viewport');
	aboutLetters.id = "aboutLettersAppear";
	aboutLetters.className = "aboutLettersAppear";
	boxup2.id = "boxup2Reveal";
   
    } else {
      entry.target.classList.remove('in-viewport');
     
    }
  });
}

observerAboutLetters.observe(aboutLetters)


//observe aboutDescription

let aboutDescription = document.querySelector("#aboutDescription")
let boxup4 = document.querySelector(".boxup4")

let observerAboutDescription = new IntersectionObserver(projectObserveAboutDescription, options);

function projectObserveAboutDescription(entries,data){
  entries.forEach(entry => {
	  
    if (entry.intersectionRatio > 0.9) {
	entry.target.classList.add('in-viewport');
	aboutDescription.className = "aboutDescriptionAppear";
	aboutDescription.id = "aboutDescriptionAppear";
	boxup4.id = "boxup4Reveal"
    } else {
      entry.target.classList.remove('in-viewport');
     
    }
  });
}

observerAboutDescription.observe(aboutDescription)
