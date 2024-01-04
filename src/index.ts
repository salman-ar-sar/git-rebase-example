import add from "./helpers/add";
import subtract from "./helpers/subtract";
import multiply from "./helpers/multiply";
import divide from "./helpers/divide";
import exponent from "./helpers/exponent";
import log from "./helpers/log";

const sum = add(1, 2);

console.log({ sum });

const difference = subtract(1, 2);

console.log({ difference });

const product = multiply(1, 2);

console.log({ product });

const quotient = divide(1, 2);

console.log({ quotient });

const power = exponent(1, 2);

console.log({ power });

// 2 x 2 x 2 = 8
const logToBase2 = log(2, 8);

console.log({ logToBase2 });
