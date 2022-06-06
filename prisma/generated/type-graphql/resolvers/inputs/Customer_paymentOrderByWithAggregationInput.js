"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_paymentOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customer_paymentAvgOrderByAggregateInput_1 = require("../inputs/Customer_paymentAvgOrderByAggregateInput");
const Customer_paymentCountOrderByAggregateInput_1 = require("../inputs/Customer_paymentCountOrderByAggregateInput");
const Customer_paymentMaxOrderByAggregateInput_1 = require("../inputs/Customer_paymentMaxOrderByAggregateInput");
const Customer_paymentMinOrderByAggregateInput_1 = require("../inputs/Customer_paymentMinOrderByAggregateInput");
const Customer_paymentSumOrderByAggregateInput_1 = require("../inputs/Customer_paymentSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let Customer_paymentOrderByWithAggregationInput = class Customer_paymentOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_paymentOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_paymentOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_paymentOrderByWithAggregationInput.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_paymentOrderByWithAggregationInput.prototype, "payment_info", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_paymentOrderByWithAggregationInput.prototype, "provider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_paymentOrderByWithAggregationInput.prototype, "account_no", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_paymentOrderByWithAggregationInput.prototype, "expiry", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentCountOrderByAggregateInput_1.Customer_paymentCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_paymentCountOrderByAggregateInput_1.Customer_paymentCountOrderByAggregateInput)
], Customer_paymentOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentAvgOrderByAggregateInput_1.Customer_paymentAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_paymentAvgOrderByAggregateInput_1.Customer_paymentAvgOrderByAggregateInput)
], Customer_paymentOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentMaxOrderByAggregateInput_1.Customer_paymentMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_paymentMaxOrderByAggregateInput_1.Customer_paymentMaxOrderByAggregateInput)
], Customer_paymentOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentMinOrderByAggregateInput_1.Customer_paymentMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_paymentMinOrderByAggregateInput_1.Customer_paymentMinOrderByAggregateInput)
], Customer_paymentOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_paymentSumOrderByAggregateInput_1.Customer_paymentSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_paymentSumOrderByAggregateInput_1.Customer_paymentSumOrderByAggregateInput)
], Customer_paymentOrderByWithAggregationInput.prototype, "_sum", void 0);
Customer_paymentOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Customer_paymentOrderByWithAggregationInput", {
        isAbstract: true
    })
], Customer_paymentOrderByWithAggregationInput);
exports.Customer_paymentOrderByWithAggregationInput = Customer_paymentOrderByWithAggregationInput;
