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
      headsec: "A",
      section: "F",
      no: 1,
      w: 240,
      h: 380,
      shapes: [
        { t: 2, x: 0, y: 0, w: 240, h: 285 },
        { t: 1, x: 0, y: 285, w: 240, h: 95 },
      ],
    },
    { headsec: "A", section: "F", no: 2, w: 240, h: 380, shapes: [{ t: 1, x: 0, y: 285, w: 240, h: 95 }] },
    { headsec: "A", section: "F", no: 3, w: 240, h: 380, shapes: [{ t: 1, x: 120, y: 190, w: 120, h: 190 }] },
    { headsec: "A", section: "Foo", no: 4, w: 240, h: 380, shapes: [{ t: 1, x: 0, y: 190, w: 120, h: 190 }] },
    { headsec: "A", section: "Foo", no: 5, w: 240, h: 380, shapes: [{ t: 1, x: 120, y: 190, w: 120, h: 190 }] },
    { headsec: "A", section: "Foooooo", no: 6, w: 240, h: 380, shapes: [{ t: 1, x: 0, y: 190, w: 120, h: 190 }] },
    { headsec: "A", section: "Foooooo", no: 7, w: 240, h: 380, shapes: [{ t: 1, x: 120, y: 190, w: 120, h: 190 }] },
    { headsec: "A", section: "Fooooooooo", no: 8, w: 240, h: 380, shapes: [{ t: 1, x: 0, y: 190, w: 120, h: 190 }] },
    { headsec: "A", section: "Fooooooooo", no: 9, w: 240, h: 380, shapes: [{ t: 1, x: 120, y: 190, w: 120, h: 190 }] },
    { headsec: "A", section: "F", no: 10, w: 240, h: 380, shapes: [{ t: 1, x: 0, y: 0, w: 240, h: 380 }] },
    { headsec: "A", section: "F", no: 11, w: 240, h: 380, shapes: [{ t: 1, x: 0, y: 0, w: 240, h: 380 }] },
    {
      headsec: "A",
      section: "F",
      no: 12,
      w: 240,
      h: 380,
      shapes: [
        { t: 1, x: 0, y: 190, w: 240, h: 190 },
        { t: 1, x: 0, y: 0, w: 120, h: 190 },
      ],
    },
    { headsec: "A", section: "F", no: 13, w: 240, h: 380, shapes: [{ t: 1, x: 120, y: 190, w: 120, h: 190 }] },
    { headsec: "A", section: "F", no: 14, w: 240, h: 380, shapes: [{ t: 1, x: 0, y: 190, w: 120, h: 190 }] },
    {
      headsec: "A",
      section: "F",
      no: 15,
      w: 240,
      h: 380,
      shapes: [
        { t: 1, x: 120, y: 190, w: 120, h: 190 },
        { t: 1, x: 0, y: 190, w: 120, h: 190 },
      ],
    },
    { headsec: "A", section: "F", no: 16, w: 240, h: 380, shapes: [] },
    { headsec: "A", section: "F", no: 17, w: 240, h: 380, shapes: [{ t: 1, x: 120, y: 190, w: 120, h: 190 }] },
    { headsec: "A", section: "F", no: 18, w: 240, h: 380, shapes: [] },
    { headsec: "A", section: "F", no: 19, w: 240, h: 380, shapes: [{ t: 1, x: 120, y: 190, w: 120, h: 190 }] },
    { headsec: "A", section: "F", no: 20, w: 240, h: 380, shapes: [] },
    { headsec: "A", section: "F", no: 21, w: 240, h: 380, shapes: [{ t: 1, x: 120, y: 190, w: 120, h: 190 }] },
    {
      headsec: "A",
      section: "F",
      no: 22,
      w: 240,
      h: 380,
      shapes: [
        { t: 1, x: 0, y: 0, w: 240, h: 190 },
        { t: 1, x: 0, y: 190, w: 120, h: 190 },
      ],
    },
    { headsec: "A", section: "F", no: 23, w: 240, h: 380, shapes: [{ t: 1, x: 120, y: 190, w: 120, h: 190 }] },
    { headsec: "A", section: "F", no: 24, w: 240, h: 380, shapes: [] },
    {
      headsec: "A",
      section: "F",
      no: 25,
      w: 240,
      h: 380,
      shapes: [
        { t: 1, x: 0, y: 190, w: 240, h: 190 },
        { t: 1, x: 0, y: 0, w: 240, h: 190 },
      ],
    },
    { headsec: "A", section: "F", no: 26, w: 240, h: 380, shapes: [{ t: 1, x: 0, y: 285, w: 240, h: 95 }] },
    { headsec: "A", section: "F", no: 27, w: 240, h: 380, shapes: [] },
    { headsec: "A", section: "F", no: 28, w: 240, h: 380, shapes: [{ t: 1, x: 0, y: 285, w: 240, h: 95 }] },
    { headsec: "A", section: "F", no: 29, w: 240, h: 380, shapes: [] },
    { headsec: "A", section: "F", no: 30, w: 240, h: 380, shapes: [{ t: 1, x: 0, y: 0, w: 240, h: 380 }] },
    { headsec: "A", section: "F", no: 31, w: 240, h: 380, shapes: [{ t: 2, x: 0, y: 0, w: 240, h: 380 }] },
    { headsec: "A", section: "F", no: 32, w: 240, h: 380, shapes: [{ t: 2, x: 0, y: 0, w: 240, h: 380 }] },
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
