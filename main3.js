const obj1 = {
    a : "a",
    b: "b",
    c: {
        d: "d",
        e: "e",
    }
}

const stringifyComplexObj = JSON.stringify(obj1);
// "{\"a\":\"a\",\"b\":\"b\",\"c\":{\"d\":\"d\",\"e\":\"e\"},\"f\":[1,\"2\",3]}"

const obj2 = JSON.parse(stringifyComplexObj);
// {a: "a", b: "b", c: {d: "d", e: "e"}}   