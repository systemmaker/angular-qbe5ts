import { Component, OnInit } from '@angular/core';
import { Observable, of } from "rxjs";
@Component({
  selector: 'app-file-output',
  templateUrl: './file-output.component.html',
  styleUrls: ['./file-output.component.css']
})
export class FileOutputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   fakeValidateUserData() {
    return of({
      BEGIN: "VCARD",
      FN: "John Doe",
      N: "Doe;John;;;",
      END: "VCARD"
    });
  }

  //

  memo: string = `BEGIN:VCARD
VERSION:3.0
REV:2017-08-31T17:00:15.850Z
N;CHARSET=utf-8:Desloovere;Jeroen;;;
FN;CHARSET=utf-8:Jeroen Desloovere
ORG;CHARSET=utf-8:Siesqo
TITLE;CHARSET=utf-8:Web Developer
ROLE;CHARSET=utf-8:Data Protection Officer
EMAIL;INTERNET:info@jeroendesloovere.be
TEL;PREF;WORK:1234121212
TEL;WORK:123456789
tcode;Belgium
URL:http://www.jeroendesloovere.be
END:VCARD`;
  private setting = {
    element: {
      dynamicDownload: null as HTMLElement
    }
  };

  dynamicDownloadTxt() {
    this.fakeValidateUserData().subscribe(res => {
      this.dyanmicDownloadByHtmlTag({
        fileName: "My Report.vcf",
        text: this.memo//JSON.stringify(res)
      });
    });
  }

  dynamicDownloadJson() {
    this.fakeValidateUserData().subscribe(res => {
      this.dyanmicDownloadByHtmlTag({
        fileName: "My Report.json",
        text: JSON.stringify(res)
      });
    });
  }

  private dyanmicDownloadByHtmlTag(arg: { fileName: string; text: string }) {
    if (!this.setting.element.dynamicDownload) {
      this.setting.element.dynamicDownload = document.createElement("a");
    }
    const element = this.setting.element.dynamicDownload;
    const fileType =
      arg.fileName.indexOf(".json") > -1 ? "text/json" : "text/plain";
    element.setAttribute(
      "href",
      `data:${fileType};charset=utf-8,${encodeURIComponent(arg.text)}`
    );
    element.setAttribute("download", arg.fileName);

    var event = new MouseEvent("click");
    element.dispatchEvent(event);
  }
}