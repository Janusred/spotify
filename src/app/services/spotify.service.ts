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
              'Authorization': 'BQDgDF0xaEcR7aPCv5wYyKrlNahsn6wtfoxkRfkBmpPegeeScK8mTkHl2w7VRaaEr_Nmdrp2sr56q6mhUr0'
            });

return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers});
 
            }
    }


