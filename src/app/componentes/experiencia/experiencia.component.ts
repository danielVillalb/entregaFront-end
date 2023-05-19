import { Component } from '@angular/core';
import { Experiencia } from 'src/app/clases/experiencia';
import { SPersonaService } from 'src/app/servicios/spersona.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  experiencia!:any;
  info!:any;
  empresa1!:String;
  trabajoActual1!:boolean;
  puesto1!:any;
  fechainicio1!:String;
  fechaFin1!:String;
  descripcion1!:String;
  
  experiencia1!:any;

  constructor(private datos:SPersonaService){}
  ngOnInit():void{
    this.datos.probando().subscribe(data => {
      this.info=data[0].experiencia;
      this.experiencia = data[0].experiencia;
      this.empresa1 = data[0].experiencia.empresa;
      this.trabajoActual1 = data[0].experiencia.trabajoActual;
      this.fechaFin1 = data[0].experiencia.fechaFin;
      this.fechainicio1 = data[0].experiencia.fechainicio;


      console.log("a ver que me da");
      console.log(this.experiencia);
      
    });

  }
  /*-----------editar la experiencia------------*/
 editarExperiencia():void{
  const experiencia:Experiencia={
  empresa:this.empresa1,
  trabajoActual:this.trabajoActual1,
  fechainicio:this.fechainicio1,
  fechaFin:this.fechaFin1,
  descripcion:this.descripcion1,
  persona:{
    id:1
    }
  }
  this.datos.editarExperiencia(experiencia).subscribe(
    data=>{
      console.log(data);
      this.experiencia1=data[0].experiencia;
      console.log("tambien anda")
    },
    error=>{
      console.log(error);
      console.log("no anda exp")
    }

  );
}






editarEmpres:boolean=false;
editarFechaI:boolean=false;
editarFechaFin:boolean=false;
editarDescripcion:boolean=false;
editarActual:boolean=false;
editarPuesto:boolean=false;




indiceEditar: number | null = null;
expSeleccionada!:any;
exp!:any;
editarEmpresa(exp:any) {
  this.expSeleccionada = exp;
  this.editarEmpres = true;
  this.editarPuesto=true;
  this.editarFechaI=true;
  this.editarFechaFin=true;
  this.editarDescripcion=true;
  this.editarActual=true;
}

/*
  editarEmpresa2(exp:any) {
    this.editarE = true;
  }*/
  onEnterEmpresa(event: any) {
    this.editarEmpres=false;
    this.empresa1=this.experiencia1[0].empresa;
  }
  onEnterPuesto(event: any) {
    this.editarPuesto=false;
    this.puesto1=this.experiencia1[0].puesto;
  }
  onEnterFechaI(event: any) {
    this.editarFechaI=false;
    this.fechainicio1=this.experiencia1[0].fechainicio;
  }
  onEnterFechaFin(event: any) {
    this.editarFechaFin=false;
    this.fechaFin1=this.experiencia1[0].fechaFin;
  }
  onEnterDescripcion(event: any) {
    this.editarDescripcion=false;
    this.descripcion1=this.experiencia1[0].descripcion;
  }
  onEnterActual(event: any) {
    this.editarActual=false;
    this.trabajoActual1=this.experiencia1[0].trabajoActual;
  }
}
