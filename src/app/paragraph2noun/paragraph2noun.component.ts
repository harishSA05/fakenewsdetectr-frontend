import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from "@angular/forms";
import { Para2nounService } from "src/app/services/para2noun.service";
import { Voice2textService } from "src/app/services/voice2text.service";
import { Image2textService } from "src/app/services/image2text.service";
import { CookieService } from "ngx-cookie-service";
// import { GaugeSegment, GaugeLabel } from 'ng-gauge';


class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

class AudioSnippet {
  constructor(public src: string, public file: File) {}
}
@Component({
  selector: "app-paragraph2noun",
  templateUrl: "./paragraph2noun.component.html",
  styleUrls: ["./paragraph2noun.component.scss"]
})
export class Paragraph2nounComponent implements OnInit {
  // public canvasWidth = 300
  // public needleValue = 65
  // public centralLabel = ''
  // public name = 'Gauge chart'
  // public bottomLabel = '65'
  // public options = {
  //     hasNeedle: true,
  //     outerNeedle: false,
  //     needleColor: "green",
  //     needleStartValue: 0,
  //     needleUpdateSpeed: 1000,
  //     arcColors: ["rgb(255,84,84)","rgb(239,214,19)","rgb(61,204,91)"],
  //     arcDelimiters: [30,70],
  //     rangeLabel: ["0","100"],
  //     centralLabel: "NewsWorthiness",
  //     rangeLabelFontSize: 10,
  // }
  fakenewsform: FormGroup;
  formData: any;
  clouduploadimage: any = "Upload Image source of news";
  clouduploadaudio: any = "Upload Audio source of news";
  formDatas: any;
  ta: boolean = false;
  textValue: string = "";
  selectedFile: ImageSnippet;
  selectedaudioFile: AudioSnippet;
  textarea = new FormControl();
  imagevalidator: boolean = false;
  audiovalidator: boolean = false;
  urlvalidator: boolean = false;
  // paravalidator:boolean =false;
  percent:any =0;
  quality:string = "News Status";
  subjects: any[] = [];
  imageInput = new FormControl();
  audioinput = new FormControl();
  url = new FormControl();
  newsfromaudio: any;
  newsfromtext: any;
  newsfromimage: any;
  newslength: number = 0;
  newsArray: any[] = [];
  newsArrayimage: any[] = [];
  newsArrayaudio: any[] = [];
  gotnews: boolean = false;
  gotimagenews: boolean = false;
  gotaudionews: boolean = false;
  gottextnews: boolean = false;
  textnewsArray: any;

  constructor(
    private P2Nservice: Para2nounService,
    private storage: CookieService,
    private fb: FormBuilder,
    private Image2Text: Image2textService,
    private Voice2textService: Voice2textService
  ) {
    this.storage.set("login", "0");
  }

  ngOnInit() {
    this.storage.set("login", "0");
    this.fakenewsform = this.fb.group({
      textarea: ["", Validators.required],
      url: ["", Validators.required]
    });
  }

  changeimagename(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();
    if(file){
    this.clouduploadimage = file.name;
    this.imagevalidator = true;
    }
  }
  changeaudioname(audioInput: any) {
    const file: File = audioInput.files[0];
    const reader = new FileReader();
    if(file){
    this.clouduploadaudio = file.name;
    this.audiovalidator = true;
    console.log(file.size);
    }
  }

