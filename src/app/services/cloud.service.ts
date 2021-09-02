import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CloudService {
  files: any = [
    // tslint:disable-next-line: max-line-length
    {
      url: "http://music.softcube.co.in/storage/track_media/QcMzoDdrJKwTpBY5BmHEhQXEs6ycZgOHw4oDasSN.mp3",
      //url: 'https://ia801504.us.archive.org/3/items/EdSheeranPerfectOfficialMusicVideoListenVid.com/Ed_Sheeran_-_Perfect_Official_Music_Video%5BListenVid.com%5D.mp3', 
      img: '../assets/artist/arijit.jpg',
      name:'Music 1',
      artist: ' Ed Sheeran',
      isRepeat:false
    },
    {
      // tslint:disable-next-line: max-line-length
      //   url: 'https://ia801609.us.archive.org/16/items/nusratcollection_20170414_0953/Man%20Atkiya%20Beparwah%20De%20Naal%20Nusrat%20Fateh%20Ali%20Khan.mp3',
      url: "http://music.softcube.co.in/storage/track_media/bwdJO7Tk61JOyCH2VhTWIriHehQdKwFTunLahAR9.mp3",
      name: 'Music 2',
      img: '../assets/artist/atif.jpg', 
      artist: 'Nusrat Fateh Ali Khan',
      isRepeat:false
    },
    {
      url: "http://music.softcube.co.in/storage/track_media/zHGtpVRZb44SQcvhllH42ACa7Br4WAnEMNJUTlSs.mp3", 
    //  url: 'https://ia801503.us.archive.org/15/items/TheBeatlesPennyLane_201805/The%20Beatles%20-%20Penny%20Lane.mp3',
      name: 'Music 3',
      img: '../assets/artist/rock.jpg', 
      artist: 'The Beatles',
      isRepeat:false
    },
    {
      url: "http://music.softcube.co.in/storage/track_media/aujtXy7ojHKFnBNajaLBWitaANSjKPk7RrqSEd6t.mp3",  
      name: 'Music 4',
      img: '../assets/artist/king.jpg', 
      artist: 'The Beatles',
      isRepeat:false
    }
  ];

  getFiles() {
    return of(this.files);
  }
}