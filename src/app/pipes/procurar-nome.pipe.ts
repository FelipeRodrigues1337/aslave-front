import { Pipe, PipeTransform } from '@angular/core';
import { IStockInput } from '../../domain/IStockInput';

@Pipe({
  name: 'searcher'
})
export class ProcurarNomePipe implements PipeTransform {

  transform(items: IStockInput[], procuraNome: string): IStockInput[] {

    if(!items) return[];
    if(!procuraNome) return items;

    procuraNome = procuraNome.toLowerCase();

    return items.filter( it => {
      return it.name.toLocaleLowerCase().includes(procuraNome);
    })
  }

}
