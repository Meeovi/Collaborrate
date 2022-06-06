"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemesCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WebsitesCreateNestedOneWithoutThemesInput_1 = require("../inputs/WebsitesCreateNestedOneWithoutThemesInput");
let ThemesCreateInput = class ThemesCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThemesCreateInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThemesCreateInput.prototype, "parent_theme", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThemesCreateInput.prototype, "theme_path", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThemesCreateInput.prototype, "action", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebsitesCreateNestedOneWithoutThemesInput_1.WebsitesCreateNestedOneWithoutThemesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WebsitesCreateNestedOneWithoutThemesInput_1.WebsitesCreateNestedOneWithoutThemesInput)
], ThemesCreateInput.prototype, "websites", void 0);
ThemesCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThemesCreateInput", {
        isAbstract: true
    })
], ThemesCreateInput);
exports.ThemesCreateInput = ThemesCreateInput;
