import { Component } from "@angular/core";
import { NavigationEnd, Router, RouterEvent } from "@angular/router";
import { Observable } from "rxjs";
import { filter } from "rxjs/operators";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  readonly routes = [
    {
      label: "Format Properties Pane",
      path: "format-properties-pane",
    },
    {
      label: "Format Page Properties Pane",
      path: "format-page-properties-pane",
    },
    {
      label: "Add Section to Format Dialog",
      path: "add-section-to-format-dialog",
    },
    {
      label: "Page layout",
      path: "page-layout",
    },
    {
      label: "Properties Panel Style 1",
      path: "properties-pane-style-1",
    },
  ];

  public currentRouteLabel?: string;

  constructor(private _router: Router) {
    _router.events.pipe(filter((evt) => evt instanceof NavigationEnd)).subscribe((evt) => {
      this.currentRouteLabel = this.routes.find((x) => (evt as NavigationEnd).urlAfterRedirects.endsWith(x.path))?.label;
    });
  }
}
