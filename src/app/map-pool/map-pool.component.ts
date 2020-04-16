import {Component, Input, OnInit} from '@angular/core';
import {MapPoolService} from './map-pool.service';
import {ILobby} from "../model/lobby";
import {IMap} from "../model/map";

@Component({
    selector: 'app-map-pool',
    templateUrl: './map-pool.component.html',
    styleUrls: ['./map-pool.component.css'],
    providers: [MapPoolService]
})
export class MapPoolComponent implements OnInit {
    mapPool: true;
    poolMapsSelected = [];
    poolMaps = [];
    matchGenerated = [];
    errors = [];
    mapSearched: string;

    constructor(private mapPoolService: MapPoolService) {
        this.mapPool = true;
    }

    ngOnInit(): void {
        this.showMaps();
    }

    /**
     * Sélectionne la map depuis le pool
     * @param indexMapSelected
     */
    selectMap(indexMapSelected) {
        let index = this.poolMaps.findIndex(res => indexMapSelected === res.id);
        this.poolMapsSelected.push(this.poolMaps[index]);
        this.poolMaps.splice(index, 1);
    }

    /**
     * Retire la map du pool
     * @param indexMapSelected
     */
    removeMapFromPool(indexMapSelected) {
        let index = this.poolMapsSelected.findIndex(res => indexMapSelected === res.id);
        this.poolMaps.push(this.poolMapsSelected[index]);
        this.poolMapsSelected.splice(index, 1);
    }

    isPoolFill() {
        return (this.poolMapsSelected.length > 0);
    }

    /**
     * Génération du match à partir du nombre de rounds voulu
     * @param numberRounds
     */
    generateMatch(numberRounds) {
        let numberRoundsLeft: number;
        this.errors = [];

        //Si jamais il y a plus de rounds que de maps dans le map-pool
        //on affiche une erreur
        if (numberRounds > this.poolMapsSelected.length) {
            this.errors.push('There is more rounds than maps in map pool.');
            return;
        }
        numberRoundsLeft = numberRounds;
        while (numberRoundsLeft >= 1) {
            const randomIndexSelected = Math.floor(Math.random() * (this.poolMapsSelected.length));
            if (this.matchGenerated.indexOf(this.poolMapsSelected[randomIndexSelected]) === -1) {
                this.matchGenerated.push(this.poolMapsSelected[randomIndexSelected]);
                numberRoundsLeft--;
            }
        }
    }

    isMatchGenerated() {
        return this.matchGenerated.length > 0;
    }

    resetMatchGenerated() {
        this.matchGenerated = [];
    }

    /**
     * Affiche l'ensemble des cartes du pool
     */
    showMaps(): void {
        //todo récupérer l'ensemble des maps depuis le micro service
        // this.mapPoolService.getAllMaps().subscribe(maps => this.poolMaps = maps);
        this.mapPoolService.getAllMaps().subscribe(
            (res) => {
                this.poolMaps = res;
            },
            (err) => {
                console.error(err.status);
            }
        );
    }


    searchMap(searchName: string) {
        this.mapPoolService.getAllMaps().subscribe(
            (res) => {
                this.poolMaps = res.filter(
                    (map: IMap) => map.name === searchName
                );
            },
            (err) => {
                console.error(err.status);
            }
        );
    }
}
