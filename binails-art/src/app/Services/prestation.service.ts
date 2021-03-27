import { environment } from './../../environments/environment';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Prestation } from '../models/prestation';
import { catchError, tap } from 'rxjs/operators';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {
  private readonly GET_PRESTAS = environment.apiUrl + '/api';
  private readonly SAVE_PRESTA = environment.apiUrl + '/api/add';
  private readonly SAVE_PRESTA2 = environment.apiUrl + '/api/images';
  listPresta: Prestation[] = [];
  public dataForm: FormGroup = new FormGroup({
    title: new FormControl(),
    photo: new FormControl(),
    price: new FormControl(),
    duration: new FormControl(),
    description: new FormControl(),

  });

  prestation: Prestation = new Prestation();



  private log(log: string) {
    console.info(log);
  }

  constructor(private http: HttpClient, public fb: FormBuilder) {

  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    }
  }


  OnGetPresta(): Observable<Prestation[]> {
    return this.http.get<Prestation[]>(this.GET_PRESTAS).pipe(
      tap(_ => this.log('fetched prestations')),
      catchError(this.handleError('OnGetPresta', []))
    );
  }


  savePrestation(prestation: Prestation): Observable<Prestation> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-type ': 'application/json' })
    }
    return this.http.post<Prestation>(this.SAVE_PRESTA, prestation, httpOptions).pipe(
      tap(_ => this.log(`save prestation with id = ${prestation.id}`)),
      catchError(this.handleError<any>('addPresta'))
    );
  }


  getOnePresta(id: number): Observable<Prestation> {
    return this.http.get<Prestation>(`${this.GET_PRESTAS}/${id}`);
  }

  deletePresta(id: any): Observable<any> {
    return this.http.delete(`${this.GET_PRESTAS}/${id}`);
  }


  // updatePrestation(prestation: Prestation): Observable<Prestation> {
  //   const httpOptions = {
  //     headers: new HttpHeaders({ 'Content-type ': 'application/json' })
  //   }
  //   return this.http.put<Prestation>(this.SAVE_PRESTA, prestation, httpOptions)
  // }

  updatePresta(id: any, data: any): Observable<any> {
    return this.http.put(`${this.GET_PRESTAS}/{id}`, data);

  }

  addUploadData(selectedFile: any) {

    return this.http.post('http://localhost:8080/prestations/upload', selectedFile);
  }













  // new methode 

  createData(prestation: Prestation): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type ': 'application/json',
        'Acces-Control-Allow-Origin': '*'
      })
    }
    return this.http.post(`${this.SAVE_PRESTA2}`, prestation);

  }

  getData(id: number): Observable<Object> {
    return this.http.get(`${this.GET_PRESTAS}/${id}`);
  }

  getAllData(): Observable<Prestation[]> {
    return this.http.get<Prestation[]>(`${this.GET_PRESTAS}`)
  }



  // uploadFile(file: File): Observable<HttpEvent<>> {
  //   const formData = new FormData();
  //   formData.append('file', file);
  //   const req = new HttpRequest('POST', `${this.SAVE_PRESTA}, formData{
  //     reportProgress: true;
  //     responseText: 'text'
  //   });
  //   return this.http.request(req);
  // }



}
