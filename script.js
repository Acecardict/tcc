
const parentService_card = document.querySelector('.service_card');

parentService_card.addEventListener('click', event=>{

     const current = event.target;

     const isReadMoreBtn = current.className.includes('read-more-btn');

     if(!isReadMoreBtn) return;

     const currentText = event.target.parentNode.querySelector('.read-more-text');

currentText.classList.toggle('read-more-text--show')

current.textContent = current.textContent.includes('Read More') ?
" Psychotherapy is the use of psychological methods, particularly when based on personal interaction, to help a person change behavior, increase happiness, and overcome problems." : "Read More...";

})


function sendEmail(){
 Email.send({
    Host : "smtp.gmail.com",
    Username : "acekick03@gmail.com",
    Password : "Shallom777",
    To : 'acekick02@gmail.com',
    From : documeny.getElementryById("email").value,
    Subject : "New contact form",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}
