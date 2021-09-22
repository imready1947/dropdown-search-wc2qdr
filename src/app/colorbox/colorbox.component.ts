import { Component, OnInit, Input } from "@angular/core";
import {
  trigger,
  style,
  animate,
  transition,
  query,
  stagger,
  sequence
} from "@angular/animations";

@Component({
  selector: "app-colorbox",
  templateUrl: "./colorbox.component.html",
  styleUrls: ["./colorbox.component.css"],
  animations: [
    trigger("spin", [
      transition(":enter", [
        style({ transform: "rotate(0)" }),
        animate("1000ms", style({ transform: "rotate(180deg)" }))
      ])
    ])
  ]
})
export class ColorboxComponent {
  @Input() color: string;

  constructor() {}
}
