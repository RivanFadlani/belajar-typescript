```typescript
export namespace MathUtil {
  export const PI: number = 3.14;

  export function sum(...values: number[]): number {
    let total: number = 0;
    for (const value of values) {
      total += value;
    }
    return total;
  }
}

export namespace SayIt {
  export const name: string = "Ripunn";

  export function sayHello(name: string): void {
    console.log(`Hello ${name}! Nice to meet you`);
  }
}
```

Cara memanggil namespace:

```typescript
import { MathUtil, SayIt } from "./utils";

console.log(MathUtil.PI);
console.log(MathUtil.sum(1, 2, 3, 4, 5));
SayIt.sayHello("Ripunn");
```
