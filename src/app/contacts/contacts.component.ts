import { Component} from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent  {
 
  inputNameValue:string="";
  inputAgeValue:number=0;
  inputEmailValue:string="";
  inputPasswordValue:string="";
 
 
  getInputValue(event:any){

if(event.target.id=="userName"){
this.inputNameValue=event.target.value;
}
else if(event.target.id=="userAge"){
this.inputAgeValue=event.target.value;
}
else if(event.target.id=="userEmail"){
this.inputEmailValue=event.target.value;
}
else if(event.target.id=="userPassword"){
this.inputPasswordValue=event.target.value;
}



  }



 
  
}
