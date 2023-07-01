const axios = require('axios');

const generateRandomTrackingNumber = () => {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < 9; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `RR${result}CN`;
  };
  

  const generateTrackingNumber = async (order) => {
    try {
      const options = {
        method: 'POST',
        url: 'https://api.17track.net/track/v2/register',
        headers: {
          'content-type': 'application/json',
          '17token': '524A69EFE8104688986792C0E878B4D5',
        },
        data: JSON.stringify([
          {
            "number": generateRandomTrackingNumber(),
            "carrier": 3011
          },
        ]),
      };
  
      const response = await axios.request(options);
  
      // Extract the tracking number from the response
      const acceptedItems = response.data.data.accepted;
      const trackingNumbers = acceptedItems.map(item => item.number);
      console.log(trackingNumbers);
      return trackingNumbers[0];
    } catch (error) {
      console.error(error);
      throw new Error('Failed to generate tracking number');
    }
  };
  

module.exports = generateTrackingNumber;