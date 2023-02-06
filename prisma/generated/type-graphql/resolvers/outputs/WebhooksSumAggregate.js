"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhooksSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let WebhooksSumAggregate = class WebhooksSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], WebhooksSumAggregate.prototype, "id", void 0);
WebhooksSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("WebhooksSumAggregate", {
        isAbstract: true
    })
], WebhooksSumAggregate);
exports.WebhooksSumAggregate = WebhooksSumAggregate;
