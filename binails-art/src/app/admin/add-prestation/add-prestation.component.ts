import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Prestation } from 'src/app/models/prestation';
import { PrestationService } from 'src/app/Services/prestation.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-prestation',
  templateUrl: './add-prestation.component.html',
  styleUrls: ['./add-prestation.component.css']
})
export class AddPrestationComponent implements OnInit {

  @Input()
  public prestation = new Prestation();
  prestations: Prestation[] = [];

  @Output()
  prestaAddEvent = new EventEmitter();

  //public dataForm!: FormGroup
  public selectedFile: any;

  private readonly SAVE_PRESTA = environment.apiUrl + '/prestations';

  imgUrl: any;
  public imagePath: any;
  userFile: any;

  public message: any;
  constructor(public service: PrestationService, private router: Router, private http: HttpClient, private activatedRoute: ActivatedRoute,
    private fb: FormBuilder) {
    // this.dataForm = fb.group({
    //   prestaInfos: fb.group({
    //     title: '',
    //     price: '',
    //     duration: '',
    //     description: ''
    //   }),
    //   illustration: fb.group({
    //     photo: ['', Validators.required]
    //   })
    // })
  }

  ngOnInit(): void {
  }

  public onFileChanged(e: any) {
    this.selectedFile = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (event: any) => {
      //this.imgUrl = reader.result
      this.imgUrl = event.target.result; // nouvelle façon a verifier sinon revenir sur la methode au dessus
    };
  }


  savePresta() {
    const uploadData = new FormData();
    uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
    this.selectedFile.imageName = this.selectedFile.name;

    this.http.post(this.SAVE_PRESTA + '/upload', uploadData, { observe: 'response' }).subscribe(
      (response) => {
        if (response.status == 200) {
          this.service.savePrestation(this.prestation).subscribe(
            (prestation) => {
              this.prestation = prestation;
              this.goBack();
            });
          console.log('image uploaded successfull');
        } else {
          console.log('image not uploaded sucessfull')
        }
      });
  }


  addPrestation(prestation: Prestation): void {
    this.service.savePrestation(this.prestation).subscribe(
      prestation => {
        this.prestation = prestation;
        window.location.reload();
      })
  }

  goBack(): void {
    this.router.navigate(['/list-presta']);
  }

  goReturn(): void {
    let link = ['/home']
    this.router.navigate([link]);
  }











  onSubmit() {
    this.addData();
  }


  onSelectFile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.selectedFile = file;
      //this.f['profile'].setValue(file)
      var mimeType = event.target.files[0].type;
      if (mimeType.match(/image\/*/) == null) { // test pour verifier l'extension du fichier
        this.message = "Only image files are supported.";
        return;
      }
      // a partir d'ici le reste du code nous permet de recuperer et d'afficher l'image. 
      var reader = new FileReader();
      this.imagePath = file;
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imgUrl = reader.result
      }
    }
  }

  addData() { // new methode save data avec image qui communique avec le service. 
    const formData = new FormData();
    //const title = this.service.prestation.title;
    const prestation = {
      id: this.prestation.id, title: this.prestation.title,
      durattion: this.service.prestation.duration,
      description: this.service.prestation.description, photo: this.service.prestation.photo,
      price: this.service.prestation.price
    }
    formData.append('prestation', JSON.stringify(prestation));
    formData.append('file', this.userFile);
    this.service.createData(prestation).subscribe(data => {
      this.prestation = data;
      this.goBack();
    })
  }

}
