"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCustomerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomerOrderByWithAggregationInput_1 = require("../../../inputs/CustomerOrderByWithAggregationInput");
const CustomerScalarWhereWithAggregatesInput_1 = require("../../../inputs/CustomerScalarWhereWithAggregatesInput");
const CustomerWhereInput_1 = require("../../../inputs/CustomerWhereInput");
const CustomerScalarFieldEnum_1 = require("../../../../enums/CustomerScalarFieldEnum");
let GroupByCustomerArgs = class GroupByCustomerArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerWhereInput_1.CustomerWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomerWhereInput_1.CustomerWhereInput)
], GroupByCustomerArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CustomerOrderByWithAggregationInput_1.CustomerOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCustomerArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CustomerScalarFieldEnum_1.CustomerScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCustomerArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerScalarWhereWithAggregatesInput_1.CustomerScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomerScalarWhereWithAggregatesInput_1.CustomerScalarWhereWithAggregatesInput)
], GroupByCustomerArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCustomerArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCustomerArgs.prototype, "skip", void 0);
GroupByCustomerArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByCustomerArgs);
exports.GroupByCustomerArgs = GroupByCustomerArgs;
