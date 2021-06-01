import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, private http: HttpClient) { }
  title: any = '';
  // tslint:disable-next-line:variable-name
  image_type: any = '';
  id: any = '';
  filesToUpload: Array<File> = [];
  @Output() productImage = new EventEmitter<any>();
  res1: any;
  ngOnInit() {

  }

  fileChangeEvent(event: any) {
    this.filesToUpload = event.target.files as Array<File>;
    console.log(this.filesToUpload);
  }

  upload() {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;

    // console.log(files);

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < files.length; i++) {

      formData.append('image', files[i], files[i].name);
      // console.log(files[i]);
      // formData.append('image', files[i]);
      // formData.append('labelName', 'test');
      // formData.append('formPart', 'test');
      // console.log(JSON.stringify(formData));
    }

    // formData.forEach((value, key) => {
    //   console.log(key+" "+ value);
    // });

    // tslint:disable-next-line:max-line-length
    // const headers = new HttpHeaders({ 'Content-Type': 'undefined' });
    this.http.post(`https://api.grostep.com/v2/imageuploadapi/${this.image_type}/${this.id}`, formData).pipe(
      tap(data => {
      }),
      map((fileData: any) => {
        return fileData;
       })
    )
    .subscribe((data: any) => {
      console.log(data.product);
      this.productImage.emit(data.product);
      this.activeModal.close('Close click');
      // this.uploaded.emit(data);
    });
  }


}
