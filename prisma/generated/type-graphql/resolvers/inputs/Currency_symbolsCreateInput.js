"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency_symbolsCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let Currency_symbolsCreateInput = class Currency_symbolsCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Currency_symbolsCreateInput.prototype, "symbol", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Currency_symbolsCreateInput.prototype, "use_standard", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Currency_symbolsCreateInput.prototype, "id", void 0);
Currency_symbolsCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Currency_symbolsCreateInput", {
        isAbstract: true
    })
], Currency_symbolsCreateInput);
exports.Currency_symbolsCreateInput = Currency_symbolsCreateInput;
