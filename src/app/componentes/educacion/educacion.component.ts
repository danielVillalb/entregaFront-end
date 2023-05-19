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


  constructor(private datos:SPersonaService){}
  ngOnInit():void{
    this.datos.probando().subscribe(data => {
      this.educacion= data[0].educacion;
      
      this.instituto1=data[0].instituto;
      this.titulo1=data[0].titulo;
      this.periodo1=data[0].periodo;
      this.termino1=data[0].termino;
      console.log(this.educacion1);
    });
  }



/*-----------creamos educacion------------------*/
editarEducacion():void{
  const educacion:Educacion={
    
    instituto:this.instituto1,
    titulo:this.titulo1,
    periodo:this.periodo1,
    termino:this.termino1,
    persona:{
      id:2
      }
  }
  this.datos.editarEducacion(educacion).subscribe(
    data=>{
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
  
    this.instSeleccionada = inst;
    this.editarInstituto = true;
    this.editarTitulo=true;
    this.editarPeriodo=true;
    this.editarTermino=true;
   
  
}
onEnterInstituto(event:any)
{
  this.editarInstituto=false;
  this.instituto1=this.educacion1[0].instituto;
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
