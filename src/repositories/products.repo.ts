import { SKU } from "@/models/sku.model";

/**
 * Product repo
 */
export class ProductsRepository {

  private skus: SKU[] = [{
    id: 1,
    name: "iPhone 14",
    category: {
      id: 1,
      name: "Electronics"
    }
  },
  {
    id: 2,
    name: "Diapers",
    category: {
      id: 2,
      name: "Baby"
    }
  }]

  async getSku(): Promise<SKU[]> {
    return this.skus
  }

  async addSku(sku: SKU): Promise<SKU[]> {
    this.skus.push(sku)
    return this.skus
  }
}