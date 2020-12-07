open Jest;
open Expect;
open Layout;
open Helmet;

describe("Layout", () => {
  test("metaToHelmet - meta with name", () => {
    let metaWithName =
      MetaWithName(
        "description",
        "A playful avatar generator for the modern age.",
      );
    let actual = metaToHelmet(metaWithName);
    let expected =
      finalMetaItem(
        ~name="description",
        ~content="A playful avatar generator for the modern age.",
        (),
      );
    expect(actual) |> toEqual(expected);
  });

  test("metaToHelmet - meta with property", () => {
    let metaWithProperty =
      MetaWithProperty(
        "og:description",
        "A playful avatar generator for the modern age.",
      );
    let actual = metaToHelmet(metaWithProperty);
    let expected =
      finalMetaItem(
        ~property="og:description",
        ~content="A playful avatar generator for the modern age.",
        (),
      );
    expect(actual) |> toEqual(expected);
  });
});