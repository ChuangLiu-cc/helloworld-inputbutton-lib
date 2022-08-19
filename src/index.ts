
const form = document.querySelector('.hello-form') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    getHelloWorld();
})
 
const getHelloWorld =() => {
    let text: string = "Hello World";
    let helloEle = (document.getElementById("hello") as HTMLInputElement)
    helloEle.value = text;
    console.log("hello world");
}
