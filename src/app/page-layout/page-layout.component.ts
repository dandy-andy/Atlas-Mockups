import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-page-layout",
  templateUrl: "./page-layout.component.html",
  styleUrls: ["./page-layout.component.css"],
})
export class PageLayoutComponent {
  public currentLayoutWidthPages: number = 6;

  public readonly layoutWidthOptions: number[] = [1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

  public readonly pages = [];

  public get spreads(): any[] {
    let spreads: [any, any][] = [[null, this.pages[0]]];
    for (let i = 1; i < this.pages.length; i += 2) {
      spreads.push([this.pages[i], this.pages.length > i + 1 ? this.pages[i + 1] : null]);
    }
    return spreads;
  }

  constructor() {
    this.currentLayoutWidthPages = 8;

    let initPages = [];
    for (let i = 1; i <= 32; i++) {
      initPages.push({ pageNo: i, shapes: Math.floor(Math.random() * 8) });
    }
    this.pages = initPages;
  }
}
