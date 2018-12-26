import { Component } from '@angular/core';
//import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder,Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private fb:FormBuilder){}
  // registrationForm=new FormGroup({
  //   userName:new FormControl('vishwas'),
  //   password:new FormControl(''),
  //   cnfpassword:new FormControl(''),
  //   address:new FormGroup({
  //     postalName:new FormControl(' '),
  //     city:new FormControl(' '),
  //     state:new FormControl(' ')
  //   })
  // });

    
  registrationForm=this.fb.group({
    userName:['',[Validators.required,Validators.minLength(4)]], 
    password:['',Validators.pattern('[A-Z]{7,}')],      
    cnfpassword:['',Validators.pattern('[A-Z]{7,}')],
    gender:['Male',Validators.required],
    address:this.fb.group({
      postalName:['',Validators.pattern('[0-9]{6}')], // ^\d{6}$....................
      city:['',Validators.pattern('[A-Za-z]{2,}')],
      state:['Rajasthan']
    })
  });
  
  

LoadApiData()
{
  this.registrationForm.setValue({
    userName:'Mittal',
    password:'ABC',
    cnfpassword:'ABC',
    address: {
      postalName:'123456',
      city:'Noida',
      state:'UP'
    }
  });
}

data(xyz)
{
  
 // alert(xyz.userName);
  alert(this.registrationForm.value.userName);
  alert(this.registrationForm.value.address.state);
  alert(this.registrationForm.value.gender);
}

}
