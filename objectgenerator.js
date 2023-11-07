function generateRandomHexString(length) {
    const characters = '0123456789abcdef';
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    return result;
  }
  function getRandomDate() {
    const startYear = 2020;
    const endYear = 2023;
    const startDate = new Date(startYear, 0, 1).getTime();
    const endDate = new Date(endYear, 11, 31).getTime();
    
    const randomTime = Math.random() * (endDate - startDate) + startDate;
    const randomDate = new Date(randomTime);
    
    return randomDate.toISOString();
  }
  

  const vehicle_ID_database = [
    "5fa3b8a8a2a84d8d602b0a74",
    "5fa3b8a8a2a84d8d602b0a75",
    "5fa3b8a8a2a84d8d602b0a76",
    "5fa3b8a8a2a84d8d602b0a77",
    "5fa3b8a8a2a84d8d602b0a78",
    "5fa3b8a8a2a84d8d602b0a79",
    "5fa3b8a8a2a84d8d602b0a7a",
    "5fa3b8a8a2a84d8d602b0a7b",
    "5fa3b8a8a2a84d8d602b0a7c",
    "5fa3b8a8a2a84d8d602b0a7d",
    "5fa3b8a8a2a84d8d602b0a7e",
    "5fa3b8a8a2a84d8d602b0a7f",
    "5fa3b8a8a2a84d8d602b0a80",
    "5fa3b8a8a2a84d8d602b0a81",
    "5fa3b8a8a2a84d8d602b0a82",
    "5fa3b8a8a2a84d8d602b0a83",
    "5fa3b8a8a2a84d8d602b0a84",
    "5fa3b8a8a2a84d8d602b0a85",
    "5fa3b8a8a2a84d8d602b0a86",
    "5fa3b8a8a2a84d8d602b0a87",
    "5fa3b8a8a2a84d8d602b0a88",
    "5fa3b8a8a2a84d8d602b0a89",
    "5fa3b8a8a2a84d8d602b0a8a",
    "5fa3b8a8a2a84d8d602b0a8b",
    "5fa3b8a8a2a84d8d602b0a8c",
    "5fa3b8a8a2a84d8d602b0a8d",
    "5fa3b8a8a2a84d8d602b0a8e",
    "5fa3b8a8a2a84d8d602b0a8f",
    "5fa3b8a8a2a84d8d602b0a90",
    "5fa3b8a8a2a84d8d602b0a91",
    "5fa3b8a8a2a84d8d602b0a92",
    "5fa3b8a8a2a84d8d602b0a93",
    "5fa3b8a8a2a84d8d602b0a94",
    "5fa3b8a8a2a84d8d602b0a95",
    "5fa3b8a8a2a84d8d602b0a96",
    "5fa3b8a8a2a84d8d602b0a97",
    "5fa3b8a8a2a84d8d602b0a98",
    "5fa3b8a8a2a84d8d602b0a99",
    "5fa3b8a8a2a84d8d602b0a9a",
    "5fa3b8a8a2a84d8d602b0a9b",
    "5fa3b8a8a2a84d8d602b0a9c",
    "5fa3b8a8a2a84d8d602b0a9d",
    "5fa3b8a8a2a84d8d602b0a9e",
    "5fa3b8a8a2a84d8d602b0a9f",
    "5fa3b8a8a2a84d8d602b0aa0",
    "5fa3b8a8a2a84d8d602b0aa1",
    "5fa3b8a8a2a84d8d602b0aa2",
    "5fa3b8a8a2a84d8d602b0aa3",
    "5fa3b8a8a2a84d8d602b0aa4",
    "5fa3b8a8a2a84d8d602b0aa5",
    "5fa3b8a8a2a84d8d602b0aa6",
    "5fa3b8a8a2a84d8d602b0aa7",
    "5fa3b8a8a2a84d8d602b0aa8",
    "5fa3b8a8a2a84d8d602b0aa9",
    "5fa3b8a8a2a84d8d602b0aaa",
    "5fa3b8a8a2a84d8d602b0aab",
    "5fa3b8a8a2a84d8d602b0aac",
    "5fa3b8a8a2a84d8d602b0aad",
    "5fa3b8a8a2a84d8d602b0aae",
    "5fa3b8a8a2a84d8d602b0aaf",
    "5fa3b8a8a2a84d8d602b0ab0",
    "5fa3b8a8a2a84d8d602b0ab1",
    "5fa3b8a8a2a84d8d602b0ab2",
    "5fa3b8a8a2a84d8d602b0ab3",
    "5fa3b8a8a2a84d8d602b0ab4",
    "5fa3b8a8a2a84d8d602b0ab5",
    "5fa3b8a8a2a84d8d602b0ab6",
    "5fa3b8a8a2a84d8d602b0ab7",
    "5fa3b8a8a2a84d8d602b0ab8",
    "5fa3b8a8a2a84d8d602b0ab9",
    "5fa3b8a8a2a84d8d602b0aba",
    "5fa3b8a8a2a84d8d602b0abb",
    "5fa3b8a8a2a84d8d602b0abc",
    "5fa3b8a8a2a84d8d602b0abd",
    "5fa3b8a8a2a84d8d602b0abe",
    "5fa3b8a8a2a84d8d602b0abf",
    "5fa3b8a8a2a84d8d602b0ac0",
    "5fa3b8a8a2a84d8d602b0ac1",
    "5fa3b8a8a2a84d8d602b0ac2",
    "5fa3b8a8a2a84d8d602b0ac3",
    "5fa3b8a8a2a84d8d602b0ac4",
    "5fa3b8a8a2a84d8d602b0ac5",
    "5fa3b8a8a2a84d8d602b0ac6",
    "5fa3b8a8a2a84d8d602b0ac7",
    "5fa3b8a8a2a84d8d602b0ac8",
    "5fa3b8a8a2a84d8d602b0ac9",
    "5fa3b8a8a2a84d8d602b0aca",
    "5fa3b8a8a2a84d8d602b0acb",
    "5fa3b8a8a2a84d8d602b0acc",
    "5fa3b8a8a2a84d8d602b0acd",
    "5fa3b8a8a2a84d8d602b0ace",
    "5fa3b8a8a2a84d8d602b0acf",
    "5fa3b8a8a2a84d8d602b0ad0",
    "5fa3b8a8a2a84d8d602b0ad1",
    "5fa3b8a8a2a84d8d602b0ad2",
    "5fa3b8a8a2a84d8d602b0ad3",
    "5fa3b8a8a2a84d8d602b0ad4",
    "5fa3b8a8a2a84d8d602b0ad5",
    "5fa3b8a8a2a84d8d602b0ad6",
    "5fa3b8a8a2a84d8d602b0ad7",
    "5fa3b8a8a2a84d8d602b0ad8",
    "5fa3b8a8a2a84d8d602b0ad9",
    "5fa3b8a8a2a84d8d602b0ada",
    "5fa3b8a8a2a84d8d602b0adb",
    "5fa3b8a8a2a84d8d602b0adc",
    "5fa3b8a8a2a84d8d602b0add",
    "5fa3b8a8a2a84d8d602b0ade",
    "5fa3b8a8a2a84d8d602b0adf",
    "5fa3b8a8a2a84d8d602b0ae0",
    "5fa3b8a8a2a84d8d602b0ae1",
    "5fa3b8a8a2a84d8d602b0ae2",
    "5fa3b8a8a2a84d8d602b0ae3",
    "5fa3b8a8a2a84d8d602b0ae4",
    "5fa3b8a8a2a84d8d602b0ae5",
    "5fa3b8a8a2a84d8d602b0ae6",
    "5fa3b8a8a2a84d8d602b0ae7",
    "5fa3b8a8a2a84d8d602b0ae8",
    "5fa3b8a8a2a84d8d602b0ae9",
    "5fa3b8a8a2a84d8d602b0aea",
    "5fa3b8a8a2a84d8d602b0aeb",
    "5fa3b8a8a2a84d8d602b0aec",
    "5fa3b8a8a2a84d8d602b0aed",
    "5fa3b8a8a2a84d8d602b0aee",
    "5fa3b8a8a2a84d8d602b0aef",
    "5fa3b8a8a2a84d8d602b0af0",
    "5fa3b8a8a2a84d8d602b0af1",
    "5fa3b8a8a2a84d8d602b0af2",
    "5fa3b8a8a2a84d8d602b0af3",
    "5fa3b8a8a2a84d8d602b0af4",
    "5fa3b8a8a2a84d8d602b0af5",
    "5fa3b8a8a2a84d8d602b0af6",
    "5fa3b8a8a2a84d8d602b0af7",
    "5fa3b8a8a2a84d8d602b0af8",
    "5fa3b8a8a2a84d8d602b0af9",
    "5fa3b8a8a2a84d8d602b0afa",
    "5fa3b8a8a2a84d8d602b0afb",
    "5fa3b8a8a2a84d8d602b0afc",
    "5fa3b8a8a2a84d8d602b0afd",
    "5fa3b8a8a2a84d8d602b0afe",
    "6fa3b8a8a2a84d8d602b0a74",
    "6fa3b8a8a2a84d8d602b0a75",
    "6fa3b8a8a2a84d8d602b0a76",
    "6fa3b8a8a2a84d8d602b0a77",
    "6fa3b8a8a2a84d8d602b0a78",
    "6fa3b8a8a2a84d8d602b0a79",
    "6fa3b8a8a2a84d8d602b0a7a",
    "6fa3b8a8a2a84d8d602b0a7b",
    "6fa3b8a8a2a84d8d602b0a7c",
    "6fa3b8a8a2a84d8d602b0a7d",
    "6fa3b8a8a2a84d8d602b0a7e",
    "6fa3b8a8a2a84d8d602b0a7f",
    "6fa3b8a8a2a84d8d602b0a80",
    "6fa3b8a8a2a84d8d602b0a81",
    "6fa3b8a8a2a84d8d602b0a82",
    "6fa3b8a8a2a84d8d602b0a83",
    "6fa3b8a8a2a84d8d602b0a84",
    "6fa3b8a8a2a84d8d602b0a85",
    "6fa3b8a8a2a84d8d602b0a86",
    "6fa3b8a8a2a84d8d602b0a87",
    "6fa3b8a8a2a84d8d602b0a88",
    "6fa3b8a8a2a84d8d602b0a89",
    "6fa3b8a8a2a84d8d602b0a90",
  "6fa3b8a8a2a84d8d602b0a91",
  "6fa3b8a8a2a84d8d602b0a92",
  "6fa3b8a8a2a84d8d602b0a93",
  "6fa3b8a8a2a84d8d602b0a94",
  "6fa3b8a8a2a84d8d602b0a95",
  "6fa3b8a8a2a84d8d602b0a96",
  "6fa3b8a8a2a84d8d602b0a97",
  "6fa3b8a8a2a84d8d602b0a98",
  "6fa3b8a8a2a84d8d602b0a99",
  "6fa3b8a8a2a84d8d602b0aa0",
  "6fa3b8a8a2a84d8d602b0aa1",
  "6fa3b8a8a2a84d8d602b0aa2",
  "6fa3b8a8a2a84d8d602b0aa3",
  "6fa3b8a8a2a84d8d602b0aa4",
  "6fa3b8a8a2a84d8d602b0aa5",
  "6fa3b8a8a2a84d8d602b0aa6",
  "6fa3b8a8a2a84d8d602b0aa7",
  "6fa3b8a8a2a84d8d602b0aa8",
  "6fa3b8a8a2a84d8d602b0aa9",
  "6fa3b8a8a2a84d8d602b0aaa",
  "6fa3b8a8a2a84d8d602b0aab",
  "6fa3b8a8a2a84d8d602b0aac",
  "6fa3b8a8a2a84d8d602b0aad",
  "6fa3b8a8a2a84d8d602b0aae",
  "6fa3b8a8a2a84d8d602b0aaf",
  "6fa3b8a8a2a84d8d602b0ab0",
  "6fa3b8a8a2a84d8d602b0ab1",
  "6fa3b8a8a2a84d8d602b0ab2",
  "6fa3b8a8a2a84d8d602b0ab3",
  "6fa3b8a8a2a84d8d602b0ab4",
  "6fa3b8a8a2a84d8d602b0ab5",
  "6fa3b8a8a2a84d8d602b0ab6",
  "6fa3b8a8a2a84d8d602b0ab7",
  "6fa3b8a8a2a84d8d602b0ab8",
  "6fa3b8a8a2a84d8d602b0ab9",
  "6fa3b8a8a2a84d8d602b0aba",
  "6fa3b8a8a2a84d8d602b0abb",
  "6fa3b8a8a2a84d8d602b0abc",
  "6fa3b8a8a2a84d8d602b0abd",
  "6fa3b8a8a2a84d8d602b0abe",
  "6fa3b8a8a2a84d8d602b0abf",
  "6fa3b8a8a2a84d8d602b0ac0",
  "6fa3b8a8a2a84d8d602b0ac1",
  "6fa3b8a8a2a84d8d602b0ac2",
  "6fa3b8a8a2a84d8d602b0ac3",
  "6fa3b8a8a2a84d8d602b0ac4",
  "6fa3b8a8a2a84d8d602b0ac5",
  "6fa3b8a8a2a84d8d602b0ac6",
  "6fa3b8a8a2a84d8d602b0ac7",
  "6fa3b8a8a2a84d8d602b0ac8",
  "6fa3b8a8a2a84d8d602b0ac9",
  "6fa3b8a8a2a84d8d602b0aca",
  "6fa3b8a8a2a84d8d602b0acb",
  "6fa3b8a8a2a84d8d602b0acc",

  ]  

  function getRandomObjectIdFromList(vehicle_ID_database) {
    const randomIndex = Math.floor(Math.random() * vehicle_ID_database.length);
    return vehicle_ID_database[randomIndex];
  }
function createRandomRideObject() {
    const _id =generateRandomHexString(24);
    const vehicle_id = getRandomObjectIdFromList(vehicle_ID_database);
    const vehicle_type= "e_scooter";
    const ride_distance = Math.floor(Math.random() * (10 - 3 + 1)) + 3;
    const createdAt = getRandomDate()
  
    return {
      _id: _id,
      vehicle_id: vehicle_id,
      vehicle_type: vehicle_type,
      ride_distance: ride_distance,
      createdAt: createdAt
    };
  }
  

  function createListofObjects(){
    const numberOfObjects =1000;
    const rideObjects = [];
    for (let i = 0; i < numberOfObjects; i++) {
        const rideObject = createRandomRideObject();
        rideObjects.push(rideObject);
      }

    return rideObjects
  }

  
  // Now, rideObjects contains an array of 1000 objects with random values.
  module.exports = createListofObjects