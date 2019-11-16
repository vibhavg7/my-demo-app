import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'upperCaseName'
})
export class UpperCaseName implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        let val = value.toLowerCase()
            .split(' ')
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ');
        return val;
    }
}