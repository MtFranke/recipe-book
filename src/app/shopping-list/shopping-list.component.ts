import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "./shopping-list.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit, OnDestroy{

  ingredients: Ingredient[] = []
  private igChanged: Subscription;

  constructor(private shopppingService: ShoppingListService)
  {
  }


  ngOnInit() {
    this.ingredients = this.shopppingService.getIngredients();
    this.igChanged = this.shopppingService.ingredientAdded.subscribe(
      (ingredients)=> {
      this.ingredients = ingredients;
    });
  }

  ngOnDestroy() {
    this.igChanged.unsubscribe();
  }

  onEditItem(i: number) {
    this.shopppingService.startedEditing.next(i);
  }
}
