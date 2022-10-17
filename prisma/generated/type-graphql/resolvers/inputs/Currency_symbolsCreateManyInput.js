"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency_symbolsCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let Currency_symbolsCreateManyInput = class Currency_symbolsCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Currency_symbolsCreateManyInput.prototype, "symbol", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Currency_symbolsCreateManyInput.prototype, "use_standard", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Currency_symbolsCreateManyInput.prototype, "id", void 0);
Currency_symbolsCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Currency_symbolsCreateManyInput", {
        isAbstract: true
    })
], Currency_symbolsCreateManyInput);
exports.Currency_symbolsCreateManyInput = Currency_symbolsCreateManyInput;
