import API from './api';

class App{
	constructor(){
		this.formEl=document.querySelector(".form");
		this.inputs=document.querySelectorAll("input");
		this.loadGif=document.querySelector("#loadGif");
		this.modalImage=$("#modalImage");
		this.imgGenerated=document.querySelector("#imgGenerated");
		this.registerHandlers();
	}
	registerHandlers(){
		this.formEl.addEventListener("submit", event => this.searchImage(event));
		this.imgGenerated.addEventListener("load", () => this.setLoading(false));
	}
	searchImage(event){
		event.preventDefault();
		let url=this.createUrl();
		this.setInfo(url);
	}
	setInfo(url){
		this.setLoading();
		this.imgGenerated.src=url;
		this.modalImage.modal('show');
	}
	setLoading(loading=true){
		if(loading){
			this.imgGenerated.classList.remove('d-block');
			this.loadGif.classList.add('d-block');
		}else{
			this.loadGif.classList.remove('d-block');
			this.imgGenerated.classList.add('d-block');
		}
	}
	createUrl(){
		let width=this.inputs[0].value;
		let height=this.inputs[1].value;
		let isGrayscale=this.inputs[2].checked;
		let isBlur=this.inputs[3].checked;
		let url=`${width}/${height}`;
		if(isGrayscale===true)
			url="g/"+url;
		if(isBlur===true)
			url+="?blur";
		console.log(url);
		return API+url;
	}
	render(){

	}
}

new App();