var enterpriseRental = { 
  make: 'Honda',
  available: 10,
  colors: [ 'blue', 'black', 'red' ],
  rented: 3,
  checkAvailability: function () {
      return this.available - this.rented;
        }
  };
  
console.log(enterpriseRental.checkAvailability());

