import { Injectable } from '@angular/core';
import { Category } from "../shared";
import {Organization} from "../shared/organization";
import {Address} from "../shared/address";

@Injectable()
export class CategoryService {

  private categories : Category[] = [
    new Category(0, "Fryzjer", [
      new Organization(0, 'Pani Gosia', '', '', '', '', true, '', new Address('','','','','','')),
      new Organization(1, 'Ciocia Pani Gosi', '', '', '', '', true, '', new Address('','','','','','')),
      new Organization(2, 'Pani Gosława', '', '', '', '', true, '', new Address('','','','','',''))
    ]),
    new Category(1, "Sala Weselna", []),
    new Category(2, "Zespół", []),
    new Category(3, "Catering", []),
    new Category(4, "Obsługa", []),
    new Category(5, "Fotografia", []),
    new Category(6, "Film", []),
    new Category(7, "Kwiaciarnia", []),
    new Category(8, "Wystrój", []),
    new Category(9, "Samochód", []),
    new Category(10, "Koordynacja", []),
    new Category(11, "Hotel", []),
    new Category(12, "Transport", []),
    new Category(13, "Odzież", []),
    new Category(14, "Atrakcje", []),
  ];
  constructor() { }

  getCategories() {
    return this.categories;
  }

  getCategory(id: number) {
    return this.categories[id];
  }

  deleteCategory(category: Category) {
    this.categories.splice(this.categories.indexOf(category), 1)
  }

}
