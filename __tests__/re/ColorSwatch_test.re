open Jest;
open Expect;
open ReactTestingLibrary;

describe("ColorSwatch", () => {
  test("render enabled", () => {
    let color = "#EEEFF4";
    let selectedColor = "#EEEFF4";
    let onSelectColor = value => {
      expect(value) |> toBe("#EEEFF4") |> ignore;
      Js.log("onSelectColor -> " ++ value);
    };

    let rendered =
      <ColorSwatch
        key=color
        value=color
        disabled={color === "#EEEFF5"}
        selected={color === selectedColor}
        onSelect={value => onSelectColor(value)}
      />
      |> render;

    act(() =>
      rendered
      |> getByTestId(~matcher=`Str("enabled-color-swatch"))
      |> FireEvent.click
      |> ignore
    );

    rendered
    |> getByTestId(~matcher=`Str("enabled-color-swatch"))
    |> expect
    |> toMatchSnapshot;
  });

  test("render disabled", () => {
    let color = "#EEEFF5";
    let selectedColor = "#EEEFF5";
    let onSelectColor = value => {
      expect(value) |> toBe("#EEEFF5");
      Js.log("onSelectColor -> " ++ value);
    };

    let rendered =
      <ColorSwatch
        key=color
        value=color
        disabled={color === "#EEEFF5"}
        selected={color === selectedColor}
        onSelect={value => onSelectColor(value)}
      />
      |> render;

    rendered
    |> getByTestId(~matcher=`Str("disabled-color-swatch"))
    |> expect
    |> toMatchSnapshot;
  });
});