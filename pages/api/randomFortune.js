import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "public", "data", "fortuneData.json");
const jsonData = JSON.parse(fs.readFileSync(filePath));

export default function handler(req, res) {
  // Generate a random key-value pair
  const randomKey = getRandomKey(jsonData);
  const randomValue = jsonData[randomKey];
  const randomKeyValuePair = { [randomKey]: randomValue };

  // Return the random key-value pair as JSON response
  res.status(200).json(randomKeyValuePair);
}

function getRandomKey(obj) {
  return Object.keys(obj)[Math.floor(Math.random() * Object.keys(obj).length)];
}
