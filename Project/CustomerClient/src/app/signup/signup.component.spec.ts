import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComponent } from './signup.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Register } from '../register';
import { ProfileBeanA } from '../profile-bean-a';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule,HttpClientModule,HttpModule],
      declarations: [ SignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('submitting a form emits a user', () => {
    expect(component.model).toBeNull;
    component.model.emailID="test@test.com";
    component.model.password="123456789";
    component.model.pincode="123456";
    component.model.street="XYZSTREET";
    component.model.gender="male";
    component.model.mobileNo="9876543210";
    component.model.location="XYZLOCATION";
  
  
    let user: ProfileBeanA;
      // Subscribe to the Observable and store the user in a local variable.
      component.initSignup();            //requestSignUp(model).subscribe((value) => {this.user = value});
  
      // Trigger the login function
  
      // Now we can check to make sure the emitted value is correct
      expect(user.emailID).toBe("test@test.com");
      expect(user.password).toBe("123456789");
  
  });



});
