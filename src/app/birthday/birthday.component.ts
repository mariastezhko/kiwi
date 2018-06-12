import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.css']
})
export class BirthdayComponent implements OnInit {
  firstname: any;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this._route.queryParams
      .subscribe(params => {
        console.log(params);
        this.firstname = params.firstname;
      })
  }

  onBirthday() {
    this._router.navigate(['/gender'], {queryParams: {firstname: this.firstname}});
  }

}
