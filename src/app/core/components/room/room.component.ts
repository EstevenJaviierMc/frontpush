import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import io from "socket.io-client";
import Peer from "simple-peer";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  peers = [];
  socketRef;
  userVideo;
  peersRef = [];
  roomID = this.route.snapshot.params['roomID'];

  videoConstraints = {
    height: window.innerHeight / 2,
    width: window.innerWidth / 2
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.socketRef = io.connect('https://frontpush.herokuapp.com');
    navigator.mediaDevices.getUserMedia({ video: this.videoConstraints, audio: true }).then(stream => {
      this.userVideo.srcObject = stream;
      this.socketRef.emit("join room", this.roomID);
      this.socketRef.on("all users", users => {
        const peers = [];
        users.forEach(userID => {
          const peer = this.createPeer(userID, this.socketRef.id, stream);
          this.peersRef.push({
            peerID: userID,
            peer,
          })
          peers.push(peer);
        })
        this.peers = peers;
      })
    })
  }

  createPeer(userToSignal, callerID, stream) {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream
    });

    peer.on("signal", signal => {
      this.socketRef.emit("sending signal", { userToSignal, callerID, signal })
    })

    return peer;
  }
}
