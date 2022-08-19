var form = document.querySelector('.hello-form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    getHelloWorld();
});
var getHelloWorld = function () {
    var text = "Hello World";
    var helloEle = document.getElementById("hello");
    helloEle.value = text;
    console.log("hello world");
};
