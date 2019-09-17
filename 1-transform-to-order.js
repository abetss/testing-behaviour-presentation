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
  const date = new Date(orderDate)
  const formatedDate = `${date.year()}-${date.month()}-${date.day()}`

  // format to capitalized fullname
  const firstNameCapitalized = firstName.charAt(0).toUpperCase() + firstName.slice(1)
  const lastNameCapitalized = lastName.charAt(0).toUpperCase() + lastName.slice(1)
  const fullname = firstNameCapitalized + " " + lastNameCapitalized

  // display fullname
  const displayedFullname = `-> ${title} ${fullname}`

  // format payable items
  const formattedPayableItems = items
    .filter(item => item.price !== 0 || item.discount === 1)
    .map(item => ({
      ...item,
      originalPrice: `$${item.price}`,
      discountedPrice: `$${item.price - item.price * item.discount}`
    }))

  // calculate total payable
  const total = items.reduce((sum, item) => sum + (item - item * discount, 0))
  const totalPayable = total - debit
  const formattedTotalPayable = `$${totalPayable}`

  return {
    orderDate: formatedDate,
    name: displayedFullname,
    totalPayable: formattedTotalPayable,
    payableItems: formattedPayableItems
  }
}
