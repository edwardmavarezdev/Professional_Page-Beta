//project selector

const project1 = document.querySelector('#projectId1')
const project2 = document.querySelector('#projectId2')
const project3 = document.querySelector('#projectId3')

//observer options

const options = {
    //root:,
    rootMargin: '-1px',
    threshold: 0.9
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

//switch hover elements with observer


function switchHover(number,onOff){

	let onLoad = document.querySelectorAll('#onLoad'+number);

	for(i=0;i<4;i++){onLoad[i].style=("z-index:"+onOff)}
}

for(l=1;l<4;l++){switchHover(l,-1)}

//observer project 1

let observer1 = new IntersectionObserver(projectObserve1, options);

function projectObserve1(entries,data){
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0.9) {
      entry.target.classList.add('in-viewport');
      project1.className = "projectAppear"
	setTimeout(() => { switchHover(1,0) }, 550);

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
      project2.className = "projectAppear";
	setTimeout(() => { switchHover(2,0) }, 550);

    } else {
      entry.target.classList.remove('in-viewport');
     
    }
  });
}
observer2.observe(project2);


//observer project 3

let observer3 = new IntersectionObserver(projectObserve3, options);

function projectObserve3(entries,data){
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0.9) {
      entry.target.classList.add('in-viewport');
      project3.className = "projectAppear";
	setTimeout(() => { switchHover(3,0) }, 550);
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

const optionsAbout = {
    //root:,
    rootMargin: '0px',
    threshold: 0.3
  }

const aboutBackground = document.querySelector(".about-background");
let aboutLetters = document.querySelector("#aboutLetters");
let boxup2 = document.querySelector(".boxup2");

let observerAboutLetters = new IntersectionObserver(projectObserveAboutLetters, optionsAbout);

function projectObserveAboutLetters(entries,data){
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0.3) {
	entry.target.classList.add('in-viewport');
	aboutLetters.id = "aboutLettersAppear";
	aboutLetters.className = "aboutLettersAppear";
	boxup2.id = "boxup2Reveal";
	    console.log(entry.intersetionRatio)
    } else {
      entry.target.classList.remove('in-viewport');
     
    }
  });
}

observerAboutLetters.observe(aboutBackground)

//observe contact

const contact_buttons = document.querySelector("#contact-professional_buttons");

let boxH2 = document.querySelector(".boxH2");
let contact_title = document.querySelector(".contact_title");

let observerContact = new IntersectionObserver(contactObserved,options);

function contactObserved(entries,data){
	entries.forEach(entry => {
		if (entry.intersectionRatio > 0.9) {
		entry.target.classList.add('in-viewport');
			boxH2.className="boxH2_observe"
			contact_title.className="contact_title-observe"
			contact_buttons.className="contact-professional_buttons--observe";
		} else {
		entry.target.classList.remove('inviewport');
		}
	});
}

observerContact.observe(contact_buttons);
