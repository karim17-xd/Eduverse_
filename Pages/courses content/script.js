let currentId = 'rfscVS0vtbw';


const coursesData = {

    cpp: {
        id: "rfscVS0vtbw",
        title: "C++ Full Course",
        meta: "Programming • C++",
        link: "https://youtu.be/rfscVS0vtbw",

        resources: `
            <li><a href="https://cplusplus.com/" target="_blank">C++ Docs</a></li>
            <li><a href="https://www.learncpp.com/" target="_blank">Learn C++</a></li>
            <li><a href="https://youtu.be/rfscVS0vtbw" target="_blank">Watch Course</a></li>
        `
    },

    java: {
        id: "zOjov-2OZ0E",
        title: "Java Full Course",
        meta: "Programming • Java",
        link: "https://youtu.be/zOjov-2OZ0E",

        resources: `
            <li><a href="https://www.oracle.com/java/" target="_blank">Java Oracle</a></li>
            <li><a href="https://www.w3schools.com/java/" target="_blank">Java W3Schools</a></li>
            <li><a href="https://youtu.be/zOjov-2OZ0E" target="_blank">Watch Course</a></li>
        `
    },

    python: {
        id: "XKHEtdqhLK8",
        title: "Python Full Course",
        meta: "Programming • Python",
        link: "https://youtu.be/XKHEtdqhLK8",

        resources: `
            <li><a href="https://python.org/" target="_blank">Python Official</a></li>
            <li><a href="https://www.w3schools.com/python/" target="_blank">Python W3Schools</a></li>
            <li><a href="https://youtu.be/XKHEtdqhLK8" target="_blank">Watch Course</a></li>
        `
    },

    frontend: {
        id: "916GWv2Qs08",
        title: "Front End Developer",
        meta: "Front End Development",
        link: "https://youtu.be/916GWv2Qs08",

        resources: `
            <li><a href="https://developer.mozilla.org/" target="_blank">MDN Docs</a></li>
            <li><a href="https://www.w3schools.com/" target="_blank">W3Schools</a></li>
            <li><a href="https://youtu.be/916GWv2Qs08" target="_blank">Watch Course</a></li>
        `
    },

    backend: {
        id: "nu_pCVPKzTk",
        title: "Back End Developer",
        meta: "Back End Development",
        link: "https://youtu.be/nu_pCVPKzTk",

        resources: `
            <li><a href="https://nodejs.org/" target="_blank">NodeJS</a></li>
            <li><a href="https://expressjs.com/" target="_blank">ExpressJS</a></li>
            <li><a href="https://youtu.be/nu_pCVPKzTk" target="_blank">Watch Course</a></li>
        `
    },

    fullstack: {
        id: "nu_pCVPKzTk",
        title: "Full Stack Development",
        meta: "Full Stack Development",
        link: "https://youtu.be/nu_pCVPKzTk",

        resources: `
            <li><a href="https://developer.mozilla.org/" target="_blank">Frontend Docs</a></li>
            <li><a href="https://nodejs.org/" target="_blank">Backend Docs</a></li>
            <li><a href="https://youtu.be/nu_pCVPKzTk" target="_blank">Watch Course</a></li>
        `
    },

    ui: {
        id: "c9Wg6Cb_YlU",
        title: "Advanced UI Design",
        meta: "UI / UX Design",
        link: "https://youtu.be/c9Wg6Cb_YlU",

        resources: `
            <li><a href="https://figma.com/" target="_blank">Figma</a></li>
            <li><a href="https://dribbble.com/" target="_blank">Dribbble</a></li>
            <li><a href="https://youtu.be/c9Wg6Cb_YlU" target="_blank">Watch Course</a></li>
        `
    },

    cyber: {
        id: "3Kq1MIfTWCE",
        title: "Cyber Security Course",
        meta: "Cyber Security",
        link: "https://youtu.be/3Kq1MIfTWCE",

        resources: `
            <li><a href="https://owasp.org/" target="_blank">OWASP</a></li>
            <li><a href="https://tryhackme.com/" target="_blank">TryHackMe</a></li>
            <li><a href="https://youtu.be/3Kq1MIfTWCE" target="_blank">Watch Course</a></li>
        `
    },

    ml: {
        id: "GwIo3gDZCVQ",
        title: "Machine Learning Course",
        meta: "Machine Learning",
        link: "https://youtu.be/GwIo3gDZCVQ",

        resources: `
            <li><a href="https://scikit-learn.org/" target="_blank">Scikit Learn</a></li>
            <li><a href="https://tensorflow.org/" target="_blank">TensorFlow</a></li>
            <li><a href="https://youtu.be/GwIo3gDZCVQ" target="_blank">Watch Course</a></li>
        `
    },

    database: {
        id: "HXV3zeQKqGY",
        title: "Database Course",
        meta: "Database Systems",
        link: "https://youtu.be/HXV3zeQKqGY",

        resources: `
            <li><a href="https://mysql.com/" target="_blank">MySQL</a></li>
            <li><a href="https://postgresql.org/" target="_blank">PostgreSQL</a></li>
            <li><a href="https://youtu.be/HXV3zeQKqGY" target="_blank">Watch Course</a></li>
        `
    },

    cloud: {
        id: "2LaAJq1lB1Q",
        title: "Cloud Computing",
        meta: "Cloud Engineering",
        link: "https://youtu.be/2LaAJq1lB1Q",

        resources: `
            <li><a href="https://aws.amazon.com/" target="_blank">AWS</a></li>
            <li><a href="https://cloud.google.com/" target="_blank">Google Cloud</a></li>
            <li><a href="https://youtu.be/2LaAJq1lB1Q" target="_blank">Watch Course</a></li>
        `
    },

    ai: {
        id: "aircAruvnKk",
        title: "AI Engineering",
        meta: "Artificial Intelligence",
        link: "https://youtu.be/aircAruvnKk",

        resources: `
            <li><a href="https://openai.com/" target="_blank">OpenAI</a></li>
            <li><a href="https://huggingface.co/" target="_blank">HuggingFace</a></li>
            <li><a href="https://youtu.be/aircAruvnKk" target="_blank">Watch Course</a></li>
        `
    }

};

// bn-esta5dem el data structure elly f fo2 3shan a3ml dynamic content loading

function changeLesson(courseKey, el) {

    const course = coursesData[courseKey];

    currentId = course.id;

    document.getElementById('mainTitle').innerText =
        course.title;

    document.getElementById('lessonMeta').innerText =
        ` ${course.meta}`;

    document.getElementById('courseBtn').href =
        course.link;

    document.querySelectorAll('.lesson-row').forEach(row => {
        row.classList.remove('active');
    });

    el.classList.add('active');

    const cover = document.getElementById('videoCover');

    const iframe = document.getElementById('videoIframe');

    iframe.src = "";

    cover.style.display = 'flex';

    cover.style.backgroundImage =
        `url('https://img.youtube.com/vi/${course.id}/maxresdefault.jpg')`;

    document.getElementById('resourcesList').innerHTML =
        course.resources;
}
// bn-esta5dem el data structure elly f fo2 3shan a3ml dynamic content loading


// play video on click
function startVideo() {

    document.getElementById('videoIframe').src =
        `https://www.youtube.com/embed/${currentId}?autoplay=1`;

    document.getElementById('videoCover').style.display =
        'none';
}