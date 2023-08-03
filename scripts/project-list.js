const projectContainer = document.querySelector('.grid-container');

const projectList = [
  {
    title: 'Your to-do list',
    github: 'https://martynaskup.github.io/js_todo_tasks/',
    img1: './images/ToDo.png',
    desc:
      'Add the tasks you have to do in the future, search and delete them and check which deadlines did you miss already.',
    tech: 'JavaScript, LocalStorage API, <br>JSON, HTML5, CSS3'
  },
  {
    title: 'Guest book',
    github: 'https://martynaskup.github.io/guest_book/',
    img1: './images/GuestBook-Entries.png',
    desc:
      'Let your guests to leave comments and display the guest book entries.',
    tech: 'JavaScript, Firebase, HTML5, CSS3'
  },
  {
    title: 'Image Search',
    github: 'https://martynaskup.github.io/image-search/',
    img1: './images/ImageSearch.png',
    desc: 'Looking for a picture? Use this search engine!',
    tech: 'React, JavaScript, unsplash API'
  },
  {
    title: 'Dancing Robot',
    github: 'https://martynaskup.github.io/60_dancing_robot/',
    img1: './images/DancingRobot.png',
    desc: 'Check out how this robot can dance! You can do the same!',
    tech: 'HTML5, CSS3'
  },
  {
    title: 'Friendscards',
    github: 'https://martynaskup.github.io/friendscards/',
    img1: './images/Friendscards.png',
    desc: 'Search for your Cat Friends<br>and view their contact information.',
    tech:
      'React, Tachyons, JSONPlaceHolder API, Robohash Image Generator API'
  },
  {
    title: 'Background Generator',
    github: 'https://martynaskup.github.io/background_generator/',
    img1: './images/BackgroundGenerator.png',
    desc:
      'Generate a gradient background code based on random colors or colors chosen by you!',
    tech: 'CSS3, JavaScript'
  }
];

const html = elem => {
  const { title, github, img1, desc, tech } = elem;
  return ` <div class="project">
        <a href="${github}" target="_blank">
            <h2>${title}</h2>
            <img class="proj-img" src="${img1}" alt="project image">
            <p class="proj-desc">${desc}</p>
            <p class="proj-tech">Tech stack: <br>${tech}</p>
        </a>
    </div>`;
};

for (project of projectList) {
  projectContainer.innerHTML += html(project);
}
