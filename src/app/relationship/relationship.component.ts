import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-relationship',
  templateUrl: './relationship.component.html',
  styleUrls: ['./relationship.component.css']
})
export class RelationshipComponent implements OnInit {
  gender: any;
  child: any;
  grandchild: any;
  niecenephew: any;


  constructor(
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.queryParams
      .subscribe(params => {
        console.log(params);
        this.gender = params.gender;

        if (this.gender === "her") {
            this.child = "Daughter";
            this.grandchild = "Granddaughter";
            this.niecenephew = "Niece";
        } else {
            this.child = "Son";
            this.grandchild = "Grandson";
            this.niecenephew = "Nephew";
        }
      })
  }

  onDone() {
    this._router.navigate(['/name']);
  }

}
