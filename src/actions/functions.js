import axios from 'axios';

export const visionApi = url =>
axios.post(
  "https://vision.googleapis.com/v1/images:annotate?key=AIzaSyB0GTVmekpmElG7x2HT9gBvDRlLhCaL-b0",
  {
    requests: [
      {
        image: {
          source: {
            imageUri: url
          }
        },
        features: [
          {
            type: "LABEL_DETECTION",
            maxResults: 10
          }
        ]
      }
    ]
  }
);