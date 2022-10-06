"use strict";

var React = require("react");
var styled = require("styled-components");
var constants = require("@/libs/constants");
var globals = require("@/styles/globals");
var reactTextfit = require("react-textfit");

function _interopDefaultLegacy(e: any) {
  return e && typeof e === "object" && "default" in e ? e : { default: e };
}

var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/ _interopDefaultLegacy(styled);

var OpenGraphImage = function OpenGraphImage() {
  return /*#__PURE__*/ React__default["default"].createElement(
    Container,
    null,
    /*#__PURE__*/ React__default["default"].createElement(
      Content,
      null,
      /*#__PURE__*/ React__default["default"].createElement(
        "h1",
        null,
        /*#__PURE__*/ React__default["default"].createElement(
          reactTextfit.Textfit,
          {
            max: 256,
            min: 24,
            style: {
              maxHeight: "80%",
              minHeight: "80%",
              lineHeight: "1",
            },
          },
          "Being a software enginner is not all it\u2019s cut out to be."
        )
      ),
      /*#__PURE__*/ React__default["default"].createElement(
        ContentMeta,
        null,
        /*#__PURE__*/ React__default["default"].createElement(
          Tags,
          null,
          /*#__PURE__*/ React__default["default"].createElement(
            "li",
            null,
            "life"
          ),
          /*#__PURE__*/ React__default["default"].createElement(
            "li",
            null,
            "career"
          ),
          /*#__PURE__*/ React__default["default"].createElement(
            "li",
            null,
            "web_dev"
          )
        ),
        /*#__PURE__*/ React__default["default"].createElement(
          "p",
          null,
          "@ChinonsoEmmanuel"
        )
      )
    )
  );
};

var Container = styled__default["default"].section.withConfig({
  displayName: "OpenGraphImage__Container",
  componentId: "sc-le7n5x-0",
})(
  [
    "width:calc(1200px);height:calc(630px);background-image:",
    ";padding:40px;display:flex;box-shadow:2.8px 2.8px 2.2px rgba(0,0,0,0.02),6.7px 6.7px 5.3px rgba(0,0,0,0.028),12.5px 12.5px 10px rgba(0,0,0,0.035),22.3px 22.3px 17.9px rgba(0,0,0,0.042),41.8px 41.8px 33.4px rgba(0,0,0,0.05),100px 100px 80px rgba(0,0,0,0.07);overflow:hidden;",
    "",
  ],
  constants.COLORS.linearGradient,
  globals.injectGlobalStyles
);
var Content = styled__default["default"].div.withConfig({
  displayName: "OpenGraphImage__Content",
  componentId: "sc-le7n5x-1",
})([
  "display:flex;flex-direction:column;justify-content:space-between;flex:1;padding:2rem;background:#160e04;color:#fcf4e9;border-radius:15px;& > h1{height:100%;}",
]);
var Tags = styled__default["default"].ul.withConfig({
  displayName: "OpenGraphImage__Tags",
  componentId: "sc-le7n5x-2",
})([
  'list-style:none;display:flex;align-items:center;gap:0.5rem;& li:not(:first-child)::before{content:"\u2022";margin-right:0.5rem;}',
]);
var ContentMeta = styled__default["default"].div.withConfig({
  displayName: "OpenGraphImage__ContentMeta",
  componentId: "sc-le7n5x-3",
})(["display:flex;justify-content:space-between;font-size:24px;"]);

module.exports = OpenGraphImage;
export {};
