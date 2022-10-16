"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency_ratesWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let Currency_ratesWhereUniqueInput = class Currency_ratesWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Currency_ratesWhereUniqueInput.prototype, "import_service", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Currency_ratesWhereUniqueInput.prototype, "id", void 0);
Currency_ratesWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Currency_ratesWhereUniqueInput", {
        isAbstract: true
    })
], Currency_ratesWhereUniqueInput);
exports.Currency_ratesWhereUniqueInput = Currency_ratesWhereUniqueInput;
