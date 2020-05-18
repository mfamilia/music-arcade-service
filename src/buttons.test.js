const Buttons = require("./buttons");

describe("Buttons", () => {
  it("provides buttons", () => {
    expect(Buttons.red).toMatchInlineSnapshot(`
      Object {
        "code": 8,
        "contextUri": "spotify:playlist:5mYzVylCdZeyR23XccmAqc",
        "name": "red",
        "pin": 37,
        "playlist": "json-classical",
      }
    `);

    expect(Buttons.blue).toMatchInlineSnapshot(`
      Object {
        "code": 9,
        "contextUri": "spotify:playlist:0mGWeb9ak4wdYMySSBI3wW",
        "name": "blue",
        "pin": 35,
        "playlist": "json-kids",
      }
    `);

    expect(Buttons.white).toMatchInlineSnapshot(`
      Object {
        "code": 11,
        "name": "white",
      }
    `);

    expect(Buttons.green).toMatchInlineSnapshot(`
      Object {
        "code": 10,
        "contextUri": "spotify:playlist:7yn5RpHqewAxLZlmIM9K9z",
        "name": "green",
        "pin": 31,
        "playlist": "json-spanish",
      }
    `);

    expect(Buttons.yellow).toMatchInlineSnapshot(`
      Object {
        "code": 7,
        "contextUri": "spotify:playlist:6ZMJ49EhgyHc3NugRttU5h",
        "name": "yellow",
        "pin": 33,
        "playlist": "json-big-band",
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
