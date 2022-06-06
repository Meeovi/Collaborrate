"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhooksWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let WebhooksWhereUniqueInput = class WebhooksWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], WebhooksWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebhooksWhereUniqueInput.prototype, "name", void 0);
WebhooksWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WebhooksWhereUniqueInput", {
        isAbstract: true
    })
], WebhooksWhereUniqueInput);
exports.WebhooksWhereUniqueInput = WebhooksWhereUniqueInput;
