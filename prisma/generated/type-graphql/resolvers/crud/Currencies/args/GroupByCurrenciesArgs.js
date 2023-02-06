"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCurrenciesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CurrenciesOrderByWithAggregationInput_1 = require("../../../inputs/CurrenciesOrderByWithAggregationInput");
const CurrenciesScalarWhereWithAggregatesInput_1 = require("../../../inputs/CurrenciesScalarWhereWithAggregatesInput");
const CurrenciesWhereInput_1 = require("../../../inputs/CurrenciesWhereInput");
const CurrenciesScalarFieldEnum_1 = require("../../../../enums/CurrenciesScalarFieldEnum");
let GroupByCurrenciesArgs = class GroupByCurrenciesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrenciesWhereInput_1.CurrenciesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrenciesWhereInput_1.CurrenciesWhereInput)
], GroupByCurrenciesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CurrenciesOrderByWithAggregationInput_1.CurrenciesOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCurrenciesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CurrenciesScalarFieldEnum_1.CurrenciesScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCurrenciesArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrenciesScalarWhereWithAggregatesInput_1.CurrenciesScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrenciesScalarWhereWithAggregatesInput_1.CurrenciesScalarWhereWithAggregatesInput)
], GroupByCurrenciesArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCurrenciesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCurrenciesArgs.prototype, "skip", void 0);
GroupByCurrenciesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByCurrenciesArgs);
exports.GroupByCurrenciesArgs = GroupByCurrenciesArgs;
