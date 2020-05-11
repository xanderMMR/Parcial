import { Component, OnInit } from '@angular/core';
import {Socio} from '../model/socio';
import {Router} from '@angular/router';
import {SocioService} from '../socio.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-create-socio',
  templateUrl: './create-socio.component.html',
  styleUrls: ['./create-socio.component.css']
})
export class CreateSocioComponent implements OnInit {
  socio: Socio = new Socio();
  constructor(private socioService: SocioService,
    private router:Router) { }

  ngOnInit(): void {
  }
  save(){
    console.log("CLICK");
    console.log(this.socio);
    this.socioService.registrar(this.socio).subscribe(
      data =>this.router.navigate(['/list'])
    ); 
  }

}
