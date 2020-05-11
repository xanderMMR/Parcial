import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Socio } from '../model/socio';
import { SocioService } from '../socio.service';
import { Router } from '@angular/router';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { ok } from 'assert';

@Component({
  selector: 'app-socio-list',
  templateUrl: './socio-list.component.html',
  styleUrls: ['./socio-list.component.css']
})
export class SocioListComponent implements OnInit {
  socio: Observable<Socio[]>

  constructor(private socioService : SocioService, private router : Router) { } //se inyecta el servicio

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData(){
    this.socioService.getSocioList().subscribe(
      socio => this.socio = socio
    );
  }

}
