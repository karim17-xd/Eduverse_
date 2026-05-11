
// ana karim w h zabt el 7ta de l kero ya gama3a 3ashan ybadel ben el lessons
//  w kaman y5ly el video ytbda2 lma el user ydoos 3la el play button

let currentId = 'kUMe1FH4CHE'; // default video id

function changeLesson(id, title, meta, el) {
    currentId = id; // update current video id
    document.getElementById('mainTitle').innerText = title; // update lesson title
    document.getElementById('lessonMeta').innerText = ` ${meta}`; // update lesson meta (duration + difficulty)

    // active state for lesson
    document.querySelectorAll('.lesson-row').forEach(r => r.classList.remove('active'));
    el.classList.add('active'); // add active class to the clicked lesson

    // reset video
    // lma ybadel el lesson, el video yt3ada2 w el cover yb2a mawgod 3ashan y5ly el user ydoos 3la play button tany
    const cover = document.getElementById('videoCover');
    const iframe = document.getElementById('videoIframe');
    iframe.src = "";
    cover.style.display = 'flex';
    cover.style.backgroundImage = `url('https://img.youtube.com/vi/${id}/maxresdefault.jpg')`;
}

/**
 * bna2olak hna el function da bt5ly el video ytbda2 lma el user ydoos 3la el play button w kaman by5ly el cover y5fa
 */
function startVideo() {
    const cover = document.getElementById('videoCover');
    const iframe = document.getElementById('videoIframe');
    iframe.src = `https://www.youtube.com/embed/${currentId}?autoplay=1`;
    cover.style.display = 'none';
}

/**
    * hna el function da bt5ly el user ybadel ben el resources w el lesson content
 */
function switchTab(type, event) {
    const content = document.getElementById('tabContent');

    // law el tab elly el user da3 3aleha hya "res" (resources)
    if (type === 'res') {
        // byn2l content el resources (links el mawad el ta3lemya)
        content.innerHTML = `
        <h4 style="margin-bottom:10px">Learning Materials:</h4>
        <ul style="color: var(--text-dim); margin-left: 20px; line-height: 2;">
            // link le w3schools
            <li><a href="https://www.w3schools.com/html/" target="_blank" style="color:var(--accent-green)">W3Schools HTML Documentation</a></li> 
            // link le MDN (documentation rasmeya)
            <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" style="color:var(--accent-green)">MDN Web Docs</a></li>
        </ul>`;

        // law el type mesh "res" (ya3ne hya "lesson" masalan)
    } else {
        // byn2l content el lesson el 3adeya 
        content.innerHTML = `
        <p style="color: var(--text-dim); line-height: 1.6;">
            In this lesson, you will learn the core foundations of Web Development. We'll start by understanding how HTML structures the web.
        </p>`;
    }

    // byshe'l 3ala kol el tabs wy-remove el class "active" menhom kolohom
    document.querySelectorAll('.tab-item').forEach(t => t.classList.remove('active'));

    // by-add el class "active" 3ala el tab elly el user da3 3aleha bs
    event.currentTarget.classList.add('active');
}
