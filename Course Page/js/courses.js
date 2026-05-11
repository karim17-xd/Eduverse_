const user = JSON.parse(localStorage.getItem("eduverse_user")) || {
    name: "Alex Johnson",
    avatar: "imgs/pp.jpg"
};

document.querySelector(".user-name").textContent = user.name;
document.querySelector(".user-avatar").src = user.avatar; s

function sendWord(theWord) {
    localStorage.setItem('selectedCategory', theWord);
    window.location.href = 'receiver.html';
}


function displayWord() {
    const target = document.getElementById('display-area');
    if (target) {
        const word = localStorage.getItem('selectedCategory');
        if (word) {
            target.textContent = word;
        }
    }
}


window.onload = displayWord;

const btn = document.getElementById('myButton');

btn.addEventListener('click', () => {
    window.location.href = 'start-course.html';
});

// f sf7et el courses el aslya (el library)
document.addEventListener('DOMContentLoaded', () => {
    const courseCards = document.querySelectorAll('.course-card');

    courseCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // bangeeb el esm mn el h2 elly gowa el card
            const courseTitle = card.querySelector('h2').innerText;

            // bn5zn el esm 3shan el sf7at el tanya tshofoh
            localStorage.setItem('selectedCourse', courseTitle);

            // bnrou7 l sf7et el info (el intermediate page)
            // t2kd mn el msar (path) eno sa7 3ndk
            window.location.href = "../Pages/courses/start-course.html";
        });
    });
});