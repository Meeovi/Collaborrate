"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_groupSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Customer_groupSumOrderByAggregateInput = class Customer_groupSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_groupSumOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_groupSumOrderByAggregateInput.prototype, "cust_id", void 0);
Customer_groupSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Customer_groupSumOrderByAggregateInput", {
        isAbstract: true
    })
], Customer_groupSumOrderByAggregateInput);
exports.Customer_groupSumOrderByAggregateInput = Customer_groupSumOrderByAggregateInput;
