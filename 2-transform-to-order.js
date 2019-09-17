const input = {
  orderDate: 1231212321222,
  firstName: "Patan",
  lastName: "Su",
  title: "Mr",
  debit: 5,
  items: [
    {
      title: "book 1",
      price: 12,
      discount: 0.15
    },
    {
      title: "book 2",
      price: 20,
      discount: 0
    },
    {
      title: "book 3",
      price: 0,
      discount: 0
    }
  ]
}

const transformOrderToReceipt = ({orderDate, firstName, lastName, title, debit, items}) => {
  // formating date to yyyy-mm-dd
  const formatedDate = formatDateForOrder(orderDate)

  // format to capitalized fullname
  const fullname = makeCapitalizedFullname(firstName, lastName)

  // display fullname
  const displayedFullname = formatFullnameForOrder(title, fullname)

  // format payable items
  const formattedPayableItems = items.filter(isItemNotFree).map(toWithFormattedPricing)

  // calculate total payable
  const formattedTotalPayable = formatePrice(calculatePrice(items))

  return {
    orderDate: formatedDate,
    name: displayedFullname,
    totalPayable: formattedTotalPayable,
    payableItems: formattedPayableItems
  }
}
