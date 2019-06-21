import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  favorites:any = [];

  constructor(private storage: Storage, private iab: InAppBrowser, private socialSharing: SocialSharing) { }

  ngOnInit() {
    this.getStorage();
  }

  getStorage() {        
    this.storage.get('favorites').then((val) => {
      console.log(val);
     this.favorites = val;
     console.log(this.favorites);
    });
    console.log(this.favorites);
  }

  goUrl(url:string) {
    const browser = this.iab.create(url);
    browser.show();
  }

  share(article: any) {
    this.socialSharing.share(article.title, null, null, article.url).then(() => {
      // Success!
    }).catch((err) => {
      // Error!
      alert(err);
    });
  }
}
