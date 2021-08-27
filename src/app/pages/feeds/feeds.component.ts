import { Component, OnInit } from '@angular/core';
import { GlobalPlayerService as CommonService } from 'src/app/services/global-player.service';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss']
})
export class FeedsComponent implements OnInit {

  constructor(private discoverService: CommonService) { }

  ngOnInit() {
  }

}
