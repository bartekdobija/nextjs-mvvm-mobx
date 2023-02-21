import { SKU } from "@/models/sku.model";
import { ProductsRepository } from "@/repositories/products.repo";
import { makeAutoObservable } from "mobx";
import { inject, injectable } from "tsyringe";

@injectable()
export class ProductListingPageViewModel {

  skus: SKU[] = []

  constructor(private productRepo?: ProductsRepository) {
    makeAutoObservable(this)
    this.productRepo?.getSku()
      .then(result => this.skus = result)
      .catch(() => {});
  }

  addSku(name: string | undefined) {
    if(!name) return

    const sku: SKU = {
      id: Date.now(),
      name,
      category: { id: 1, name: "Electronics" }
    }

    this.productRepo?.addSku(sku)
      .then(list => this.skus = list)
      .catch(() => {})
  }

}