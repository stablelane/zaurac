const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links a');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.getElementById('container').classList.toggle('shadow')
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.getElementById('container').classList.remove('shadow')
        });
    });


// const enquiryFormBtn = document.getElementById('enquiry-form-btn')
// enquiryFormBtn.addEventListener('click',()=>{
//     document.getElementById('container').innerHTML = ''
//     document.getElementById('enquiry-form').classList.add('show')
//     console.log("hello")
// })