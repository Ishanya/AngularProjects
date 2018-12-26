import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';


describe('AppComponent', () => {
  let app:AppComponent;
  let  fixture:ComponentFixture<AppComponent>;

  beforeEach(async(() => {
  
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports:[FormsModule,ReactiveFormsModule],
      providers:[AppComponent,FormBuilder]
    });
     fixture = TestBed.createComponent(AppComponent);
     app = fixture.componentInstance;
  }));
 
  it('this is defined',()=>{
      expect(app).toBeDefined();
  });

  it("validator required",()=>{
    let errors = {};
    let itemname = app.registrationForm.controls['userName'];
    errors = itemname.errors || {};
    itemname.setValue("testy");
    expect(errors['required']).toBeTruthy();
    expect(errors['minlength']).toBeFalsy();
  });

  it("validator ",()=>{
    
    let itemname = app.registrationForm.controls['userName'];
   
   itemname.setValue("Ishanya");
    expect(itemname.valid).toBeTruthy();
  });

  it("validator address",()=>{
    
    let itemname = app.registrationForm.controls['address'];
   
   itemname.setValue({
     postalName:123456,
     city:"Noida",
     state:"UP"
     
   });
    expect(itemname.valid).toBeTruthy();
  });


  


  it('submitting a form validate a user', () => {
    expect(app.registrationForm.valid).toBeFalsy();
    app.registrationForm.controls['userName'].setValue("test@test.com");
    app.registrationForm.controls['password'].setValue(" ABCDEFGHIJKL");
    app.registrationForm.controls['cnfpassword'].setValue("ABCDEFGHIJKL");
    app.registrationForm.controls['address'].setValue({
      postalName:123456,
      city:"Noida",
      state:"UP"
    })

    expect(app.registrationForm.valid).toBeTruthy();
  });

});
