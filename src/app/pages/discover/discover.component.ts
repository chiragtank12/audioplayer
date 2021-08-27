import { Component, OnInit } from '@angular/core';
import { GlobalPlayerService as CommonService } from 'src/app/services/global-player.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent implements OnInit {

  constructor(private discoverService: CommonService) { }

  ngOnInit() {
  }

}
