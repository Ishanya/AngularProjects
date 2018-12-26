import { Cheers } from './cheers';
describe('Cheers',()=>{
      
    var arr=[];
    let com:Cheers;
    let drink:string;
    let vote:number;
    beforeEach(()=>{
      com=new Cheers(drink,vote);
    
    });
  
    it("Increment total vote count Up", () => {
      // Act
    com.vote=0;
      com.voteUp();
      // Assert
      expect(com.vote).toBe(1);
    });
  

    it("Increment total vote count Down", () => {
        // Act
      com.vote=0;
        com.voteDown();
        // Assert
        expect(com.vote).toBe(-1);
      });

  });