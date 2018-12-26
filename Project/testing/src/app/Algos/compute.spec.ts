import {issEven} from './compute';
 describe("compute",()=>{
     it("should return true if the number is even",()=>{
         const ans=issEven(4);
         expect(ans).toBe(true);
     });

     it("should return false if the number is odd",()=>{
        const ans=issEven(7);
        expect(ans).toBe(false);
    });

 });