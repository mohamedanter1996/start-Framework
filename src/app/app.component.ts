import { Component,VERSION,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'startFramework';
  name = 'Angular ' + VERSION.major;
  scrollValue:number=0;
   
  ngOnInit() {
    window.addEventListener('scroll', this.scrollEvent, true);
  }
  
  ngOnDestroy() {
    window.removeEventListener('scroll', this.scrollEvent, true);
  }
   
  scrollEvent = (event:any): void => {
    this.scrollValue = event.target.scrollingElement.scrollTop;
    console.log( this.scrollValue);
  }

}
