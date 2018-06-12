import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
  newChild: any;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.newChild = {firstname: "", lastname: "", birthday: "", gender: "", relationship: ""}
  }

  onAdd() {
    console.log("*", this.newChild.firstname)
    this._router.navigate(['/birthday'], {queryParams: {firstname: this.newChild.firstname}});
  }

}
