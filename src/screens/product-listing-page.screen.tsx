import { ProductListingPageViewModel } from "@/viewmodels/product-listing-page.viewmodel"
import { observer } from "mobx-react-lite"
import { useRef } from "react"

interface ProductListingPageProps {
  viewModel: ProductListingPageViewModel
}

const ProductListingPage = ({viewModel}: ProductListingPageProps) => {

  const inputRef = useRef<HTMLInputElement>(null)

  function onClick(e: any) {
    viewModel.addSku(inputRef.current?.value)
  }

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={onClick}>add</button>
      <ul>
        {viewModel.skus.map(e => <li key={e.id}>{`${e.name} (${e.category.name})`}</li>)}
      </ul>
    </div>
  )
}

export default observer(ProductListingPage)