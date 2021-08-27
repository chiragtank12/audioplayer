import { Component, OnInit } from '@angular/core';
import { GlobalPlayerService } from 'src/app/services/global-player.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  constructor(private globalPlayerService: GlobalPlayerService) { }

  ngOnInit() {
  }

}