  getdata(para, url, imageInput: any, audioinput: any) {
    this.newsArray = [];
    this.newsArrayimage = [];
    this.newsArrayaudio = [];
    this.newslength = 0;

    if (this.imagevalidator == true) {
      const file: File = imageInput.files[0];
      const reader = new FileReader();

      reader.addEventListener("load", (event: any) => {
        this.selectedFile = new ImageSnippet(event.target.result, file);

        this.Image2Text.uploadImage(this.selectedFile.file).subscribe(res => {
            console.log(res);
            this.newsArrayimage = JSON.parse(res.data)
            //.articles;
            console.log("🐱‍🏍🐱‍🏍🐱‍🏍News from image");
            this.newslength += this.newsArrayimage.length;
            this.runwheel();
            this.gotnews = true;
            this.gotimagenews = true;
        });
        this.clouduploadimage = [file.name];
      });

      reader.readAsDataURL(file);
    }
    if (this.audiovalidator == true) {

        const files: File = audioinput.files[0];
      const readers = new FileReader();

      readers.addEventListener("load", (event: any) => {
        this.selectedaudioFile = new AudioSnippet(event.target.result, files);
        this.Voice2textService.uploadAudio(
          this.selectedaudioFile.file
        ).subscribe(datas => {
          console.log("audio");
          console.log(datas);
          this.newsArrayaudio = JSON.parse(datas.data)
          //.articles;
          console.log("🐱‍🏍🐱‍🏍🐱‍🏍News from audio");
          this.newslength += this.newsArrayaudio.length;
          this.runwheel();
          this.gotnews = true;
          this.gotaudionews = true;
        });
      });

      readers.readAsDataURL(files);
      this.clouduploadaudio = [files.name];
      
    }

    if (this.textarea.value !== null) {
        this.P2Nservice.getNouns(this.textarea.value).subscribe(data => {
          var obj = JSON.parse(data.data);
          console.log(obj);
          this.textnewsArray = JSON.parse(data.data);
          console.log(this.textnewsArray);
          //.articles;
          console.log("🐱‍🏍🐱‍🏍🐱‍🏍News from text");
          this.newslength += this.textnewsArray.length;
          console.log(this.newslength+" : length");
          this.runwheel();
          this.gotnews = true;
          this.gottextnews = true;
        });
      
    }
  }

  runwheel() {
    console.log("🎈🎈🎈News length " + this.newslength);
    if(this.newslength ==0){
      this.percent = 0;
      this.quality = "It's a fake news.";
 }
    else if( this.newslength >= 2 && this.newslength < 10){
      this.percent = 30;
      this.quality = "May be Fake";
    }else if(this.newslength >= 10 && this.newslength <20){
        this.percent = 60;
        this.quality = "True.";
    }
    else if(this.newslength >= 20 && this.newslength <30){
      this.percent = 70;
      this.quality = "True";
  }
    else if(this.newslength >= 30){
        this.percent = 90;
        this.quality = "It's a Real one";
    }
    else if(this.newslength <2){
         this.percent = 10;
         this.quality = "It's a fake news.";
    }
  }
}



// processaudioFile(audioinput: any) {
//   // upload audio code goes here
//   const files: File = audioinput.files[0];
//   const readers = new FileReader();

//   readers.addEventListener('load', (event: any) => {

//     this.selectedaudioFile = new AudioSnippet(event.target.result, files);

//     this.Voice2textService.uploadAudio(this.selectedaudioFile.file).subscribe(
//      data => {
//       this.subjects = [...this.subjects,...data.data];
//      })
//     // this.formDatas = new FormData();
//     // this.formDatas.append('files',files, files.name);
//     // console.log(this.formData);
//   });

//   readers.readAsDataURL(files);
//   this.clouduploadaudio=[files.name];

// }

// processFile(imageInput: any) {
//   // upload image code goes here
//   const file: File = imageInput.files[0];
//   const reader = new FileReader();

//   reader.addEventListener('load', (event: any) => {

//     this.selectedFile = new ImageSnippet(event.target.result, file);

//     this.Image2Text.uploadImage(this.selectedFile.file).subscribe(
//      data => {
//       this.subjects = [...this.subjects,...data.data];
//      })
//     // this.formData = new FormData();
//     // this.formData.append('image',image, image.name);
//     //   console.log(this.formData);
//       this.clouduploadimage=[file.name];

//   });

//   reader.readAsDataURL(file);

// }

// changeparavalidator(){
//   this.paravalidator=true;
// }
