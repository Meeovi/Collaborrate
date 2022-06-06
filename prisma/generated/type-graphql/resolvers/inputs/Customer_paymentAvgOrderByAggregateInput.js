"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_paymentAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Customer_paymentAvgOrderByAggregateInput = class Customer_paymentAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_paymentAvgOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_paymentAvgOrderByAggregateInput.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_paymentAvgOrderByAggregateInput.prototype, "account_no", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_paymentAvgOrderByAggregateInput.prototype, "expiry", void 0);
Customer_paymentAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Customer_paymentAvgOrderByAggregateInput", {
        isAbstract: true
    })
], Customer_paymentAvgOrderByAggregateInput);
exports.Customer_paymentAvgOrderByAggregateInput = Customer_paymentAvgOrderByAggregateInput;
