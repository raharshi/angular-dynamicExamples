import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-form-fields',
  templateUrl: './dynamic-form-fields.component.html',
  styleUrls: ['./dynamic-form-fields.component.css']
})
export class DynamicFormFieldsComponent implements OnInit {
  dropselect:any;
  cars:any[]= [{
          manufacturer: 'Porsche',
          model: '911',
          price: 135000,
          wiki: 'http://en.wikipedia.org/wiki/Porsche_997',
          img: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Porsche_997_Turbo_-_Flickr_-_Alexandre_Pr%C3%A9vot_%288%29.jpg'
        },{
            manufacturer: 'Nissan',
            model: 'GT-R',
            price: 80000,
            wiki:'http://en.wikipedia.org/wiki/Nissan_Gt-r',
            img: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/2012_Nissan_GT-R_Egoist.jpg'
        },{
            manufacturer: 'BMW',
            model: 'M3',
            price: 60500,
            wiki:'http://en.wikipedia.org/wiki/Bmw_m3',
            img: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/2018_BMW_M3_3.0.jpg'
        },{
            manufacturer: 'Audi',
            model: 'S5',
            price: 53000,
            wiki:'http://en.wikipedia.org/wiki/Audi_S5#Audi_S5',
            img: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/2018_Audi_S5_TFSi_Quattro_Automatic_3.0_Front.jpg'
        },{
            manufacturer: 'Audi',
            model: 'TT',
            price: 40000,
            wiki:'http://en.wikipedia.org/wiki/Audi_TT',
            img: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Audi_TT_Coup%C3%A9_2.0_TFSI_quattro_S-line_%288S%29_%E2%80%93_Frontansicht%2C_3._April_2015%2C_D%C3%BCsseldorf.jpg'
        }];
 
  constructor() { }

  ngOnInit() {
  }

}