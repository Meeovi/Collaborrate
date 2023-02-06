"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemesOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ThemesOrderByRelevanceFieldEnum;
(function (ThemesOrderByRelevanceFieldEnum) {
    ThemesOrderByRelevanceFieldEnum["title"] = "title";
    ThemesOrderByRelevanceFieldEnum["parent_theme"] = "parent_theme";
    ThemesOrderByRelevanceFieldEnum["theme_path"] = "theme_path";
    ThemesOrderByRelevanceFieldEnum["action"] = "action";
    ThemesOrderByRelevanceFieldEnum["websites"] = "websites";
})(ThemesOrderByRelevanceFieldEnum = exports.ThemesOrderByRelevanceFieldEnum || (exports.ThemesOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(ThemesOrderByRelevanceFieldEnum, {
    name: "ThemesOrderByRelevanceFieldEnum",
    description: undefined,
});
