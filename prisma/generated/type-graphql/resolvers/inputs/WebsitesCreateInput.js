"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebsitesCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const ThemesCreateNestedManyWithoutWebsitesInput_1 = require("../inputs/ThemesCreateNestedManyWithoutWebsitesInput");
let WebsitesCreateInput = class WebsitesCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], WebsitesCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], WebsitesCreateInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebsitesCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebsitesCreateInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebsitesCreateInput.prototype, "shop", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebsitesCreateInput.prototype, "store", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThemesCreateNestedManyWithoutWebsitesInput_1.ThemesCreateNestedManyWithoutWebsitesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThemesCreateNestedManyWithoutWebsitesInput_1.ThemesCreateNestedManyWithoutWebsitesInput)
], WebsitesCreateInput.prototype, "themes", void 0);
WebsitesCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WebsitesCreateInput", {
        isAbstract: true
    })
], WebsitesCreateInput);
exports.WebsitesCreateInput = WebsitesCreateInput;
