const randomExamples = [
  `[{ 
        "_id": { "$oid" : "628fadb4d370987ac789c0cd" }, 
        "pokemon": "nice", 
        "awesome": { 
            "test": "test1", 
            "one": "test2" ,
            "two": {
                "three": "test3"
            }
        } 
   }]`,
  `[{
        "test": {
            "$numberInt": "1"
        },
        "test2": {
            "$numberInt": "2"
        },
        "test3": {
            "test4": {
                "test5": {
                    "$numberInt": "3"
                }
            }
        }
   }]`,
  `{
       "lastModifiedDateTime":{"$date":{"$numberLong":"1713947417489"}}
   }`
];

export const getRandomExample = (previous?: string) => {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * randomExamples.length);
  } while (previous && previous === randomExamples[randomIndex]);
  return randomExamples[randomIndex];
};
