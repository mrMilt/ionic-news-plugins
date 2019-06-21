import { Component } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Storage } from '@ionic/storage';
import { Article } from '../class/article';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  obj: any;
  articles:any[] = [];
  favorites:any[] = [];

  constructor(private noticiasService: NoticiasService, private iab: InAppBrowser, private socialSharing: SocialSharing, private storage: Storage) { }

  ngOnInit() {
    this.getAllNews();
  }

  getAllNews() {
    this.noticiasService.getNews('').subscribe(
      data => {
        this.obj = data;
        console.log(this.obj.articles[0].author);
        this.articles = this.obj.articles;
    } 
    );
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
  
  store(article: any) {
    this.favorites.push(article);
    this.storage.set('favorites', this.favorites);
  }
}
