const home = document.querySelector(".home");
const about = document.querySelector(".about");
const projects = document.querySelector(".projects");
const contact = document.querySelector(".contact");
const navi = document.querySelector(".navi");
const naviList = document.querySelector(".navi-list");

/****** SHOW/HIDE SITE SECTIONS *******/

function showHide(e) {
  const noDisplay = (...hides) => {
    let hideMe = elem => elem.classList.add("no-display");
    for (let hide of hides) hideMe(hide);
  };

  const visible = (...shows) => {
    for (show of shows) {
      if (show.classList.contains("no-display")) {
        show.classList.remove("no-display");
      }
      if (show.classList.contains("hidden")) {
        show.classList.remove("hidden");
      }
    }
  };

  let targetClass = e.target.classList.value;
  let linkPos = targetClass.indexOf("link");
  let spacePos = targetClass.indexOf(" ", linkPos);

  let searchClass =
    spacePos == -1
      ? targetClass.slice(linkPos, targetClass.length)
      : targetClass.slice(linkPos, spacePos);

  switch (searchClass) {
    case "link-home":
      visible(home);
      noDisplay(navi, about, projects, contact);
      naviList.classList.toggle("no-display");
      break;
    case "link-about":
      visible(about, navi);
      noDisplay(projects, contact, home);
      naviList.classList.toggle("no-display");
      break;
    case "link-projects":
      visible(projects, navi);
      noDisplay(about, contact, home);
      naviList.classList.toggle("no-display");
      break;
    case "link-contact":
      visible(contact, navi);
      noDisplay(about, projects, home);
      naviList.classList.toggle("no-display");
      break;
  }
}

navi.addEventListener("click", function(e) {
  if (e.target.classList.contains("bars")) {
    naviList.classList.toggle("no-display");
  }
  if (e.target.parentElement.classList.contains("navi-list")) {
    showHide(e);
  }
});

home.querySelector(".home-links").addEventListener("click", function(e) {
  showHide(e);
  naviList.classList.add("no-display");
});

// function showHide(e) {
//     const visible = (show, ...hides) => {
//         let hideMe = elem => elem.classList.add('no-display');
//         if (show.classList.contains('no-display')) {
//             show.classList.remove('no-display');
//         }
//         for (let hide of hides) hideMe(hide);
//     };

//     let targetClass = e.target.classList.value;
//     let linkPos = targetClass.indexOf("link");
//     let spacePos = targetClass.indexOf(" ", linkPos);

//     let searchClass = ((spacePos == -1)
//         ? targetClass.slice(linkPos,targetClass.length)
//         : targetClass.slice(linkPos,spacePos)
//     );

//     switch (searchClass) {
//         case 'link-home':
//             visible(home, about, projects, contact); break;
//         case 'link-about':
//             visible(about, projects, contact, home); break;
//         case 'link-projects':
//             visible(projects, about, contact, home); break;
//         case 'link-contact':
//             visible(contact, about, projects, home); break;
//     };
// };
