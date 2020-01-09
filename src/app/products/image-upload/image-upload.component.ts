import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
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

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = fileInput.target.files as Array<File>;
  }

  upload() {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < files.length; i++) {
      formData.append('image', files[i], files[i].name);
    }
    // tslint:disable-next-line:max-line-length
    this.http.post(`http://ec2-18-188-251-155.us-east-2.compute.amazonaws.com:3000/imageuploadapi/${this.image_type}/${this.id}`, formData).pipe(
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
