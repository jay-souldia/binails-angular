import { NumberSymbol } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Prestation } from 'src/app/models/prestation';
import { PrestationService } from 'src/app/Services/prestation.service';

@Component({
  selector: 'app-view-one-presta',
  templateUrl: './view-one-presta.component.html',
  styleUrls: ['./view-one-presta.component.css']
})
export class ViewOnePrestaComponent implements OnInit {
  @Input() prestations: Prestation[] = [];
  currentPresta: Prestation = {
    title: '',
    description: '',
    photo: '',
    price: 0,
    duration: 0
  };
  message = '';

  constructor(private service: PrestationService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.message = '';
    //this.getPresta();
  }

  getPresta(): void {
    const id = this.route.params.subscribe(params => {
      const prestaId = params.id;
      this.service.getOnePresta(prestaId).subscribe(
        data => {
          this.currentPresta = data;
          console.log(data);
        }, error => {
          console.log(error);
        });
    })
  }

  deletePresta(): void {
    this.service.deletePresta(this.currentPresta.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/list-presta']);
        }, error => {
          console.log(error);
        }
      )
  }

  updatePresta(): void {
    this.message = '';
    this.service.updatePresta(this.currentPresta.id, this.currentPresta)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'This prestation was upated successfull !';
        }, error => {
          console.log(error);
        }
      )
  }

}
