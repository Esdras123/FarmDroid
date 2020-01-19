import { Time } from "@angular/common";

export class Action {
    id: number;
    type: string;
    message: string;
    frequence: number;
    heure: Time;
    dateDebut: Date;
    dateFin: Date;
    statut: string;
}