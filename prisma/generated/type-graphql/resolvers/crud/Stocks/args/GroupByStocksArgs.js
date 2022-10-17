"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByStocksArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StocksOrderByWithAggregationInput_1 = require("../../../inputs/StocksOrderByWithAggregationInput");
const StocksScalarWhereWithAggregatesInput_1 = require("../../../inputs/StocksScalarWhereWithAggregatesInput");
const StocksWhereInput_1 = require("../../../inputs/StocksWhereInput");
const StocksScalarFieldEnum_1 = require("../../../../enums/StocksScalarFieldEnum");
let GroupByStocksArgs = class GroupByStocksArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StocksWhereInput_1.StocksWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StocksWhereInput_1.StocksWhereInput)
], GroupByStocksArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StocksOrderByWithAggregationInput_1.StocksOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByStocksArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StocksScalarFieldEnum_1.StocksScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByStocksArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StocksScalarWhereWithAggregatesInput_1.StocksScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StocksScalarWhereWithAggregatesInput_1.StocksScalarWhereWithAggregatesInput)
], GroupByStocksArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByStocksArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByStocksArgs.prototype, "skip", void 0);
GroupByStocksArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByStocksArgs);
exports.GroupByStocksArgs = GroupByStocksArgs;
