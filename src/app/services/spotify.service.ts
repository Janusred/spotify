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
              'Authorization': 'Bearer BQCLnWo-1KgRCb3HD24r9UveScfxsSm5nw_JXbZpwAkCkV-W1XlCi04UqrIsBQ1CTg5rJ12OLGY8OdcB374'
            });

return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers});
 
            }
    }


