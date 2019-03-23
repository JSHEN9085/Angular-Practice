import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})

export class ServerComponent {
  serverId = 1; //declaring variable here, instead of key: value
  serverStatus = "online";

  genServerStatus() {
    return this.serverStatus;
  }
}
