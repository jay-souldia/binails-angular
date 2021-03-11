import { Prestation } from 'src/app/models/prestation';
import { Component, OnInit, Output } from '@angular/core';
import { PrestationService } from 'src/app/Services/prestation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  prestations: Prestation[] = [];
  // @Output() prestation: Prestation[] = [];

  constructor(private _service: PrestationService) { }

  ngOnInit(): void {
    this.onGetPrestations();
  }

  onGetPrestations(): void {
    this._service.OnGetPresta().subscribe(
      prestation => this.prestations = prestation);
    // this.activatedRoute.queryParams.subscribe(
    //   (params) => {
    //     this.action = params['action'];
    //   }
    //);
  }

  selectPrestation(prestation: Prestation) {
    console.log('vous avez selectionné ' + prestation.title);

  }

  delete(prestation: Prestation) {
    console.log('vous avez selectionné ' + prestation.title);
  }

}
