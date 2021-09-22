import { Component } from "@angular/core";
import { FrutasFilterService } from "../frutas/frutas-filter.service";

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.css']
})
export class SearchContainerComponent {
  hits = [];

  constructor(private frutasFilterService: FrutasFilterService) {}

  filter(value: string) {
    this.hits = this.frutasFilterService.filter(value);
  }
}