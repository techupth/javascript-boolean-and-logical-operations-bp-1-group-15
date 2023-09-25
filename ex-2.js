// Exercise #2: Promotion Conditions

// Start coding here

let memberLevel = "Gold"; // เพิ่มจากเฉลย
let lastMonthPaid = 4001; // เพิ่มจากเฉลย

let lastMonthPaidMoreThan4000 = lastMonthPaid > 4000;
let isWeekday = false;
let hasNotBoughtProductFromITCategory = true;
let hasNotAttendedDiscountEvent = false;
let isPlatinum = memberLevel == "Platinum"; // เพิ่มจากเฉลย

let hasPromotion = (lastMonthPaidMoreThan4000 && !isWeekday && hasNotBoughtProductFromITCategory && hasNotAttendedDiscountEvent) || isPlatinum;

console.log(hasPromotion);