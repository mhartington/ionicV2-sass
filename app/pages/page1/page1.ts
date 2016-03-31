import {Page, NavController} from 'ionic-angular';
import {Page2} from '../page2/page2';

@Page({
  templateUrl: 'build/pages/page1/page1.html',
})
export class Page1 {
  constructor(
    public nav: NavController
  ) {

  }

  pushPage(){
    this.nav.push(Page2)
  }
}
