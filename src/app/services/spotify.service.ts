import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

constructor(private http: HttpClient){
    console.log('Januslds');
   }
          getNewReleases() { 
            const headers = new HttpHeaders({
              'Authorization': 'Bearer BQAbZfFB0iqAs5D0blKpWRS50hXzfDZFMN2phhO2tnYjce3BSipjWUlpVoTsiGtlTtg5x5QWnbjzUGTJacg'
            });

this.http.get('https://api.spotify.com/v1/search?q=Imagine%20Dragons&type=track%2Cartist&market=US&limit=10&offset=5', { headers})
            .subscribe( rolas => {
              console.log(rolas);
            })
    }

}
