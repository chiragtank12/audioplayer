import { Component, OnInit } from '@angular/core';
import { AudioService } from '../../services/audio.service';
import { CloudService } from '../../services/cloud.service';
import { StreamState } from '../../interfaces/stream-state';
import { MatSliderChange } from '@angular/material';
import { Subscription } from 'rxjs'; 
import { GlobalPlayerService } from 'src/app/services/global-player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
// export class PlayerComponent implements OnInit{
  
  export class PlayerComponent {
  files: Array<any> = [];
  state: StreamState;
  currentFile: any = {};

  isAutoPlayNextSong?: Subscription;
  
  autoTicks = false;  
  max = 100;
  min = 0; 
  step = 1;
  thumbLabel = true;
  volumeUpDownNumber = 0; 
  tickInterval = 1;
 
  constructor(public globalPlayerService:GlobalPlayerService){
  }
  // constructor(private audioService: AudioService, cloudService: CloudService,
  //   private globalPlayerService:GlobalPlayerService
  //   ) { 
  //   cloudService.getFiles().subscribe(files => {
  //     this.files = files;
  //   });
 
  //   this.audioService.getState()
  //     .subscribe(state => {
  //       this.state = state;
  //     });
  // }

  // ngOnInit(){
  //   this.audioService.isAutoPlayNextSong.subscribe(event => { 
  //      this.autoPlayNextSong(event)
  //   });
  // }

  // playStream(url, isDefault?:boolean) { 
  //   this.audioService.playStream(url)
  //     .subscribe(events => {
        
  //       if(isDefault == true){
  //       this.audioService.audioObj.volume = 0;
  //       this.state.isMute = true; 
  //       isDefault = false; 
  //       } 
  //     });
  // }

  // openFile(file, index, isDefault?:boolean) {
  //   this.currentFile = { index, file };
  //   this.audioService.stop();
  //   this.playStream(file.url, isDefault);
  // }

  // pause() {
  //   this.audioService.pause();
  // }

  // play() {  
  //   const index =  this.currentFile.index || 0; 
  //   const file = this.files[index];
  //   if(this.currentFile.index === undefined){
  //     this.openFile(file, index, true); 
  //   }
  //   else{
  //     this.audioService.play();
  //   }
  // }

  // stop() {
  //   this.audioService.stop();
  // }

  // next() {  
  //   const index =  this.currentFile.index + 1; 
  //   const file = this.files[index];
  //   this.openFile(file, index);
  // }

  // previous() {
  //   const index = this.currentFile.index - 1;
  //   const file = this.files[index];
  //   this.openFile(file, index);
  // }

  // isFirstPlaying() {
  //   return this.currentFile.index === 0;
  // }

  // isLastPlaying() {
  //   return this.currentFile.index === this.files.length - 1;
  // }

  // onSliderChangeEnd(change) { 
  //   this.audioService.seekTo(change.value);
  // }

  // muteAudio(){
  //   this.audioService.mute();
  // }

  // unMuteAudio(){
  //   this.audioService.unmute();
  // }

  // onChangeVolumeControl(event: MatSliderChange){  
  //   if(this.volumeUpDownNumber === 0){
  //     this.muteAudio();
  //   }
  //   else{ 
  //     this.audioService.voulumControl(this.volumeUpDownNumber);
  //   } 
  // }


  // autoPlayNextSong(isNextPlay:boolean){ 
  //   this.next();
  // }


}
