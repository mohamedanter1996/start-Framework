import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
navScrollYValue:number=0;
@Input() scrollNavValue:number=0;
getWindowScrollYValue(event:any){
  this.navScrollYValue=window.scrollY;
  console.log(this.navScrollYValue);
}
}
