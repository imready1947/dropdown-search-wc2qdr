import { Injectable } from "@angular/core";
import { Fruta, frutas } from "./frutas";

@Injectable({
  providedIn: 'root',
})
export class FrutasFilterService {
  constructor() {}

  filter(value: string) {
    if (value.length > 0) {
      if (value.includes("Todos")) {
        return frutas;
      } else {
        return frutas
          .filter(fruta => {
            return fruta.nombre.toLowerCase().includes(value.toLowerCase());
          })
          .slice(0, 5);
      }
    } else {
      return [] //frutas.slice(0, 5);
    }
  }
}
