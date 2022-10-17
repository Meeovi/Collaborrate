"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCart_price_rulesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Cart_price_rulesOrderByWithAggregationInput_1 = require("../../../inputs/Cart_price_rulesOrderByWithAggregationInput");
const Cart_price_rulesScalarWhereWithAggregatesInput_1 = require("../../../inputs/Cart_price_rulesScalarWhereWithAggregatesInput");
const Cart_price_rulesWhereInput_1 = require("../../../inputs/Cart_price_rulesWhereInput");
const Cart_price_rulesScalarFieldEnum_1 = require("../../../../enums/Cart_price_rulesScalarFieldEnum");
let GroupByCart_price_rulesArgs = class GroupByCart_price_rulesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Cart_price_rulesWhereInput_1.Cart_price_rulesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Cart_price_rulesWhereInput_1.Cart_price_rulesWhereInput)
], GroupByCart_price_rulesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Cart_price_rulesOrderByWithAggregationInput_1.Cart_price_rulesOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCart_price_rulesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Cart_price_rulesScalarFieldEnum_1.Cart_price_rulesScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCart_price_rulesArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Cart_price_rulesScalarWhereWithAggregatesInput_1.Cart_price_rulesScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Cart_price_rulesScalarWhereWithAggregatesInput_1.Cart_price_rulesScalarWhereWithAggregatesInput)
], GroupByCart_price_rulesArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCart_price_rulesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCart_price_rulesArgs.prototype, "skip", void 0);
GroupByCart_price_rulesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByCart_price_rulesArgs);
exports.GroupByCart_price_rulesArgs = GroupByCart_price_rulesArgs;
