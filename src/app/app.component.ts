import { HttpClient } from '@angular/common/http';
import { Component, OnInit, VERSION } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { of, map } from 'rxjs';



@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  formulario:FormGroup;
  cadena: string ="";
  constructor(private _formBuilder:FormBuilder,
            private http:HttpClient){}

  ngOnInit(){
    this.formulario = this._formBuilder.group({
      campoTexto: new FormControl('', Validators.required),
      campoNumerico: new FormControl(0, Validators.required),
      datoSelector: new FormControl('', Validators.required),
      comentario: new FormControl('', Validators.required),
    })
    this.funct()
  } 

  funct(){
    of("campoTexto","campoNumerico", "datoSelector", "comentario")
    .pipe(map((word) => {
      this.cadena += ' - ' + word;
      return word;
    } ))
    .subscribe((value) => console.log(`value: ${value}`));
  }

}

