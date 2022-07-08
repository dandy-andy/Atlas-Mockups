import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-page-layout",
  templateUrl: "./page-layout.component.html",
  styleUrls: ["./page-layout.component.css"],
})
export class PageLayoutComponent {
  public currentLayoutWidthPages: number = 6;

  public readonly layoutWidthOptions: number[] = [1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

  public readonly pages = [
    {
      sec: "A",
      no: 1,
      w: 240,
      h: 380,
      shapes: [
        { t: 2, x: 0, y: 0, w: 240, h: 285 },
        { t: 1, x: 0, y: 285, w: 240, h: 95 },
      ],
    },
    { sec: "A", no: 2, w: 240, h: 380, shapes: [{ t: 1, x: 0, y: 285, w: 240, h: 95 }] },
    { sec: "A", no: 3, w: 240, h: 380, shapes: [{ t: 1, x: 120, y: 190, w: 120, h: 190 }] },
    { sec: "A", no: 4, w: 240, h: 380, shapes: [{ t: 1, x: 0, y: 190, w: 120, h: 190 }] },
    { sec: "A", no: 5, w: 240, h: 380, shapes: [{ t: 1, x: 120, y: 190, w: 120, h: 190 }] },
    { sec: "A", no: 6, w: 240, h: 380, shapes: [{ t: 1, x: 0, y: 190, w: 120, h: 190 }] },
    { sec: "A", no: 7, w: 240, h: 380, shapes: [{ t: 1, x: 120, y: 190, w: 120, h: 190 }] },
    { sec: "A", no: 8, w: 240, h: 380, shapes: [{ t: 1, x: 0, y: 190, w: 120, h: 190 }] },
    { sec: "A", no: 9, w: 240, h: 380, shapes: [{ t: 1, x: 120, y: 190, w: 120, h: 190 }] },
    { sec: "A", no: 10, w: 240, h: 380, shapes: [{ t: 1, x: 0, y: 0, w: 240, h: 380 }] },
    { sec: "A", no: 11, w: 240, h: 380, shapes: [{ t: 1, x: 0, y: 0, w: 240, h: 380 }] },
    {
      sec: "A",
      no: 12,
      w: 240,
      h: 380,
      shapes: [
        { t: 1, x: 0, y: 190, w: 240, h: 190 },
        { t: 1, x: 0, y: 0, w: 120, h: 190 },
      ],
    },
    { sec: "A", no: 13, w: 240, h: 380, shapes: [{ t: 1, x: 120, y: 190, w: 120, h: 190 }] },
    { sec: "A", no: 14, w: 240, h: 380, shapes: [{ t: 1, x: 0, y: 190, w: 120, h: 190 }] },
    {
      sec: "A",
      no: 15,
      w: 240,
      h: 380,
      shapes: [
        { t: 1, x: 120, y: 190, w: 120, h: 190 },
        { t: 1, x: 0, y: 190, w: 120, h: 190 },
      ],
    },
    { sec: "A", no: 16, w: 240, h: 380, shapes: [] },
    { sec: "A", no: 17, w: 240, h: 380, shapes: [{ t: 1, x: 120, y: 190, w: 120, h: 190 }] },
    { sec: "A", no: 18, w: 240, h: 380, shapes: [] },
    { sec: "A", no: 19, w: 240, h: 380, shapes: [{ t: 1, x: 120, y: 190, w: 120, h: 190 }] },
    { sec: "A", no: 20, w: 240, h: 380, shapes: [] },
    { sec: "A", no: 21, w: 240, h: 380, shapes: [{ t: 1, x: 120, y: 190, w: 120, h: 190 }] },
    {
      sec: "A",
      no: 22,
      w: 240,
      h: 380,
      shapes: [
        { t: 1, x: 0, y: 0, w: 240, h: 190 },
        { t: 1, x: 0, y: 190, w: 120, h: 190 },
      ],
    },
    { sec: "A", no: 23, w: 240, h: 380, shapes: [{ t: 1, x: 120, y: 190, w: 120, h: 190 }] },
    { sec: "A", no: 24, w: 240, h: 380, shapes: [] },
    {
      sec: "A",
      no: 25,
      w: 240,
      h: 380,
      shapes: [
        { t: 1, x: 0, y: 190, w: 240, h: 190 },
        { t: 1, x: 0, y: 0, w: 240, h: 190 },
      ],
    },
    { sec: "A", no: 26, w: 240, h: 380, shapes: [{ t: 1, x: 0, y: 285, w: 240, h: 95 }] },
    { sec: "A", no: 27, w: 240, h: 380, shapes: [] },
    { sec: "A", no: 28, w: 240, h: 380, shapes: [{ t: 1, x: 0, y: 285, w: 240, h: 95 }] },
    { sec: "A", no: 29, w: 240, h: 380, shapes: [] },
    { sec: "A", no: 30, w: 240, h: 380, shapes: [{ t: 1, x: 0, y: 0, w: 240, h: 380 }] },
    { sec: "A", no: 31, w: 240, h: 380, shapes: [{ t: 2, x: 0, y: 0, w: 240, h: 380 }] },
    { sec: "A", no: 32, w: 240, h: 380, shapes: [{ t: 2, x: 0, y: 0, w: 240, h: 380 }] },
  ];

  public get spreads(): any[] {
    let spreads: [any, any][] = [[null, this.pages[0]]];
    for (let i = 1; i < this.pages.length; i += 2) {
      spreads.push([this.pages[i], this.pages.length > i + 1 ? this.pages[i + 1] : null]);
    }
    return spreads;
  }

  constructor() {
    this.currentLayoutWidthPages = 8;
  }
}
