import { Component } from '@angular/core';
import { Educacion } from 'src/app/clases/educacion';
import { SPersonaService } from 'src/app/servicios/spersona.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {
  educacion!:any;
  educacion1!:any;
  instituto1:String="";
  titulo1:String="";
  periodo1:String="";
  termino1:boolean=false;
  id!:Number;
  array!:any;

  constructor(private datos:SPersonaService){}
  ngOnInit():void{
    this.datos.probando().subscribe(data => {
      this.educacion= data[0].educacion;
      this.id=data[0].educacion.id;
      this.instituto1=this.educacion.instituto;
      this.titulo1=this.educacion.titulo;
      this.periodo1=this.educacion.periodo;
      this.termino1=this.educacion.termino;
      console.log("esto es educacion 1");
      console.log(this.educacion);
    });
}



/*-----------creamos educacion------------------*/
editarEducacion():void{
  const educacion:Educacion={
    instituto:this.instSeleccionada.instituto,
    titulo:this.instSeleccionada.titulo,
    periodo:this.instSeleccionada.periodo,
    termino:this.instSeleccionada.termino,
    persona:{
      id:4
      }
  }
  console.log("esto es instituto")
  console.log(this.instSeleccionada.instituto)
  console.log(educacion)
  this.datos.editarEducacion(educacion,this.instSeleccionada.id).subscribe(
    data=>{
      console.log("esto es editar educacion")
      console.log(data);
      this.educacion1=data[0];
      console.log("tambien anda")
    },
    error=>{
      console.log(error);
      console.log("no anda exp")
    }
    );
}
instSeleccionada!:any;
editarInstituto:boolean =false;
editarTitulo:boolean=false;
editarPeriodo:boolean=false;
editarTermino:boolean=false;

editarEducaciones(inst:any){
  console.log("esto es inst")
    console.log(inst.id)
    this.array=inst.id;
    this.instSeleccionada = inst;
    this.editarInstituto = true;
    this.editarTitulo=true;
    this.editarPeriodo=true;
    this.editarTermino=true;

}
onEnterInstituto(event:any)
{
  
  this.editarInstituto=false;
  console.log("esto pasa")
 /* this.datos.editarEducacion(this.instSeleccionada.instituto,this.instSeleccionada.id).subscribe(
    data=>{
      console.log("esto es editar dentro de instituto")
      console.log(data)
      this.instituto1=data[0].instituto
    }
  )*/
  //this.instituto1=this.educacion1[0].instituto;
}
onEnterPeriodo(event:any)
{
  this.editarPeriodo=false;
  this.periodo1=this.educacion1[0].periodo;
}
onEnterTermino(event:any)
{
  this.editarTermino=false;
  this.termino1=this.educacion1[0].termino;
}
onEnterTitulo(event:any)
{
  this.editarTitulo=false;
  this.titulo1=this.educacion1[0].titulo;
}














}
