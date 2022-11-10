import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-format-page-properties-pane",
  templateUrl: "./format-page-properties-pane.component.html",
  styleUrls: ["./format-page-properties-pane.component.css"],
})
export class FormatPagePropertiesPaneComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  readonly allItems = [...Array(100).keys()];

  selectedItems = [];

  get items() {
    return this.allItems.filter((x) => (this.showOdd && x % 2 !== 0) || (this.showEven && x % 2 === 0));
  }

  showOdd = true;

  get showEven() {
    return !this.showOdd;
  }
  set showEven(val) {
    this.showOdd = !this.showOdd;
  }
}
