import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-map-pool',
    templateUrl: './map-pool.component.html',
    styleUrls: ['./map-pool.component.css']
})
export class MapPoolComponent implements OnInit {
    mapPool: true;
    poolMapsSelected = [];
    poolMaps = [
        'cm_canals.png',
        'cm_capricious.png',
        'cm_dingos.png',
        'cm_generic.png',
        'cm_graveyards.png',
        'cm_metropolis.png',
        'cm_moats.png',
        'cm_paradise-island.png',
        'cm_pilgrims.png',
        'cm_prairie.png',
        'cm_seasons.png',
        'cm_sherwood-forest.png',
        'cm_sherwood-heroes.png',
        'cm_shipwreck.png',
        'cm_team-glaciers.png',
        'cm_the-unknown.png',
        'rm_acropolis.png',
        'rm_alpine-lakes.png',
        'rm_arabia.png',
        'rm_archipelago.png',
        'rm_arena.png',
        'rm_baltic.png',
        'rm_black-forest.png',
        'rm_blind_random.png',
        'rm_bog-islands.png',
        'rm_bogland.png',
        'rm_budapest.png',
        'rm_cenotes.png',
        'rm_city-of-lakes.png',
        'rm_coastal.png',
        'rm_continental.png',
        'rm_crater-lake.png',
        'rm_ctr_monsoon.png',
        'rm_ctr_pyramid-descent.png',
        'rm_ctr_random.png',
        'rm_ctr_spiral.png',
        'rm_fortress.png',
        'rm_full-random.png',
        'rm_ghost-lake.png',
        'rm_gold-rush.png',
        'rm_golden-pit.png',
        'rm_hamburger.png',
        'rm_hideout.png',
        'rm_highland.png',
        'rm_hill-fort.png',
        'rm_islands.png',
        'rm_kilimanjaro.png',
        'rm_lombardia.png',
        'rm_mangrove-jungle.png',
        'rm_mediterranean.png',
        'rm_megarandom.png',
        'rm_migration.png',
        'rm_mongolia.png',
        'rm_mountain-pass.png',
        'rm_mountain-ridge.png',
        'rm_nile-delta.png',
        'rm_nomad.png',
        'rm_oasis.png',
        'rm_pacific-islands.png',
        'rm_random_land_map.png',
        'rm_ravines.png',
        'rm_rivers.png',
        'rm_salt-marsh.png',
        'rm_sandbank.png',
        'rm_scandinavia.png',
        'rm_serengeti.png',
        'rm_socotra.png',
        'rm_steppe.png',
        'rm_team-islands.png',
        'rm_valley.png',
        'rm_water-nomad.png',
        'rm_wolf-hill.png',
        'rm_yucatan.png',
        'rwm_amazon.png',
        'rwm_antarctica.png',
        'rwm_aral_sea.png',
        'rwm_australia.png',
        'rwm_black_sea.png',
        'rwm_bohemia.png',
        'rwm_britain.png',
        'rwm_byzantium.png',
        'rwm_caucasus.png',
        'rwm_central_america.png',
        'rwm_china.png',
        'rwm_earth.png',
        'rwm_france.png',
        'rwm_horn_of_africa.png',
        'rwm_iberia.png',
        'rwm_india.png',
        'rwm_indochina.png',
        'rwm_indonesia.png',
        'rwm_italy.png',
        'rwm_madagascar.png',
        'rwm_mideast.png',
        'rwm_norse_lands.png',
        'rwm_phillipines.png',
        'rwm_random_real_world_map.png',
        'rwm_sea_of_japan.png',
        'rwm_siberia.png',
        'rwm_strait_of_malacca.png',
        'rwm_texas.png',
        'rwm_west_africa.png',
        'sm_border-stones.png',
        'sm_canyons.png',
        'sm_enemy-archipelago.png',
        'sm_enemy-islands.png',
        'sm_far-out.png',
        'sm_front-line.png',
        'sm_holy-line.png',
        'sm_inner-circle.png',
        'sm_journey-south.png',
        'sm_jungle-islands.png',
        'sm_jungle-lanes.png',
        'sm_motherland.png',
        'sm_open-plains.png',
        'sm_ring-of-water.png',
        'sm_snake-forest.png',
        'sm_snake-pit.png',
        'sm_sprawling-stream.png',
        'sm_swirling-river.png',
        'sm_the-eye.png',
        'sm_twin-forests.png',
        'sm_yin-yang.png',
    ];
    matchGenerated = [];
    errors = [];

    constructor() {
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
        this.poolMapsSelected.push(this.poolMaps[indexMapSelected]);
        this.poolMaps.splice(indexMapSelected, 1);
    }

    /**
     * Retire la map du pool
     * @param indexMapSelected
     */
    removeMapFromPool(indexMapSelected) {
        this.poolMaps.push(this.poolMapsSelected[indexMapSelected]);
        this.poolMapsSelected.splice(indexMapSelected, 1);
    }

    isPoolFill() {
        return (this.poolMapsSelected.length > 0);
    }

    getR;

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
        console.log(numberRoundsLeft);
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
    }
}
