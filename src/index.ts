import add from "./helpers/add";
import subtract from "./helpers/subtract";
import multiply from "./helpers/multiply";
import divide from "./helpers/divide";
import exponent from "./helpers/exponent";

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
