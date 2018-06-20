import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  copyright = "@crubille thibault"
  tag ='marseille';
  key='1a659e5c0a8e9c4a946adc4745c102fa';
  photos:any;
  /*
  farm='';
  serveur ='';
  id='';
  secret='';

  */

  /*
  nouveau_mot_cle() : void{
    console.log("le nouveau mot est "+this.tag);
  }*/

  constructor(private http: Http) { }

  private handleError(error : any): Promise<any>{
    console.error('An error occured',error);
    return Promise.reject(error.message || error);
  }

  getPhotos(): Promise<any>{
    let url =
    "https://api.flickr.com/services/rest?nojsoncallback=1&method=flickr.photos.search&api_key="+this.key+"&tags="+this.tag+"&format=json";

    return this.http.get(url).toPromise().then(response => response.json()).catch(this.handleError);

  }

  nouveau_mot_cle():void{
    this.getPhotos().then(resp => this.photos = resp.photos);
  }

  getPhotoUrl(photo: any) : string{
    let url = "http://farm<farm>.static.flickr.com/<server>/<id>_<secret>_s.jpg";
    return url;
  }
}


