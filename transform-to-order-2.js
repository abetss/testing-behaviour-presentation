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

const output = {
  orderDate: 2018-10-04,
  name: '-> Mr Patan Su',
  totalPayable: '$15',
  payableItems: [{
    title: "book 1",
    originalPrice: "$12",
    discountedPrice: "$10"
  }, {}, {}]
}

const isEmptyString = string => string === ''
const capitalizeString = string => string.charAt(0).toUpperCase() + string.slice(1)

const concatStringsBySpace = (strings) => string.reduce((finalString, string)
    => finalString + ' ' + string, '')

const formatFullnameForOrder = (firstName, lastName, title) => {
  const capitalized = [firstName, lastName, title]
    .filter(isEmptyString)
    .map(capitalizeString)
  return concatStringsBySpace(['->', ...capitalized])
}

const transformOrderToReceipt = ({orderDate, firstName, lastName, title, debit, items}) => {
  const formatedDate = formatDateForOrder(orderDate)

  const fullname = makeCapitalizedFullname(firstName, lastName)

  const displayedFullname = formatFullnameForOrder({title, fullname})

  const formattedPayableItems = items
    .filter(isItemNotFree)
    .map(toWithFormattedPricing)

  const formattedTotalPayable = formatePrice(calculatePrice(items))

  return {
    orderDate: formatedDate,
    name: displayedFullname,
    totalPayable: formattedTotalPayable,
    payableItems: formattedPayableItems
  }
}

describe('capitalizeString')
-- it('given string: abcde, should return Abcde')
-- it('given string: "", should return ""')

describe('formatFullnameForOrder')
-- it('given fullname: ab jj and title: Mr, should display -> Mr Ab Jj ')
-- it('given fullname: ab jj and title: mr, should display -> Mr Ab Jj ')
-- it('given fullname: ab jj and title: "". should display -> Ab Jj')

describe('formatFullnameForOrder')
-- it(`given firstName: ab, lastName, jj and title: Mr.
            should call formatFullnameForOrder with fullname: 'Ab Jj', title: 'Mr'`)

// describe('transformOrderToReceipt')
// -- describe('name')
// -- it('given firstName: ab, lastName: jj, title: Mr, should display -> Mr Ab Jj ')
// -- it('given firstName: ab, lastName: jj, title: mr, should display -> Mr Ab Jj ')
// -- it('given firstName: ab, lastName: jj, should display -> Ab Jj ')



// confidence
// formatFullnameForOrder signature changes to formatFullnameForOrder({title, fullname})
// not returning displayedFullname

// false alarm
// using another function instead of formatFullnameForOrder or  writing some implementation
