# debounce

A debounce function for JavaScript and TypeScript.

```typescript
import { debounce } from "@geometryzen/debounce";

function foo(a: string, b: number) {
    if (b >= 0) {
        return a.length + b;
    } else {
        throw new Error("b must be positive");
    }
}

describe("debounce", function () {
    it("resolve", async function () {
        const handler = debounce(foo, 100);
        const retval = await handler("Hello", 1);
        expect(retval).toBe(6);
    });
    it("reject", async function () {
        const handler = debounce(foo, 100);
        try {
            await handler("Hello", -1);
            fail();
        } catch (e) {
            expect(`${e}`).toBe("Error: b must be positive");
        }
    });
});
```

[![version](https://img.shields.io/npm/v/@geometryzen/debounce.svg)](https://www.npmjs.com/package/@geometryzen/debounce) 

[![npm downloads](https://img.shields.io/npm/dm/@geometryzen/debounce.svg)](https://npm-stat.com/charts.html?package=@geometryzen/debounce&from=2022-09-01)

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)
