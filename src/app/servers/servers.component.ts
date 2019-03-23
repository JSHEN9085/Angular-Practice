import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreate = "No server is created";
  serverName = 'test';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }


  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreate = "Server is created, Name is " + this.serverName;
  }

  onUpdateServerName(event) {
    console.log(event.target.value)
  }

}
