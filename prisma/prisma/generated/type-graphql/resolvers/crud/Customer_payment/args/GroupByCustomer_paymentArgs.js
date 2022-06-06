"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCustomer_paymentArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customer_paymentOrderByWithAggregationInput_1 = require("../../../inputs/Customer_paymentOrderByWithAggregationInput");
const Customer_paymentScalarWhereWithAggregatesInput_1 = require("../../../inputs/Customer_paymentScalarWhereWithAggregatesInput");
const Customer_paymentWhereInput_1 = require("../../../inputs/Customer_paymentWhereInput");
const Customer_paymentScalarFieldEnum_1 = require("../../../../enums/Customer_paymentScalarFieldEnum");
let GroupByCustomer_paymentArgs = class GroupByCustomer_paymentArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentWhereInput_1.Customer_paymentWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_paymentWhereInput_1.Customer_paymentWhereInput)
], GroupByCustomer_paymentArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Customer_paymentOrderByWithAggregationInput_1.Customer_paymentOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCustomer_paymentArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Customer_paymentScalarFieldEnum_1.Customer_paymentScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCustomer_paymentArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentScalarWhereWithAggregatesInput_1.Customer_paymentScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_paymentScalarWhereWithAggregatesInput_1.Customer_paymentScalarWhereWithAggregatesInput)
], GroupByCustomer_paymentArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCustomer_paymentArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCustomer_paymentArgs.prototype, "skip", void 0);
GroupByCustomer_paymentArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByCustomer_paymentArgs);
exports.GroupByCustomer_paymentArgs = GroupByCustomer_paymentArgs;
