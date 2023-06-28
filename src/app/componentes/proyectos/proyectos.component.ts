import { Component } from '@angular/core';
import { Proyectos } from 'src/app/clases/proyectos';
import { SPersonaService } from 'src/app/servicios/spersona.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  proyectos!:any;


constructor(private datos:SPersonaService, private sanitizer: DomSanitizer
){}
ngOnInit():void{
  //console.log(this.equipos);
  this.datos.probando().subscribe(data => {
    
    this.proyectos=data[0].proyectos;
    console.log("proyectos");
    console.log(this.proyectos)
    console.log("link: "+data[0].proyectos[0].link)
  });
}
editarProyect:boolean=false; 
editarNombre:boolean=false;
editarLink:boolean=false;
editarDescripcion:boolean=false;
proyectSeleccionado!:any;
id!:any;
proyect1!:any;
  editarProyecto(proyect:any) {
    this.proyectSeleccionado=proyect;
    
    this.editarNombre = true;
    this.editarLink=true;
    this.editarDescripcion=true;

  }
  editarProyectos():void{
    const proyecto:Proyectos={
    nombre:this.proyectSeleccionado.nombre,
    link:this.proyectSeleccionado.link,
    descripcion:this.proyectSeleccionado.descripcion,
    imagen:this.proyectSeleccionado.imagen,
    persona:{
      id:4
    }}
    this.datos.editarProyectos(proyecto,this.proyectSeleccionado.id).subscribe(
      data=>{
        console.log("esto es editar educacion")
        console.log(data);
        this.proyect1=data[0];
        console.log("tambien anda")
      },
      error=>{
        console.log(error);
        console.log("no anda exp")
      }
      );
    
  }
  onEnterNombre(event:any){
    this.editarNombre=false;
  }
  onEnterLink(event:any){
    this.editarLink=false;
  }
  onEnterDescripcion(event:any){
    this.editarDescripcion=false;
  }


  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  

}
