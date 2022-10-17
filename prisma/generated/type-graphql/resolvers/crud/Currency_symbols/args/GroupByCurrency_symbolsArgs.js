"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCurrency_symbolsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Currency_symbolsOrderByWithAggregationInput_1 = require("../../../inputs/Currency_symbolsOrderByWithAggregationInput");
const Currency_symbolsScalarWhereWithAggregatesInput_1 = require("../../../inputs/Currency_symbolsScalarWhereWithAggregatesInput");
const Currency_symbolsWhereInput_1 = require("../../../inputs/Currency_symbolsWhereInput");
const Currency_symbolsScalarFieldEnum_1 = require("../../../../enums/Currency_symbolsScalarFieldEnum");
let GroupByCurrency_symbolsArgs = class GroupByCurrency_symbolsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_symbolsWhereInput_1.Currency_symbolsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Currency_symbolsWhereInput_1.Currency_symbolsWhereInput)
], GroupByCurrency_symbolsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Currency_symbolsOrderByWithAggregationInput_1.Currency_symbolsOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCurrency_symbolsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Currency_symbolsScalarFieldEnum_1.Currency_symbolsScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCurrency_symbolsArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_symbolsScalarWhereWithAggregatesInput_1.Currency_symbolsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Currency_symbolsScalarWhereWithAggregatesInput_1.Currency_symbolsScalarWhereWithAggregatesInput)
], GroupByCurrency_symbolsArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCurrency_symbolsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCurrency_symbolsArgs.prototype, "skip", void 0);
GroupByCurrency_symbolsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByCurrency_symbolsArgs);
exports.GroupByCurrency_symbolsArgs = GroupByCurrency_symbolsArgs;
