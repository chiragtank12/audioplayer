import { Injectable, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material';
import { Subscription } from 'rxjs/internal/Subscription';
import { StreamState } from '../interfaces/stream-state';
import { AudioService } from './audio.service';
import { CloudService } from './cloud.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalPlayerService  {
  files: Array<any> = []; 
  state: StreamState;
    currentFile: any = {};
  // /currentFile: any; 

  
  autoTicks = false;  
  max = 100;
  min = 0; 
  step = 1;
  thumbLabel = true;
  volumeUpDownNumber = 0; 
  tickInterval = 1;

  constructor(private audioService: AudioService, cloudService: CloudService,
    
    ) {  

    cloudService.getFiles().subscribe(files => {
      this.files = files;
    });
 
    this.audioService.getState()
      .subscribe(state => {
        this.state = state;
      });

      this.audioService.isAutoPlayNextSong.subscribe(event => { 
         this.autoPlayNextSong(event)
      });
  }
 
  
  playStream(url, isDefault?:boolean) { 

    this.audioService.playStream(url)
      .subscribe((events: Event) => {
      
        if(isDefault == true){
          this.audioService.audioObj.volume = 0;
          this.state.isMute = true; 
          isDefault = false; 
        } 
      });
  }

  openFile(file, index, isDefault?:boolean) {  
    this.currentFile = { index, file }; 
      this.audioService.stop();
    this.playStream(file.url, isDefault);
  }

  pause() {
    this.audioService.pause();
  }

  play() {  
    const index =  this.currentFile.index || 0; 
    const file = this.files[index];
    if(this.currentFile.index === undefined){
      this.openFile(file, index, true); 
    }
    else{
      this.audioService.play();
    }
  }

  stop() {
    this.audioService.stop();
  }

  autoPlayNextSong(isNextPlay:boolean){    
    this.next(); 
  }

  next() {  
    const index =  this.currentFile.index + 1; 
    const file = this.files[index];
    this.openFile(file, index);
  }

  previous() {
    const index = this.currentFile.index - 1;
    const file = this.files[index];
    this.openFile(file, index);
  }

  isFirstPlaying() {
    return this.currentFile.index === 0;
  }

  isLastPlaying() {
    return this.currentFile.index === this.files.length - 1;
  }

  onSliderChangeEnd(change) { 
    this.audioService.seekTo(change.value);
  }

  muteAudio(){
    this.audioService.mute();
  }

  unMuteAudio(){
    this.audioService.unmute();
  }

  // onChangeVolumeControl(volumeUpDownNumber:number){ 
  // //  const volumeUpDownNumber = event.value || 0; 
  //   if(volumeUpDownNumber === 0){
  //     this.muteAudio();
  //   }
  //   else{ 
  //     this.audioService.voulumControl(volumeUpDownNumber);
  //   } 
  // }
  onChangeVolumeControl(event: MatSliderChange){  
    if(this.volumeUpDownNumber === 0){
      this.muteAudio();
    }
    else{ 
      this.audioService.voulumControl(this.volumeUpDownNumber);
    } 
  }



  
}
