import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { SMS } from '@ionic-native/sms/ngx'

@Component({
  selector: 'app-play',
  templateUrl: './play.page.html',
  styleUrls: ['./play.page.scss'],
})
export class PlayPage implements OnInit {
  combDisp= ''
  rumb = ''
  strght = ''
  comb1: string = "";
  comb2: string = "";
  comb3: string = "";  
  straight: string = "";
  rumble:string ="";
  defaultvalue = 0;
  items:any=[]

  constructor(private alertCtrl: AlertController, private sms: SMS) { }

  ngOnInit() {
    if(localStorage.getItem('items')){
      this.items = JSON.parse(localStorage.getItem('items'))
    }
  }

  addItem(){
    this.comb1 = this.comb1;
    this.comb2 = this.comb2;
    this.comb3 = this.comb3;
    this.straight = this.straight;
    this.rumble = this.rumble;
    if (this.comb1=="") {
     this.showAlert("Empty field not allowed.");    
    }else{
    let obj = {      
      combDisp:  this.comb1  + '' + this.comb2  + '' + this.comb3,
      strght: this.straight, rumb : this.rumble,
      isDone: false
    }
    this.items.unshift(obj)
    localStorage.setItem('items', JSON.stringify(this.items))
  }
  }
     
  deleteItem(ind){
    this.items = this.items.filter((c, index)=> index !=ind)
    localStorage.setItem('items', JSON.stringify(this.items))
  }

  async showAlert(strMsg){
    await this.alertCtrl.create({      
      header: "Warning",
      message: strMsg,
      buttons: ['OK']
    }).then(res => res.present());
  }

  sendSMS(){
    this.sms.send('+639176272798','Hello World');
  }

}
