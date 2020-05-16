const buttons = require("./buttons");

describe("Buttons", () => {
  it("provides buttons", () => {
    expect(buttons.red).toMatchInlineSnapshot(`
      Object {
        "code": 0,
        "name": "red",
      }
    `);

    expect(buttons.blue).toMatchInlineSnapshot(`
      Object {
        "code": 1,
        "name": "blue",
      }
    `);

    expect(buttons.white).toMatchInlineSnapshot(`
      Object {
        "code": 4,
        "name": "white",
      }
    `);

    expect(buttons.green).toMatchInlineSnapshot(`
      Object {
        "code": 2,
        "name": "green",
      }
    `);

    expect(buttons.yellow).toMatchInlineSnapshot(`
      Object {
        "code": 3,
        "name": "yellow",
      }
    `);
  });

  it("provides look up by code", () => {
    expect(buttons.fromCode(buttons.red.code)).toEqual(buttons.red);
    expect(buttons.fromCode(buttons.blue.code)).toEqual(buttons.blue);
    expect(buttons.fromCode(buttons.green.code)).toEqual(buttons.green);
    expect(buttons.fromCode(buttons.yellow.code)).toEqual(buttons.yellow);
    expect(buttons.fromCode(buttons.white.code)).toEqual(buttons.white);
  });
});
