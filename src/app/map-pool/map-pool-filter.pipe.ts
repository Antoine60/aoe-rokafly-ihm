import {IMap} from './../model/map';
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'mapFilter'
})
export class MapFilterPipe implements PipeTransform {
    transform(value: IMap[], searchTerm: any = '') {
        if (!searchTerm.mapSearched) {
            return value;
        }
        console.log(searchTerm.poolMapsSelected);
        return value.filter((map: IMap) => {
            return this.filtreMap(map, searchTerm.mapSearched, searchTerm.poolMapsSelected);
        });

    }

    filtreMap(value: IMap, searchTerm: string, poolMapsSelected) {
        if (searchTerm) {
            return (value.name.includes(searchTerm));
        } else {
            return true;
        }
    }

}
