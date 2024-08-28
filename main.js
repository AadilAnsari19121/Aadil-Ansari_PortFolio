
// for sticky toggle
var hdr=document.getElementById("navbar");
window.addEventListener('scroll',()=>{
    hdr.classList.toggle("sticky",window.scrollY>100);
})


// nvbar animation
var navlinks=document.querySelectorAll('.its_nav_link');
var selected_sec=document.querySelectorAll('.section');
var about_me_dis=document.getElementById('aboutme_nav');
var about_me_img=document.getElementById("hidden_img_abou_me");

function display_the_about_me(){
    // transition: 1s ease-in-out;
    about_me_dis.style.display="block";
    about_me_dis.style.animation="slide-left 3s ease-in-out;";
    about_me_img.classList.add("displaying_img");
}

// let currentsection='about_me_main_container';
// window.addEventListener('scroll',()=>{
//     selected_sec.forEach(sectionEl=>{
//         if(window.screenY>=sectionEl.offsetTop-132){
//             currentsection=sectionEl.id;
//             console.log(currentsection);
//         }
//     });

    
//     navlinks.forEach(navlinkEl=>{
//         if(navlinkEl.href.includes(currentsection)){
//             navlinkEl.classList.add('active');
//         }
//     })
// });
let len=0;
function activeSec(){
    len=selected_sec.length;
    while(--len && window.scrollY + 132 < selected_sec[len].offsetTop){}
    navlinks.forEach(ltx => ltx.classList.remove("active"));
    navlinks[len].classList.add("active");
	

    if(navlinks[len].innerHTML!="About Me"){
        display_the_about_me();
    }
    else{
        about_me_dis.style.display="none";
        about_me_img.classList.remove("displaying_img");
    }

}
activeSec();
window.addEventListener("scroll",activeSec);


// profasion animation

const typingAnimationElement = document.getElementById('profession_my');

						// Create an array of typing text
						const typingTexts = [
						'FrontEnd Devloper  ',
						'Android Developer  '
						];

						// Create a function to display the typing animation for a given text
						function playTypingAnimation(text) {
						// Loop through each character and add it to the element
						for (let i = 0; i < text.length; i++) {
							setTimeout(() => {
							typingAnimationElement.textContent += text[i];
							}, i * 150); // Increase the delay to slow down the typing animation
						}

						// Once the animation is complete, reset the text and start over
						setTimeout(() => {
							typingAnimationElement.textContent = '';
							playTypingAnimation(typingTexts[(typingTexts.indexOf(text) + 1) % typingTexts.length]);
						}, text.length * 200);
						}

						// Start the typing animation loop
						playTypingAnimation(typingTexts[0]);
