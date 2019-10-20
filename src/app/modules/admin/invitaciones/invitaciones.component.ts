import { Component, OnInit } from '@angular/core';
import { InvitacionService } from 'src/app/service/invitacion.service';
import swal from 'src/assets/sweetalert'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invitaciones',
  templateUrl: './invitaciones.component.html',
  styleUrls: ['./invitaciones.component.css']
})
export class InvitacionesComponent implements OnInit {
  invitaciones: any[] = [{ "id": 1, "nombres": "Esteven Javier", "apellidos": "Moreno Ca\u00f1ate", "telefono": "El Libano", "email": "3024426044", "direccion": "estevenjaviier@gmail.com", "invitadoPor": "Maria Jos\u00e9 Jim\u00e9nez", "created_at": "2019-10-16 02:42:51", "updated_at": "2019-10-16 02:42:51" }, { "id": 5, "nombres": "Alejandra Luica", "apellidos": "LEyva Agudelo", "telefono": "Olaya Herrera", "email": "34345", "direccion": "a@a.com", "invitadoPor": "Maria Jos\u00e9 Jim\u00e9nez", "created_at": "2019-10-17 23:06:23", "updated_at": "2019-10-17 23:06:23" }, { "id": 6, "nombres": "Roy David", "apellidos": "Gomez Aguilar", "telefono": "La boquilla", "email": "7273732", "direccion": "r@gomez.com", "invitadoPor": "Esteven Moreno", "created_at": "2019-10-17 23:12:43", "updated_at": "2019-10-17 23:12:43" }];

  constructor(private sInvitaciones: InvitacionService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getInivitaciones();
  }

  getInivitaciones() {
    this.sInvitaciones.getInvitaciones().subscribe(data => this.invitaciones = data, error => {
      swal("", "Se a Produciodo un error al conectarse con el servidor", "error", {
        buttons: { cancel: false, confirm: false }, timer: 3000
      });
    });
  }
  // this.route.snapshot.params['id']

  onDelete(id: number) {
    this.sInvitaciones.deleteInvitacion(id).subscribe(data => {
      swal("", "Eliminacion exitosa", "success", {
        buttons: { cancel: false, confirm: false }, timer: 3000
      });

      this.getInivitaciones();

    }, err => {
      console.log(err)
    });

  }

}
