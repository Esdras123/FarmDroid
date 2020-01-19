import { NoeudCollecteur } from "./noeudCollecteur";

export class Effecteur {
    id: number;
    ref: string;
    type: string;
    freqRecep: number;
    capaciteArrosage: number;
    noeudCollecteur: NoeudCollecteur;
}