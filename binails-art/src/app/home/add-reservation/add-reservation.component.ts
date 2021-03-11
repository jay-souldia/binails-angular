import { Component, Input, OnInit } from '@angular/core';
import { Prestation } from 'src/app/models/prestation';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent implements OnInit {

  @Input() prestations: Prestation[] = [];
  public selectedPrestation?: Prestation;


  constructor() { }

  ngOnInit(): void {
  }

}
