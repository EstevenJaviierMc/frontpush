import { Component, OnInit } from '@angular/core';
import { v1 as uuid } from "uuid";

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  create() {
    const id = uuid();
    console.log(`/room/${id}`);

  }

}
