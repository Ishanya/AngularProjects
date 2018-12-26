import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'first'
})
export class FirstPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    var temp=value.split(' ');
    var result="";
    for(var i=0;i<temp.length-1;i++)
    {
      result+=temp[i].charAt(0)+". ";
    }
    result+=temp[temp.length-1];
    if(args.length==1)
    {
      if(args=="U")
      {
        result=result.toUpperCase();
      }
      else {
        result=result.toLowerCase();
      }
    }
    return result;
  }

}
