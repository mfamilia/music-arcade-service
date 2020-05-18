const Buttons = require("./buttons");

describe("Buttons", () => {
  it("provides buttons", () => {
    expect(Buttons.red).toMatchInlineSnapshot(`
      Object {
        "code": 0,
        "name": "red",
        "pin": 37,
      }
    `);

    expect(Buttons.blue).toMatchInlineSnapshot(`
      Object {
        "code": 1,
        "name": "blue",
        "pin": 33,
      }
    `);

    expect(Buttons.white).toMatchInlineSnapshot(`
      Object {
        "code": 4,
        "name": "white",
      }
    `);

    expect(Buttons.green).toMatchInlineSnapshot(`
      Object {
        "code": 2,
        "name": "green",
        "pin": 35,
      }
    `);

    expect(Buttons.yellow).toMatchInlineSnapshot(`
      Object {
        "code": 3,
        "name": "yellow",
        "pin": 31,
      }
    `);
  });

  it("provides look up by code", () => {
    expect(Buttons.fromCode(Buttons.red.code)).toEqual(Buttons.red);
    expect(Buttons.fromCode(Buttons.blue.code)).toEqual(Buttons.blue);
    expect(Buttons.fromCode(Buttons.green.code)).toEqual(Buttons.green);
    expect(Buttons.fromCode(Buttons.yellow.code)).toEqual(Buttons.yellow);
    expect(Buttons.fromCode(Buttons.white.code)).toEqual(Buttons.white);
  });

  it("provides list of lightable buttons", () => {
    expect(Buttons.lightable.map((b) => b.name)).toMatchInlineSnapshot(`
      Array [
        "red",
        "blue",
        "green",
        "yellow",
      ]
    `);
  });
});
