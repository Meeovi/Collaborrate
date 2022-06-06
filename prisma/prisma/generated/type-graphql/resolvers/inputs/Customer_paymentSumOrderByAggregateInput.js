"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_paymentSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Customer_paymentSumOrderByAggregateInput = class Customer_paymentSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_paymentSumOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_paymentSumOrderByAggregateInput.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_paymentSumOrderByAggregateInput.prototype, "account_no", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_paymentSumOrderByAggregateInput.prototype, "expiry", void 0);
Customer_paymentSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Customer_paymentSumOrderByAggregateInput", {
        isAbstract: true
    })
], Customer_paymentSumOrderByAggregateInput);
exports.Customer_paymentSumOrderByAggregateInput = Customer_paymentSumOrderByAggregateInput;
