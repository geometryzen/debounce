import { debounce } from "../src/index";

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
