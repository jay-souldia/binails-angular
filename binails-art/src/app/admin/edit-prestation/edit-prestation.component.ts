import { Component, Input, OnInit } from '@angular/core';
import { Prestation } from 'src/app/models/prestation';

@Component({
  selector: 'app-edit-prestation',
  templateUrl: './edit-prestation.component.html',
  styleUrls: ['./edit-prestation.component.css']
})
export class EditPrestationComponent implements OnInit {

  @Input() prestations: Prestation[] = [];
  public imgUrl: any;
  constructor() { }

  ngOnInit(): void {
  }

  onSelectFile() { }

}
