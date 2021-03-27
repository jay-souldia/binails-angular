import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Prestation } from 'src/app/models/prestation';
import { PrestationService } from 'src/app/Services/prestation.service';

@Component({
  selector: 'app-list-presta',
  templateUrl: './list-presta.component.html',
  styleUrls: ['./list-presta.component.css']
})
export class ListPrestaComponent implements OnInit {

  prestations: Prestation[] = [];
  public action: string | undefined;

  constructor(private prestaService: PrestationService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getData();
  }

  onGetPrestations(): void {
    this.prestaService.OnGetPresta().subscribe(
      prestation => this.prestations = prestation);
    // this.activatedRoute.queryParams.subscribe(
    //   (params) => {
    //     this.action = params['action'];
    //   }
    //);
  }

  getData(): void {
    this.prestaService.getAllData().subscribe(
      prestation => this.prestations = prestation
    );
  }

}
