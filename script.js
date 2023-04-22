setInterval(function() {
    var image = document.getElementById('myImage');
    var timestamp = new Date().getTime();
    image.src = "https://drive.google.com/uc?export=view&id=1-UDwRUB7rhsgYXenpIu18kjqmJpbIy5i?time=" + timestamp;
}, 20000);
