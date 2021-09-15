class User {
  constructor(userID, fullName, phoneNumber, email, password) {
    this.userID = userID;
    this.fullName = fullName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.password = password;
  }
}

class Admin {
  constructor(bookings, username, password) {
    this.bookings = bookings;
    this.username = username;
    this.password = password;
  }
}

class CourtOwner {
  constructor(userID, placeID, username, password) {
    this.userID = userID;
    this.placeID = placeID;
    this.username = username;
    this.password = password;
  }
}

class Booking {
  constructor(placeName, courtName, location, slots, totalAmount, email) {
    this.placeName = placeName;
    this.courtName = courtName;
    this.location = location;
    this.slots = slots;
    this.totalAmount = totalAmount;
    this.email = email;
  }
}

class Place {
  constructor(name, type, pricePerHour, location, courts, courts_num) {
    this.name = name;
    this.type = type;
    this.pricePerHour = pricePerHour;
    this.location = location;
    this.courts = courts;
    this.courts_num = courts_num;
  }
}

class Court {
  constructor(ID, daysAndAvailableHours) {
    this.ID = ID;
    this.daysAndAvailableHours = daysAndAvailableHours;
  }
}

class DaysAndAvailableHours {
  constructor(date, availableHours) {
    this.date = date;
    this.availableHours = availableHours;
  }
}

class Slot {
  constructor(slotTime, isAvailable) {
    this.slotTime = slotTime;
    this.isAvailable = isAvailable;
  }
}

// const Places = [
//   new Place(
//     1,
//     "Sky Paddle",
//     "Paddle",
//     320.0,
//     "New Cairo",
//     [
//       new Court(1, [
//         new Slot("8:00 AM to 9:00 AM", true),
//         new Slot("8:00 AM to 9:00 AM", true),
//         new Slot("8:00 AM to 9:00 AM", true),
//         new Slot("8:00 AM to 9:00 AM", true),
//         new Slot("8:00 AM to 9:00 AM", true),
//         new Slot("8:00 AM to 9:00 AM", true)
//       ]),
//       new Court(1, [
//         new Slot("8:00 AM to 9:00 AM", true),
//         new Slot("8:00 AM to 9:00 AM", true),
//         new Slot("8:00 AM to 9:00 AM", true),
//         new Slot("8:00 AM to 9:00 AM", true),
//         new Slot("8:00 AM to 9:00 AM", true),
//         new Slot("8:00 AM to 9:00 AM", true)
//       ]),
//       new Court(1, [
//         new Slot("8:00 AM to 9:00 AM", true),
//         new Slot("8:00 AM to 9:00 AM", true),
//         new Slot("8:00 AM to 9:00 AM", true),
//         new Slot("8:00 AM to 9:00 AM", true),
//         new Slot("8:00 AM to 9:00 AM", true),
//         new Slot("8:00 AM to 9:00 AM", true)
//       ])
//     ],
//     3
//   ),
//   new Place(
//     1,
//     "Sky Paddle",
//     "Paddle",
//     320.0,
//     "New Cairo",
//     [new Court(1, [new Slot("8:00 AM to 9:00 AM", true)])],
//     1
//   ),
//   new Place(
//     1,
//     "Sky Paddle",
//     "Paddle",
//     320.0,
//     "New Cairo",
//     [new Court(1, [new Slot("8:00 AM to 9:00 AM", true)])],
//     1
//   ),
//   new Place(
//     1,
//     "Sky Paddle",
//     "Paddle",
//     320.0,
//     "New Cairo",
//     [new Court(1, [new Slot("8:00 AM to 9:00 AM", true)])],
//     1
//   ),
//   new Place(
//     1,
//     "Sky Paddle",
//     "Paddle",
//     320.0,
//     "New Cairo",
//     [new Court(1, [new Slot("8:00 AM to 9:00 AM", true)])],
//     1
//   ),
//   new Place(
//     1,
//     "Sky Paddle",
//     "Paddle",
//     320.0,
//     "New Cairo",
//     [new Court(1, [new Slot("8:00 AM to 9:00 AM", true)])],
//     1
//   ),
//   new Place(
//     1,
//     "Sky Paddle",
//     "Paddle",
//     320.0,
//     "New Cairo",
//     [new Court(1, [new Slot("8:00 AM to 9:00 AM", true)])],
//     1
//   ),

// ];
