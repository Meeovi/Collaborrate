"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_groupAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Customer_groupAvgOrderByAggregateInput = class Customer_groupAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_groupAvgOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_groupAvgOrderByAggregateInput.prototype, "cust_id", void 0);
Customer_groupAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Customer_groupAvgOrderByAggregateInput", {
        isAbstract: true
    })
], Customer_groupAvgOrderByAggregateInput);
exports.Customer_groupAvgOrderByAggregateInput = Customer_groupAvgOrderByAggregateInput;
