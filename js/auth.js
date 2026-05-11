/* =========================================
   1.  (localStorage)
========================================= */
// btrg3 el users elly ma8zaneen f localStorage aw array fadya law mafeesh
function getUsers() {
    // bta5od el "users" mn localStorage w btconvertaha mn string le array
    return JSON.parse(localStorage.getItem("users")) || [];
}

// btkhzn el users f localStorage ba3d ma btconverthom le string
function saveUsers(users) {
    // lazem n3mel stringify 3ashan localStorage bys5azn text bs
    localStorage.setItem("users", JSON.stringify(users));
}

// btrg3 el user elly dakhel delwa2ty aw null law mafeesh 7ad dakhel)
function getCurrentUser() {
    // bta5od el "currentUser" mn localStorage w btconvertaha mn string le object
    return JSON.parse(localStorage.getItem("currentUser"));
}
/* =========================================
   2. SIGNUP
========================================= */
function signup() {
    const message = document.getElementById("message");
    // del message elly hayb2a feh el error aw el success message

    const userData = {
        // bnda5od el data mn el form w bn7otha f object
        // w trim 3ashan nshil el spaces elly 7ad y7otohom ghalat
        firstName: document.getElementById("firstName").value.trim(),
        lastName: document.getElementById("lastName").value.trim(),
        username: document.getElementById("signupUsername").value.trim(),
        email: document.getElementById("universityEmail").value.trim(), // w trim 3ashan nshil el spaces elly 7ad y7otohom ghalat
        password: document.getElementById("signupPassword").value
    };

    /*  Basic validation to ensure all fields are filled */
    if (Object.values(userData).some(v => v === "")) { // law fe ay 7aga fady, hayb2a fe error bs  de shmel all feild 3shan t7t kol wa7da leha el check bta3tha 
        message.innerText = "Please fill in all fields!";
        message.style.color = "#ff4d4d";
        return;
    }

    let users = getUsers(); // btrg3 el users elly ma8zaneen f localStorage 3ashan n-check 3alehom

    const isDuplicate = users.some(u =>
        u.username === userData.username || u.email === userData.email
    );
    // b-check 3ala el username w el email law mafeesh duplicate hayb2a false w ykml el signup, law fe duplicate hayb2a true w y3ml error message

    if (isDuplicate) {
        message.innerText = "Username or Email already exists!";
        message.style.color = "#ff4d4d";
        return;
    }

    users.push(userData);
    saveUsers(users);

    localStorage.setItem("currentUser", JSON.stringify(userData));

    message.innerText = "Account created successfully!";
    message.style.color = "#00ff9d";

    setTimeout(() => {
        window.location.href = "../dashboard/home.html";
    }, 1000); // b3d 1 second hay3ml redirect lel home page 
    // 3ashan yshoof el message awel ma y-create el account, w kaman 3ashan y7s bel success w y7s bel transition smoother ely 3amlnha .
}
const loginInputs = document.querySelectorAll('.form-input'); // b-select kol el inputs elly 3alehom class "form-input" 3ashan n-add 3alehom event listeners

loginInputs.forEach(input => {
    // lma yseb el input fady
    input.addEventListener('blur', () => {
        const errorSpan = document.getElementById(`${input.id}-error`);
        if (input.value.trim() === "") {
            input.classList.add('input-error');
            if (errorSpan) errorSpan.style.display = 'block';
        }
    });
    // hna bn-add event listener 3ala kol input, lma yseb el input (blur) w el input fady hayb2a fe error, w lma ybda2 y-ktb (input) hay-shel el error
    // n-shel el error lma ybda2 y-ktb
    input.addEventListener('input', () => {
        input.classList.remove('input-error');
        const errorSpan = document.getElementById(`${input.id}-error`);
        if (errorSpan) errorSpan.style.display = 'none';
    });
});

/* =========================================
   3. LOGIN
========================================= */

// nfs ek kalam ely fo2 bs b-check 3ala el username w el password law mafeesh user matching hayb2a fe error message,
//  law fe user matching hayb2a login successful w y-create session lel user da w y-redirect lel home page
function login() {
    const username = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value;
    const message = document.getElementById("message");

    const users = getUsers();

    const user = users.find(u =>
        u.username === username && u.password === password
    );

    if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));

        message.innerText = "Login successful!";
        message.style.color = "#00ff9d";

        setTimeout(() => {
            window.location.href = "../dashboard/home.html";
        }, 800);
    } else {
        message.innerText = "Invalid username or password!";
        message.style.color = "#ff4d4d";
    }
}

