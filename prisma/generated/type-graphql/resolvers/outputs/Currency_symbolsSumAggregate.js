"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency_symbolsSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let Currency_symbolsSumAggregate = class Currency_symbolsSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Currency_symbolsSumAggregate.prototype, "id", void 0);
Currency_symbolsSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Currency_symbolsSumAggregate", {
        isAbstract: true
    })
], Currency_symbolsSumAggregate);
exports.Currency_symbolsSumAggregate = Currency_symbolsSumAggregate;
