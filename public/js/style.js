const fadeInElements=document.querySelectorAll(".fadeIn");
window.addEventListener("load", ()=>{
	for(let element of fadeInElements){
		setTimeout(()=>{
			element.classList.add('activeFadeIn');
		},element.getAttribute("data-load-time"));
	}
});
