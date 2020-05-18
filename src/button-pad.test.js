const ButtonPad = require("./button-pad");
const Gamepad = require("gamepad");
const { red } = require("./buttons");

jest.mock("gamepad");
jest.useFakeTimers();

describe("ButtonPad", () => {
  it("provides initialization", () => {
    ButtonPad.init();

    jest.advanceTimersByTime(1000);

    expect(Gamepad.init).toHaveBeenCalled();
    expect(Gamepad.processEvents).toHaveBeenCalled();
    expect(Gamepad.detectDevices).toHaveBeenCalled();
  });

  it("provides event callbacks", () => {
    Gamepad.on.mockImplementation((state, callback) =>
      callback("id", red.code)
    );

    const callbackMock = jest.fn();
    ButtonPad.on(ButtonPad.events.Down, callbackMock);

    expect(callbackMock.mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          "down",
          Object {
            "code": 8,
            "contextUri": "spotify:playlist:5mYzVylCdZeyR23XccmAqc",
            "name": "red",
            "pin": 37,
            "playlist": "json-classical",
          },
        ],
      ]
    `);
  });
});