/* =========================================
   4. LOGOUT
========================================= */

document.getElementById('logoutBtn').addEventListener('click', function () {

    // 3ashan n-clear el session w el current user lma y-dos 3ala logout
    localStorage.clear();
    sessionStorage.clear();

    // w n-redirect lel introdiction page ba3d el logout

    alert("You have been logged out.");
    window.location.href = "/index.html";
});

/* =========================================
   5. LOAD PROFILE (El 7ta bta3t Kero f saf7a profile.html)
========================================= */
function loadProfilePage() {
    // btrg3 el data elly ma8zaneen f localStorage w bt7otha f el form fields 3ashan y2dr y3ml edit 3aleha 
    const user = getCurrentUser();
    if (!user) return;
    // hana ya kero 3mlna load lel profile page w 3mlna el form fields ma3ba2a b data el user elly ma8zaneen f localStorage
    // w kaman 3mlna display lel full name w username w email f el profile view 3ashan yshoofhom w y3rf en el data et7afz 3ala el profile bta3o.
    document.getElementById("firstName").value = user.firstName || "";
    document.getElementById("lastName").value = user.lastName || "";
    document.getElementById("userName").value = user.username || "";
    document.getElementById("email").value = user.email || "";
    document.getElementById("password").value = user.password || "";

    document.getElementById("fullName").innerText =
        user.firstName + " " + user.lastName;

    document.getElementById("username").innerText = user.username;
    document.getElementById("emailView").innerText = user.email;
}

/* =========================================
   6. SAVE PROFILE
========================================= */
function saveProfile() {
    // hana da dor kero 3ashan y-save el changes elly 3mlha f el profile, w kaman y-update el data elly ma8zaneen f localStorage 
    // 3ashan y2dr yshoof el changes lma y3ml load lel profile page tany
    let user = getCurrentUser();
    if (!user) return;

    user.firstName = document.getElementById("firstName").value;
    user.lastName = document.getElementById("lastName").value;
    user.username = document.getElementById("userName").value;
    user.email = document.getElementById("email").value;
    user.password = document.getElementById("password").value;

    // update current user
    localStorage.setItem("currentUser", JSON.stringify(user));

    // update users list
    let users = getUsers();
    const index = users.findIndex(u => u.email === user.email);
    if (index !== -1) {
        users[index] = user;
        saveUsers(users);
    }

    loadProfilePage();
    alert("Profile Updated successfully!");
}

/* =========================================
   7. DASHBOARD GREETING + PROTECTION
========================================= */

// hna b-check 3ala el user law mafeesh user y3ml redirect lel login page, w law fe user y-display el welcome message b esmo f el home page,
//  w kaman lma y-load el profile page y-load data el user f el form fields 
// 3ashan y2dr y3ml edit 3aleha w yshoof en el data et7afz 3ala el profile bta3o.
document.addEventListener("DOMContentLoaded", () => {
    const user = getCurrentUser();

    const welcomeSpan = document.querySelector("#home-loggedin h2 span"); // b-select el span elly feh esmo f el home page 3ashan n-display feh el welcome message b esmo

    if (user) {
        if (welcomeSpan) {
            welcomeSpan.innerText = user.firstName; // n-display el welcome message b esmo f el home page
        }

        // load profile  low mwgod
        if (document.getElementById("fullName")) {
            loadProfilePage();
        }

    } else {
        /* ana hana b7my el saf7at el protected zay dashboard w profile, law mafeesh user y3ml redirect lel login
        w kaman law 7ad 7awel y-access el dashboard aw profile page directly mn ghair login hayb2a fe redirect lel login page
        bs mlhash lzma dlw2ty lnan 3amlen navbar m8soso ll introduction page bs,
        fa law 7ad 7awel y-access el dashboard aw profile page directly mn ghair login hayb2a fe redirect lel login page*/
        if (window.location.href.includes("/dashboard/") ||
            window.location.href.includes("profile.html")) {
            window.location.href = "../auth/login.html";
        }
    }
});