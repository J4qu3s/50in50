const buttons = document.querySelectorAll('.faq-toggle');

function showFaq() {

}

buttons.forEach((btn) => {
    btn.addEventListener('click', function(){
        btn.parentNode.classList.toggle('active');
        console.log("Whaat?")
    });
})