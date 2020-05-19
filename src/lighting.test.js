const Lighting = require("./lighting");
const gpiop = require("rpi-gpio").promise;
const Buttons = require("./buttons");

jest.mock("rpi-gpio");

describe("Lighting", () => {
  it("provides initializer", () => {
    Lighting.init();

    expect(gpiop.setup.mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          33,
          "out",
        ],
        Array [
          37,
          "out",
        ],
        Array [
          35,
          "out",
        ],
        Array [
          31,
          "out",
        ],
      ]
    `);
  });

  it("provides blinking effect", (done) => {
    let promiseResolve;

    const promise = new Promise((resolve) => {
      promiseResolve = resolve;
    });

    Lighting.constantFlash(Buttons.lightable, promise, 100).then(() => {
      expect(gpiop.write.mock.calls).toMatchInlineSnapshot(`
        Array [
          Array [
            33,
            true,
          ],
          Array [
            33,
            false,
          ],
          Array [
            37,
            true,
          ],
          Array [
            37,
            false,
          ],
          Array [
            35,
            true,
          ],
          Array [
            35,
            false,
          ],
          Array [
            31,
            true,
          ],
          Array [
            31,
            false,
          ],
        ]
      `);

      done();
    });

    promiseResolve();
  });
});
