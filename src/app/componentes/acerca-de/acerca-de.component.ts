import { Component } from '@angular/core';
import { SPersonaService } from 'src/app/servicios/spersona.service';
import{Persona} from '../../clases/persona';
import{Experiencia} from '../../clases/experiencia';
import{Educacion} from '../../clases/educacion';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent {

  nombre1!:String;
  apellido1!:String;
  imagen1!:String;
  edad1!:Number;
  email1!:String;
  sobreMi1!:String;
  

  miPortafolio!:any;
  miPortafolio2!:any;
  imagen!:String;

  constructor(private datos:SPersonaService){}
  ngOnInit():void{
    //console.log(this.equipos);
    this.datos.probando().subscribe(data => {
      console.log("data");
      console.log(data)
      this.miPortafolio=data;
      this.nombre1=data[0].nombre;
      this.apellido1=data[0].apellido;
      this.imagen1=data[0].urlImagen;
      this.sobreMi1=data[0].sobreMi;
      console.log(this.imagen);
    });

  }
  /*----------para editar nombre apellido--------------*/
  editarPersona(): void {
    console.log(this.datos);
    const persona:Persona = {
      
      nombre: this.nombre1,
      apellido: this.apellido1,
      edad: this.edad1,   
      email:this.email1,
      telefono:"1151387649",
      sobreMi:this.sobreMi1,
      urlImagen:this.imagen1
    };
    this.datos.editarPersona(persona).subscribe(
      response => {
        console.log(response);
        this.miPortafolio2=response[0];
        console.log("ta andando")
      },
      error => {
        
        console.log(error);
        console.log("no ta andando")
      }
    );
  }
editarN: boolean = false;
editarS:boolean=false;
editarF:boolean=false;
editarA:boolean=false;

editarNombre() {
  this.editarN = true;
}
editarApellido(){
  this.editarA = true;
}
editarSobreMi() {
  this.editarS = true;
}

editarFoto(){
  this.imagen1=''
  this.editarF=true;
}
  onEnterNombre(event: any) {
    this.editarN=false;
    this.nombre1=this.miPortafolio2[0].nombre;
  }
  onEnterApellido(event: any) {
    this.editarA=false;
    this.apellido1=this.miPortafolio2[0].apellido;
  }
  onEnterFoto(event: any) {
    this.editarF=false;
    if(this.imagen1==''){
      this.imagen1=this.miPortafolio[0].urlImagen;
    }else{
    this.imagen1=this.miPortafolio2[0].urlImagen;
    }
  }
  onEnterSobremi(event: any) {
    this.editarS=false;
    this.sobreMi1=this.miPortafolio2[0].imagen;
  }





 



}




































/*
  imageSrc!: string;
  imageUrl!: string;
  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageSrc = e.target.result;
    };
    reader.readAsDataURL(file);
    console.log(reader.readAsDataUrl(file))
  }
  onFileSelected2(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imageUrl = reader.result as string;
      console.log(this.imageUrl)
    };}
}
/* [ngStyle]="{'background-image':'url(../assets/banner.jpg)'}"*/
