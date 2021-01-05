import { Component, OnInit } from '@angular/core';
import { SmsRetriever } from '@ionic-native/sms-retriever/ngx';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  
  constructor(private smsRetriever: SmsRetriever) { }
  ngOnInit() {
  }


  genHash(){
    this.smsRetriever.getAppHash()
      .then((res: any) => console.log(res))
         .catch((error: any) => console.error(error));
    this.smsRetriever.startWatching()
      .then((res: any) => console.log(res))
      .catch((error: any) => console.error(error));      
  }


  retrieveSMS(){
    console.log('Watching SMS');

    this.smsRetriever.startWatching()
      .then((res:any) => {
        console.log(res);
        const otp = res.Message.toString().substr(4,6);
        alert(`OTP Received - ${otp}`);
      })
      .catch((error:any) => console.error(error));
  }
  
}
