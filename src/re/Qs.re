module type ParserSchema = {type t;};

module MakeParser = (Schema: ParserSchema) => {
  [@bs.module "qs"] external parse: string => Js.t(Schema.t) = "parse";
};

[@bs.module "qs"] external stringify: Js.t({..}) => string = "stringify";
