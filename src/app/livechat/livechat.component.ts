import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'; 
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

@Component({
  selector: 'app-livechat',
  templateUrl: './livechat.component.html',
  styleUrls: ['./livechat.component.sass']
})
export class LivechatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.greetings= [{"name":"abhdi","description":"df"}];
    this.showConversation=true;
  }

  public greetings= [{"name":"abhdi","description":"df"}];
  public showConversation: boolean = false;
  public ws: any;
  public name= new FormControl(''); 
  public disabled: boolean;

  connect() {
    let socket = new WebSocket("ws://localhost:8085/greeting");
    this.ws = Stomp.over(socket);
    let that = this;
    this.ws.connect({}, function(frame) {
      that.ws.subscribe("/errors", function(message) {
        alert("Error " + message.body);
      });
      that.ws.subscribe("/topic/reply", function(message) {
        console.log(message)
        that.showGreeting(message.body);
      });
      that.disabled = true;
    }, function(error) {
      alert("STOMP error " + error);
    });
  }

  disconnect() {
    if (this.ws != null) {
      this.ws.ws.close();
    }
    this.setConnected(false);
    console.log("Disconnected");
  }

  sendName() {
    let data = JSON.stringify({
      'name' : this.name.value
    })
    console.log(data);
    this.ws.send("/app/message", {}, data);
  }

  showGreeting(message) {
    this.showConversation = true;
    console.log("hello " + message);
    this.greetings=JSON.parse(message);
  }

  setConnected(connected) {
    this.disabled = connected;
    this.showConversation = connected;
    this.greetings = [];
  }
}
