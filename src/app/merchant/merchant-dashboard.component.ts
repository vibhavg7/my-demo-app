import { Component, OnInit } from '@angular/core';
import { MerchantService } from './merchant.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { tap, distinctUntilChanged, debounceTime, switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { ErrorTracker } from '../shared/errorTracker';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImageUploadComponent } from 'src/app/products/image-upload/image-upload.component';
import {NgbDate, NgbCalendar, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-merchant-dashboard',
  templateUrl: './merchant-dashboard.component.html',
  styleUrls: ['./merchant-dashboard.component.css']
})
export class MerchantDashboardComponent implements OnInit {

  searchCriteriaForm: FormGroup;
  hoveredDate: NgbDate | null = null;

  fromDate: NgbDate | null;
  toDate: NgbDate | null;
  // model1: NgbDate;
  // model: NgbDate;
  constructor(
    private calendar: NgbCalendar, public formatter: NgbDateParserFormatter,
    private merchantService: MerchantService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private modalService: NgbModal) {
    this.searchCriteriaForm = this.formBuilder.group({
      searchCriteria: ['']
    });
    this.fromDate = calendar.getNext(calendar.getToday(), 'd', -30);
    this.toDate = calendar.getToday();
  }

  pageTitle: any = 'Stores Dashboard';
  storetotalcount: any;
  displaytype: any = 'AM';
  stores: any = [];
  filterBy: any = '';
  currentPage = 1;
  pageSize = 20;
  errorMessage: any;
  imageWidth = 80;
  imageHeight = 80;
  imageMargin = 2;

  ngOnInit() {
    const resolvedData = this.activatedRoute.snapshot.data.resolvedMerchants;

    if (resolvedData instanceof ErrorTracker) {
      this.errorMessage = resolvedData.errorMessage;
    } else {
      this.storetotalcount = resolvedData.store_total_count.stores_count;
      this.stores = resolvedData.store;
      // const starttime = this.stores.store_opening_time.split(':');
      // const endtime = this.stores.store_closing_time.split(':');

      // console.log(starttime);
      // console.log(endtime);
    }
    this.onChanges();
  }

  onChanges() {
    this.searchCriteriaForm.get('searchCriteria').valueChanges.pipe(tap(data => {
      // console.log(data);
    }), distinctUntilChanged(), debounceTime(200),
      switchMap(query => (this.filterBy = query, this.merchantService.fetchAllStores(this.currentPage, this.pageSize, query)))
    )
      .subscribe((res: any) => { this.storetotalcount = res.store_total_count.stores_count; this.stores = res.store; });
  }

  // uploadImage(storeid: any) {
  //   const modalRef: any = this.modalService.open(ImageUploadComponent);
  //   modalRef.componentInstance.title = 'Image Upload';
  //   modalRef.componentInstance.id = storeid;
  //   modalRef.componentInstance.image_type = 'merchants';
  //   modalRef.componentInstance.productImage.subscribe((data) => {
  //     console.log(data);
  //     // this.stores.filter((cat) => cat['store_category_id'] == data['store_category_id'])['store_image_url'] = data['image_url'];
  //     // console.log(this.storeCategories);
  //   });
  // }

  currentPageFn(page) {
    // console.log(page + "-" + this.filterBy+ "-"+this.pageSize);
    this.merchantService.fetchAllStores(page, this.pageSize, this.filterBy)
      .subscribe((data) => {
        this.storetotalcount = data.store_total_count.stores_count;
        this.stores = data.store;
        // console.log(this.store_total_count);
      });
  }

  onValueChange(filterBy) {
    // alert(filterBy);
    // console.log(filterBy);
    // this.filterBy = filterBy;
    // this._merchantService.searchStoreByName(this.currentPage,this.pageSize,this.filterBy)
    // .subscribe((data)=>{
    //   console.log(data);
    // })
  }

  uploadImage(store_id: any) {
    const modalRef = this.modalService.open(ImageUploadComponent);
    modalRef.componentInstance['title'] = 'Image Upload';
    modalRef.componentInstance['id'] = store_id;
    modalRef.componentInstance['image_type'] = 'merchants';
    modalRef.componentInstance['productImage'].subscribe((data) => {
      console.log(data);
      // this.store = data;
      // this.stores.filter((cat) => cat['store_category_id'] == data['store_category_id'])['store_image_url'] = data['image_url'];
      // console.log(this.storeCategories);
    });
  }

  deleteStore(storeId) {
    if (confirm('Are you sure to delete ')) {
      this.merchantService.deleteStore(storeId).subscribe((data) => {
        console.log(data);
      });
    }
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }

  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
  }

  applyFilter() {
    // const jsDate = new Date(this.fromDate.year, this.fromDate.month - 1, this.fromDate.day).toUTCString();
    const jsDateIso = new Date(this.fromDate.year, this.fromDate.month - 1, this.fromDate.day).toISOString();
    const jsDate1 = new Date(this.toDate.year, this.toDate.month - 1, this.toDate.day).toISOString();
    console.log(this.fromDate);
    console.log('jsDateIso' + jsDateIso);
    console.log(this.toDate);
    console.log(jsDate1);
  }

}
