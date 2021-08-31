import { EventEmitter, Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as moment from 'moment';
import { StreamState } from '../interfaces/stream-state'; 
import { GlobalPlayerService } from './global-player.service';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  
  currentSongIndex:number;
  lastSongIndex:number;
  private stop$ = new Subject();
  public audioObj = new Audio();
  public isAutoPlayNextSong : EventEmitter<boolean> = new EventEmitter<boolean>(); 

  // audioEvents = [
  //   'ended', 'error', 'play', 'playing', 'pause', 'timeupdate', 'canplay',   'loadedmetadata', 'loadstart', 'addTextTrack'
  // ];

  audioEvents = [
    'ended', 'error', 'play',  'playing', 'pause', 'timeupdate', 'canplay',   'loadedmetadata',
    'seeking','loadstart','canplaythrough', 'waiting'
  ];


  constructor(){

  }

 
  private state: StreamState = {
    playing: false,
    readableCurrentTime: '',
    readableDuration: '',
    duration: undefined,
    currentTime: undefined,
    canplay: false,
    error: false,
    isMute: false,
    isBuffering:false,
  };

  private streamObservable(url) {
    return new Observable(observer => {
      // Play audio
      this.audioObj.src = url;
      this.audioObj.load();
      this.audioObj.play();
      
      const handler = (event: Event) => {   
        this.updateStateEvents(event);
        observer.next(event);
      };
  
      this.addEvents(this.audioObj, this.audioEvents, handler);
      return () => { 
        this.audioObj.pause();
        this.audioObj.currentTime = 0; 
        this.removeEvents(this.audioObj, this.audioEvents, handler); 
        this.resetState();
      
    }
    });
  }

  private addEvents(obj, events, handler) {
    events.forEach(event => {
      obj.addEventListener(event, handler);
    });
  }

  private removeEvents(obj, events, handler) {
    events.forEach(event => {
      obj.removeEventListener(event, handler);
    });
  }

  playStream(url) { 
    return this.streamObservable(url).pipe(takeUntil(this.stop$));
  }

  play() {
    this.audioObj.play();
  }

  pause() {
    this.audioObj.pause();
  }

  stop() {
    this.stop$.next();
  }

  seekTo(seconds) {
    this.audioObj.currentTime = seconds;
  } 

  mute() { 
    this.audioObj.volume = 0;
    this.state.isMute = true; 
  }

  unmute() { 
    this.audioObj.volume = 1;
    this.state.isMute = false;
  } 

  voulumControl(volumNumber:number) {  
    this.audioObj.volume =(volumNumber/  100); 
    this.state.isMute = false;
  }

  formatTime(time: number, format: string = 'HH:mm:ss') {
    const momentTime = time * 1000;
    return moment.utc(momentTime).format(format);
  }

  private stateChange: BehaviorSubject<StreamState> = new BehaviorSubject(this.state);

  private updateStateEvents(event: Event): void {
    switch (event.type) {
      case 'loadstart':
        this.isBuffering(event);
        break; 
      case 'seeking': 
        break;
      case 'canplaythrough':
          this.isBuffering(event);
          break; 
      case 'waiting':
            this.state.isBuffering = true;
            this.isBuffering(event);
            break; 
      case 'canplay':
        this.state.duration = this.audioObj.duration;
        this.state.readableDuration = this.formatTime(this.state.duration);
        this.state.canplay = true; 
        break;
      case 'playing':
        this.state.playing = true;
        break;
      case 'pause':
        this.state.playing = false;
        break;
      case "ended": 
        this.state.playing = false;
        
        if(this.currentSongIndex  != this.lastSongIndex) {
          this.nextSong();
        }    
      case 'timeupdate':
        this.state.currentTime = this.audioObj.currentTime;
        this.state.readableCurrentTime = this.formatTime(this.state.currentTime);
        break;  
      case 'error':  
        this.getError(event);
        this.resetState();
        this.state.error = true;
        break;

    }
    this.stateChange.next(this.state);
  }

  public  resetState() {
    this.state = {
      playing: false,
      readableCurrentTime: '',
      readableDuration: '',
      duration: undefined,
      currentTime: undefined,
      canplay: false,
      error: false,
      isMute: false,
      isBuffering:false
    };
  }

  getState(): Observable<StreamState> {
    return this.stateChange.asObservable();
  }

  nextSong(){
  this.isAutoPlayNextSong.emit(true);  
   }

  getError(event:any):void{
    alert('error event');
  } 

  isBuffering(event:any):void{ 
    if(event.type === 'waiting' || event.type === 'loadstart'){
      this.state.isBuffering = true;
    }
    else{
      this.state.isBuffering = false;
    }
    this.stateChange.next(this.state);
  } 

}