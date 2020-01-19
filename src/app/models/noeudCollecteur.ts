import { NoeudMaitre } from "./noeudMaitre";

export class NoeudCollecteur {
    id: number;
    type: string;
    positionX: number;
    positionY: number;
    surfaceCouverte: number;
    nbPlanteUnitaire: number;
    noeudMaitre: NoeudMaitre;
}