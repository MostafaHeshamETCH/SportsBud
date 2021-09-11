import React from 'react';

class user {
    constructor(userID, fullName, phoneNumber, email, password) {
      this.userID = userID;
      this.fullName = fullName;
      this.phoneNumber = phoneNumber;
      this.email = email;
      this.password = password; 
    }
  }

class admin {
    constructor(bookings, username, password) {
      this.bookings = bookings;
      this.username = username;
      this.password = password; 
    }
  }  

class courtOwner {
    constructor(userID, placeID ,username, password) {
      this.userID = userID;
      this.placeID = placeID;
      this.username = username;
      this.password = password; 
    }
  }

class booking {
    constructor(placeName, courtName, location, slots, totalAmount, clientID) {
      this.placeName = placeName;
      this.courtName = courtName;
      this.location = location;
      this.slots = slots;
      this.totalAmount = totalAmount;
      this.clientID =  clientID;
    }
}

class place{
    constructor(ID, name, type, pricePerHour, location, courts, courtsNo) {
      this.ID = ID; 
      this.name = name; 
      this.type = type; 
      this.pricePerHour = pricePerHour; 
      this.location = location; 
      this.courts = courts; 
      this.courtsNo = courtsNo; 
    }
}

class court {
    constructor(ID, number, availableHours) {
      this.ID = ID;
      this.number = number;
      this.availableHours = availableHours;
    }
}

class slot{
    constructor(slotTime, isAvailable) {
      this.slotTime = slotTime;
      this.isAvailable = isAvailable;
    }
}