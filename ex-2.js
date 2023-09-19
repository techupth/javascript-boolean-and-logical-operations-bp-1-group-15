// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000 = True;
let isWeekday = True;
let hasBoughtProductFromITCategory = False;
let hasAttendedDiscountEvent = True;
let isPlatinum = False;

let hasPromotion = (lastMonthPaidMoreThan4000) && (isWeekday) && (!hasBoughtProductFromITCategory) &&(!hasAttendedDiscountEvent) ||isPlatinum;
console.log(hasPromotion);
