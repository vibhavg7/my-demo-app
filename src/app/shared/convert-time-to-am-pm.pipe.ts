import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertTimeToAmPm'
})
export class ConvertTimeToAmPmPipe implements PipeTransform {


  transform(value: any, ...args: any[]): any {
    let time1;
    if (value) {
      const arr1 = value.split(':');
      if (+arr1[0] / 12 >= 1) {
        if (arr1[1] > 0) {
          time1 = +arr1[0] % 12 + ':' + arr1[1] + 'PM';
        } else {
          time1 = +arr1[0] % 12 + 'PM';
        }
      } else {
        if (arr1[1] > 0) {
          time1 = +arr1[0] % 12 + ':' + arr1[1] + 'AM';
        } else {
          time1 = +arr1[0] % 12 + 'AM';
        }
      }
    }

    // console.log(time1);
    return time1;
  }

}
