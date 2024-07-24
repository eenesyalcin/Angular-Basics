import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fruit',
  standalone: true
})
export class FruitPipe implements PipeTransform {

  transform(value: string[], search: string): string[] {
    if (!search) {
      return value.map((val)=> "Meyve ---> " + val);
    }else{
      return value.filter(p=> p.includes(search)).map((val)=> "Meyve ---> " + val);
    }
  }

}
