"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebsitesCreateWithoutThemesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let WebsitesCreateWithoutThemesInput = class WebsitesCreateWithoutThemesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], WebsitesCreateWithoutThemesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], WebsitesCreateWithoutThemesInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebsitesCreateWithoutThemesInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebsitesCreateWithoutThemesInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebsitesCreateWithoutThemesInput.prototype, "shop", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebsitesCreateWithoutThemesInput.prototype, "store", void 0);
WebsitesCreateWithoutThemesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WebsitesCreateWithoutThemesInput", {
        isAbstract: true
    })
], WebsitesCreateWithoutThemesInput);
exports.WebsitesCreateWithoutThemesInput = WebsitesCreateWithoutThemesInput;
