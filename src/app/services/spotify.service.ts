import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

<<<<<<< HEAD
  constructor(private http: HttpClient) { 
    console.log('Spotify Service Created');
  }

  getQuery(query: string){
    
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDk2XF03YpUSwwpWkIfHM22_-Oj2nPzctxP9WSg2mASMF0h1pEyYiGuw5bN9MPeXPzRIkQ5u19cyuPJHJg'
    });

    return this.http.get(url, {headers});
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases')
                .pipe( map( data => data['albums'].items ));
  }
=======
constructor(private http: HttpClient){
    console.log('Januslds');
   }
          getNewReleases() { 
            const headers = new HttpHeaders({
              'Authorization': 'BQDgDF0xaEcR7aPCv5wYyKrlNahsn6wtfoxkRfkBmpPegeeScK8mTkHl2w7VRaaEr_Nmdrp2sr56q6mhUr0'
            });
>>>>>>> a7249e848859f1f129aecc183f5eb9fd40ff3cb7

  getArtists( termino:string ){
    return this.getQuery(`search?q=${ termino }&type=artist&limit=10`)
                .pipe(map( data => data['artists'].items ));
  }

  getArtist(id: string){
    return this.getQuery(`artists/${ id }`);
  }

  getTopTracks(id: string){
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
          .pipe(map(data => data['tracks']));
  }
}
