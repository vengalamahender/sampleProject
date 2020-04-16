import { Component, OnInit } from '@angular/core';
import { CurdserviceService } from '../curdservice.service';
import * as moment from 'moment';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public listItem: any;
  public now: Date = new Date();
  public textareaitem: any;
  public selectedId: any;
  show: boolean = true;

  listedFeatures: any = [];
  constructor(private Service: CurdserviceService) {}

  ngOnInit(): void {}
  // buttonClickMe() {
  //   if(this.listItem.length !=''){
  //     this.listedFeatures.push(this.listItem);
  //     console.log(this.listedFeatures.length);
  //     this.listItem = '';
  //     this.now = new Date();

  //   }
  //   this.show=true;
  // }
  listItemdata(item) {
    this.Service.addNewitem(item);
    this.Service.updateitem();
    if (this.listItem.length != '') {
      this.listedFeatures = this.Service.updateitem();
      this.listItem = '';
      this.now = new Date();
    }
    this.show = true;
  }
  getTime() {
    let dt = new Date();
    return moment(dt).format('MMMM DD,YYYY HH:mm A');
  }

  getallListdata() {
    this.Service.updateitem();
    //console.log(this.Service.updateitem());
  }
  getdeleteListdata() {
    this.Service.updateAfterdelete();
    this.listedFeatures = this.Service.updateitem();
    // alert('hello header');
    //this.Service.deleteitem();
    //console.log(this.Service.deleteitem());
  }
  editItem() {
    // this.listedFeatures = this.Service.updateAfteredit(this.selectedValue);
  }
  deleteitem(id) {
    console.log(this.Service.deleteRowitem(id));
    this.Service.deleteRowitem(id);
  }
  selectedValue: any = '';
  clicklistselected(item) {
    console.log(item.id);
    this.selectedValue = item;
    this.Service.deleteRowitem(item.id);
  }

  // clicklistselected(event, item){
  //   //console.log("Checking passed item: ",item);
  //   this.textareaitem=item;
  //   this.show=false;
  //   //console.log("event: ",event.target.id);
  //   this.selectedId=event.target.id;
  // }
  removeClickMe() {
    this.listedFeatures.splice(this.selectedId, 1);
    //console.log("removeselectedId: ",this.selectedId);
    console.log(this.listedFeatures.length);
    this.textareaitem = '';
  }
}
