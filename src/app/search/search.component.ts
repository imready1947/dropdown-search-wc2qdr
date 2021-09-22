import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  HostListener
} from "@angular/core";
import { hitsEnterLeaveAnimation, listHeader } from "./animations";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
  animations: [hitsEnterLeaveAnimation, listHeader]
})
export class SearchComponent {
  @Input() hits = [];

  @Output() filter = new EventEmitter<string>();

  selectedHit: number | undefined;

  lastTyped: string = "";

  search: string = "";

  hasFocus = false;
  @HostListener("focusin")
  onFocusIn() {
    this.hasFocus = true;
  }
  @HostListener("focusout")
  onFocusOut() {
    this.hasFocus = false;
  }

  constructor() {}

  onSearchInput(event: any) {
    this.lastTyped = event.target.value;
    this.filter.emit(event.target.value);
    this.selectedHit = undefined;
  }

  select(value: number | undefined, updateSearch: boolean = false) {
    this.selectedHit = value;
    if (updateSearch) {
      if (value !== undefined) {
        this.search = this.hits[value].nombre || this.lastTyped;
      } else {
        this.search = this.lastTyped;
      }
    }
  }
}
