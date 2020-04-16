import { Injectable } from '@angular/core';
// import { AppHeaderComponent } from './app-header/app-header.component';
// import { SidebarComponent } from './sidebar/sidebar.component';

@Injectable({
  providedIn: 'root'
})
export class CurdserviceService {
  listArray = [];

  constructor() {}

  addNewitem(item) {
    console.log(item);
    let Obj = {
      id: Math.random(),
      item: item
    };
    this.listArray.push(Obj);
    console.log(this.listArray);
  }
  updateitem() {
    return this.listArray;
  }
  deleteItem: any = '';
  deleteRowitem(id) {
    this.deleteItem = id;
    //this.listArray.splice(id);
  }
  deleteitem(id) {
    alert('hello delete');
    return this.listArray;
  }
  updateAfterdelete() {
    console.log(this.deleteItem);
    this.listArray = this.listArray.filter(item => item.id != this.deleteItem);
    return this.listArray;
  }
  updateAfteredit(Obj) {
    console.log(this.listArray, Obj);
  }
}
