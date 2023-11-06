function generateRandomHexString(length) {
    const characters = '0123456789abcdef';
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    return result;
  }


function createRandomRideObject() {
    const _id =generateRandomHexString(24);
    const vehicle_id = generateRandomHexString(24);
    const vehicle_type= "e_scooter";
    const ride_distance = Math.floor(Math.random() * (10 - 3 + 1)) + 3;
    const createdAt = new Date().toISOString();
  
    return {
      _id: _id,
      vehicle_id: vehicle_id,
      vehicle_type: vehicle_type,
      ride_distance: ride_distance,
      createdAt: createdAt
    };
  }
  

  function createListofObjects(){
    const numberOfObjects = 5;
    const rideObjects = [];
    for (let i = 0; i < numberOfObjects; i++) {
        const rideObject = createRandomRideObject();
        rideObjects.push(rideObject);
      }

    return rideObjects
  }

  
  // Now, rideObjects contains an array of 1000 objects with random values.
  module.exports = createListofObjects