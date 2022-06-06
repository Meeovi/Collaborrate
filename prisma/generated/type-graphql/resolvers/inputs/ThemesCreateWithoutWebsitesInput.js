"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemesCreateWithoutWebsitesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ThemesCreateWithoutWebsitesInput = class ThemesCreateWithoutWebsitesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThemesCreateWithoutWebsitesInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThemesCreateWithoutWebsitesInput.prototype, "parent_theme", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThemesCreateWithoutWebsitesInput.prototype, "theme_path", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThemesCreateWithoutWebsitesInput.prototype, "action", void 0);
ThemesCreateWithoutWebsitesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThemesCreateWithoutWebsitesInput", {
        isAbstract: true
    })
], ThemesCreateWithoutWebsitesInput);
exports.ThemesCreateWithoutWebsitesInput = ThemesCreateWithoutWebsitesInput;
