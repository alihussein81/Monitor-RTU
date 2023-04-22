setInterval(function() {
    var image = document.getElementById('myImage');
    var timestamp = new Date().getTime();
    image.src = "https://drive.google.com/file/d/1-e24K9vZs_6Wm0ckWQwElA6mVFVOc43R/view?usp=sharing" + timestamp;
}, 20000);
