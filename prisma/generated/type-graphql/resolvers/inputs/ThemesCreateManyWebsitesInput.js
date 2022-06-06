"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemesCreateManyWebsitesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ThemesCreateManyWebsitesInput = class ThemesCreateManyWebsitesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ThemesCreateManyWebsitesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThemesCreateManyWebsitesInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThemesCreateManyWebsitesInput.prototype, "parent_theme", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThemesCreateManyWebsitesInput.prototype, "theme_path", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThemesCreateManyWebsitesInput.prototype, "action", void 0);
ThemesCreateManyWebsitesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThemesCreateManyWebsitesInput", {
        isAbstract: true
    })
], ThemesCreateManyWebsitesInput);
exports.ThemesCreateManyWebsitesInput = ThemesCreateManyWebsitesInput;
