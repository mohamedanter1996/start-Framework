import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
isClicked:boolean=false;
imageSourse:string="";
clickOnImage(event:any){
if(event.target.classList.contains("hover-layer")){
  
  this.imageSourse=event.target.previousSibling.firstElementChild.getAttribute("src");
  this.isClicked=true;

}
else if(event.target.localName=="i"){

 this.imageSourse=event.target.parentElement.previousSibling.firstElementChild.getAttribute("src");
 this.isClicked=true;
}
else if(event.target.classList.contains("item")){
this.imageSourse=event.target.firstElementChild.firstElementChild.getAttribute("src");
this.isClicked=true;
}

else if(event.target.classList.contains("img-layer")){
  this.imageSourse=event.target.firstElementChild.getAttribute("src");
  this.isClicked=true;
}
else if(event.target.classList.contains("img-modal-layer")){

 this.isClicked=false;
}
}
}
