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
  invitaciones: any[];
  isLoading: boolean = false;

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
    this.isLoading = true;
    this.sInvitaciones.deleteInvitacion(id).subscribe(data => {
      swal("", "Eliminacion exitosa", "success", {
        buttons: { cancel: false, confirm: false }, timer: 3000
      });
      this.getInivitaciones();
      this.isLoading = false;

    }, err => {
      swal("", "Se a Produciodo un error al conectarse con el servidor", "error", {
        buttons: { cancel: false, confirm: false }, timer: 3000
      });
      this.isLoading = false;
    });

  }

}
