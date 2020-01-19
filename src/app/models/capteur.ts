import { NoeudCollecteur } from "./noeudCollecteur";

export class Capteur{
    id: number;
    ref: string;
    type: string;
    etat: string;
    noeudCollecteur: NoeudCollecteur;
}