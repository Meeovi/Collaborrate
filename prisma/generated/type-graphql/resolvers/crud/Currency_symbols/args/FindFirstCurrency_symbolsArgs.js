"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstCurrency_symbolsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Currency_symbolsOrderByWithRelationInput_1 = require("../../../inputs/Currency_symbolsOrderByWithRelationInput");
const Currency_symbolsWhereInput_1 = require("../../../inputs/Currency_symbolsWhereInput");
const Currency_symbolsWhereUniqueInput_1 = require("../../../inputs/Currency_symbolsWhereUniqueInput");
const Currency_symbolsScalarFieldEnum_1 = require("../../../../enums/Currency_symbolsScalarFieldEnum");
let FindFirstCurrency_symbolsArgs = class FindFirstCurrency_symbolsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_symbolsWhereInput_1.Currency_symbolsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Currency_symbolsWhereInput_1.Currency_symbolsWhereInput)
], FindFirstCurrency_symbolsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Currency_symbolsOrderByWithRelationInput_1.Currency_symbolsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstCurrency_symbolsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_symbolsWhereUniqueInput_1.Currency_symbolsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Currency_symbolsWhereUniqueInput_1.Currency_symbolsWhereUniqueInput)
], FindFirstCurrency_symbolsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstCurrency_symbolsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstCurrency_symbolsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Currency_symbolsScalarFieldEnum_1.Currency_symbolsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstCurrency_symbolsArgs.prototype, "distinct", void 0);
FindFirstCurrency_symbolsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstCurrency_symbolsArgs);
exports.FindFirstCurrency_symbolsArgs = FindFirstCurrency_symbolsArgs;
