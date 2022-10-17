"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCustomer_groupArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customer_groupOrderByWithAggregationInput_1 = require("../../../inputs/Customer_groupOrderByWithAggregationInput");
const Customer_groupScalarWhereWithAggregatesInput_1 = require("../../../inputs/Customer_groupScalarWhereWithAggregatesInput");
const Customer_groupWhereInput_1 = require("../../../inputs/Customer_groupWhereInput");
const Customer_groupScalarFieldEnum_1 = require("../../../../enums/Customer_groupScalarFieldEnum");
let GroupByCustomer_groupArgs = class GroupByCustomer_groupArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupWhereInput_1.Customer_groupWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_groupWhereInput_1.Customer_groupWhereInput)
], GroupByCustomer_groupArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Customer_groupOrderByWithAggregationInput_1.Customer_groupOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCustomer_groupArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Customer_groupScalarFieldEnum_1.Customer_groupScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCustomer_groupArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupScalarWhereWithAggregatesInput_1.Customer_groupScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_groupScalarWhereWithAggregatesInput_1.Customer_groupScalarWhereWithAggregatesInput)
], GroupByCustomer_groupArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCustomer_groupArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCustomer_groupArgs.prototype, "skip", void 0);
GroupByCustomer_groupArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByCustomer_groupArgs);
exports.GroupByCustomer_groupArgs = GroupByCustomer_groupArgs;
