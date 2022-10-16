"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency_symbolsMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let Currency_symbolsMaxAggregate = class Currency_symbolsMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Currency_symbolsMaxAggregate.prototype, "symbol", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Currency_symbolsMaxAggregate.prototype, "use_standard", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Currency_symbolsMaxAggregate.prototype, "id", void 0);
Currency_symbolsMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Currency_symbolsMaxAggregate", {
        isAbstract: true
    })
], Currency_symbolsMaxAggregate);
exports.Currency_symbolsMaxAggregate = Currency_symbolsMaxAggregate;
