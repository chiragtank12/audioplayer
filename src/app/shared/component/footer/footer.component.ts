import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GlobalPlayerService } from 'src/app/services/global-player.service';
import { StreamState } from '../../../interfaces/stream-state';
import { StorageService } from '../../service/storage.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

 
    files: Array<any> = [];
    state: StreamState;
    currentFile?: any = {};
  
    isAutoPlayNextSong?: Subscription;
    
    autoTicks = false;  
    max = 100;
    min = 0; 
    step = 1;
    thumbLabel = true;
    volumeUpDownNumber = 0; 
    tickInterval = 1;
   
    constructor(public globalPlayerService:GlobalPlayerService,
      public storageService:StorageService){
    }

  ngOnInit() {
    
  }

 

}
