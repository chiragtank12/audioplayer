import { Component, OnInit } from '@angular/core';
import { GlobalPlayerService  as CommonService} from 'src/app/services/global-player.service'; 

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})
export class TracksComponent implements OnInit {

  constructor(private trackService : CommonService) { }

  ngOnInit() {
  }

}
