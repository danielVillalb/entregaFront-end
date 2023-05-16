import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';
import { Usuario } from 'src/app/clases/usuario';
import { NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
})

export class LoginComponent {
  
  constructor(private authService: AuthService, private router: Router) {}
us1!:String;
contra!:String;
valido!:boolean;
  ngOnInit():void{
    this.authService.usuarios().subscribe(data=>{
      console.log(data[0].user);
      this.us1=data[0].user;
      this.contra=data[0].password;
    })
  }
username!:string;
password!:string;
usuarioValido=false;
errorMessage!:String;
error = false;
comprobar2():void{
  const usuario:Usuario={
    user:this.username,
    password:this.password
  }
  this.authService.comprobar(usuario).subscribe(
    (resultado:boolean)=>{
    console.log("ta andando", resultado)
    this.valido=resultado;
    if(this.valido==true){
    const navigationExtras: NavigationExtras = {
      skipLocationChange: true
    };
    this.router.navigate(['/home'],navigationExtras);}
    else{ this.error = true;
      this.errorMessage = 'Usuario o contraseña incorrectos';
    }
  },
  error => {
    
    console.log(error);
    console.log("no ta andando")
    this.router.navigate((['/']));
  
  });
}










  public login():void{
    

    }
    /*
    if((this.username==this.us1)&&(this.password==this.contra)){
      this.usuarioValido=true;
      
     
  }
*/














/*
  if(this.usuarioValido==false){
    this.router.navigate((['/']));
  }else{
    this.router.navigate((['/home']));
  }

*/
















/*
  public login(): void {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/home']);
    }
  }*/}
