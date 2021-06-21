import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-edit-order-info',
  templateUrl: './edit-order-info.component.html',
  styleUrls: ['./edit-order-info.component.css']
})
export class EditOrderInfoComponent implements OnInit {

  activeDeliveryPersons: any;
  submitted: boolean;
  isChecked = false;
  merchantStatusTypes: any;
  deliveryStatusTypes: any;
  orderStatusTypes: any;
  storeInfoData: any;
  customerInfoData: any;
  invoiceData: any = [];
  disableForm = false;
  errorMessage: any;
  orderId: any;
  editOrderInfoForm: any;
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private orderService: OrderService,
    private formBuilder: FormBuilder) {
    this.editOrderInfoForm = this.formBuilder.group({
      order_id: [''],
      customer_name: [''],
      store_name: [''],
      order_created_date: [''],
      order_last_updated_date: [''],
      voucher_code: [''],
      total_amount: [''],
      discount_amount: [''],
      delivery_fee: [''],
      payable_amount: [''],
      merchant_bill_amount: [''],
      deliver_now: [''],
      type: [''],
      address: [''],
      total_item_count: [''],
      status: [''],
      delivery_slot: [''],
      instructions: [''],
      order_deliveryperson_status: [''],
      isOrderEdit: [''],
      bill_image: [],
      order_merchant_status: [''],
      assinged_delivery_person: [''],
      payment_status: ['']
    });
  }

  ngOnInit(): void {
    this.orderId = this.activatedRoute.parent.snapshot.params.orderId;
    this.invoiceData = this.activatedRoute.snapshot.data.resolvedInvoice.orderInvoice[0];
    this.customerInfoData = this.activatedRoute.snapshot.data.resolvedInvoice.customerInfo[0];
    this.storeInfoData = this.activatedRoute.snapshot.data.resolvedInvoice.storeInfo[0];
    this.orderStatusTypes = this.activatedRoute.snapshot.data.resolvedorderStatusTypes.orderStatusTypes;
    this.deliveryStatusTypes = this.activatedRoute.snapshot.data.resolvedorderStatusTypes.deliveryStatusTypes;
    this.merchantStatusTypes = this.activatedRoute.snapshot.data.resolvedorderStatusTypes.merchantStatusTypes;

    this.activeDeliveryPersons = this.activatedRoute.snapshot.data.resolvedActiveDP.activeDeliveryPersonInfo;

    // console.log(this.activeDeliveryPersons);

    this.editOrderInfoForm.get('order_id').setValue(this.invoiceData.order_id);
    this.editOrderInfoForm.get('voucher_code').setValue(this.invoiceData.coupon_code);
    this.editOrderInfoForm.get('total_amount').setValue(this.invoiceData.total_amount);
    this.editOrderInfoForm.get('payable_amount').setValue(this.invoiceData.payable_amount);
    this.editOrderInfoForm.get('bill_image').setValue(this.invoiceData.bill_image);
    this.editOrderInfoForm.get('delivery_fee').setValue(this.invoiceData.delivery_fee);
    this.editOrderInfoForm.get('delivery_slot').setValue(this.invoiceData.delivery_slot);
    this.editOrderInfoForm.get('deliver_now').setValue(this.invoiceData.deliver_now);
    this.editOrderInfoForm.get('discount_amount').setValue(this.invoiceData.discount_amount);
    this.editOrderInfoForm.get('instructions').setValue(this.invoiceData.instructions);
    this.editOrderInfoForm.get('order_created_date').setValue(this.invoiceData.order_created_date);
    this.editOrderInfoForm.get('order_last_updated_date').setValue(this.invoiceData.order_last_updated_date);
    this.editOrderInfoForm.get('status').setValue(this.invoiceData.order_status);
    this.editOrderInfoForm.get('order_deliveryperson_status').setValue(this.invoiceData.order_deliveryperson_status);
    this.editOrderInfoForm.get('order_merchant_status').setValue(this.invoiceData.order_merchant_status);
    this.editOrderInfoForm.get('type').setValue(this.invoiceData.type);
    this.editOrderInfoForm.get('merchant_bill_amount').setValue(this.invoiceData.merchant_bill_amount);
    this.editOrderInfoForm.get('total_item_count').setValue(this.invoiceData.total_item_count);
    this.editOrderInfoForm.get('payment_status').setValue(this.invoiceData.payment_status);
    this.editOrderInfoForm.get('assinged_delivery_person').setValue(this.invoiceData.assinged_delivery_person);
    this.editOrderInfoForm.get('isOrderEdit').setValue(this.invoiceData.is_order_edit);
    this.editOrderInfoForm.get('customer_name').setValue(this.customerInfoData.customer_name);
    this.editOrderInfoForm.get('store_name').setValue(this.storeInfoData.store_name);
    this.editOrderInfoForm.get('address').setValue(this.customerInfoData.address);

    this.errorMessage = this.activatedRoute.snapshot.data.resolvedInvoice.error;
  }

  get f() { return this.editOrderInfoForm.controls; }

  repairOrder() {
    if (!this.disableForm) {
      this.submitted = true;
      this.disableForm = true;
      if (this.editOrderInfoForm.invalid) {
        this.disableForm = false;
        return;
      }
      const obj = JSON.parse(JSON.stringify(this.editOrderInfoForm.value));

      if (obj.isOrderEdit) {
        console.log('yes');
        obj.payable_amount = +obj.merchant_bill_amount + (+obj.delivery_fee) - (+obj.discount_amount);
      } else {
        console.log('no');
        obj.payable_amount = +obj.total_amount + (+obj.delivery_fee) - (+obj.discount_amount);
      }
      console.log(obj);
      this.orderService.editOrderInfo(obj, this.orderId).subscribe((data: any) => {
        if (+data.status === 200) {
          this.router.navigate(['order']);
        } else {
          alert('Internal Server Error');
          this.disableForm = false;
        }
      },
        (error) => {
          this.errorMessage = error;
          this.disableForm = false;
        });

      // this.getDirtyValues(this.editOrderInfoForm);
    }
  }

  getDirtyValues(form) {
    const dirtyValues = {};
    Object.keys(this.editOrderInfoForm.controls)
      .forEach(key => {
        const currentControl = this.editOrderInfoForm.controls[key];

        if (currentControl.dirty) {
          if (currentControl.controls) {
            dirtyValues[key] = this.getDirtyValues(currentControl);
          } else {
            dirtyValues[key] = currentControl.value;
          }
        }
      });
    // console.log(dirtyValues);
  }

}
