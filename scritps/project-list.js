const projectContainer = document.querySelector(".grid-container");

const projectList = [
    {
        title: "Guest book",
        github: "https://github.com/snikerslala/guest_book",
        img1: "./images/GuestBook-Entries.png",
        img2: "./images/GuestBook.png",
        desc: "Let your guests to leave comments and display the guest book entries.",
        tech: "HTML5, CSS3 and JavaScript based website",
    },
    {
        title: "Image Search",
        github: "https://github.com/snikerslala/image-search",
        img1: "./images/ImageSearch.png",
        img2: "./images/ImageSearch-1.png",
        desc: "Looking for a picture? Use this search engine!",
        tech: "JavaScript, React, unsplash API",
    },
    {
        title: "Dancing Robot",
        github: "https://github.com/snikerslala/60_dancing_robot",
        img1: "./images/DancingRobot.png",
        img2: "./images/DancingRobot-1.png",
        desc: "Check out how this robot can dance! You can do the same!",
        tech: "HTML5 and CSS3 based website",
    },
    {
        title: "Your to-do list",
        github: "https://github.com/snikerslala/js_todo_tasks",
        img1: "./images/ToDo.png",
        img2: "./images/ToDo-1.png",
        desc: "Add the tasks you have to do in the future, search and delete them and check which deadlines did you miss already.",
        tech: "HTML5, CSS3, JavaScript, LocalStorage API, JSON",
    },
    {
        title: "Robofriends",
        github: "https://github.com/snikerslala/robofriends",
        img1: "./images/Robofriends.png",
        img2: "./images/Robofriends-1.png",
        desc: "Display and search for Robofriends. <br>This app is build based on React.",
        tech: "React, Tachyons, Robo Hash API, JSONPlaceHolder API",
    },
];

const html = (elem) => {
    const { title, github, img1, img2, desc, tech } = elem;
    return ` <div class="project">
        <a href="${github}" target="_blank">
            <h2>${title}</h2>
            <img class="proj-img" src="${img1}" alt="project image">
            <p class="proj-desc">${desc}</p>
            <p class="proj-tech">Tech stack: <br>${tech}</p>
        </a>
    </div>`
};

for (project of projectList) {
    projectContainer.innerHTML += html(project);
};
