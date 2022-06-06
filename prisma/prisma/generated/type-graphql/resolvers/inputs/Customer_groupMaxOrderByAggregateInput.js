"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_groupMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Customer_groupMaxOrderByAggregateInput = class Customer_groupMaxOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_groupMaxOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_groupMaxOrderByAggregateInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_groupMaxOrderByAggregateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_groupMaxOrderByAggregateInput.prototype, "tax_class", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_groupMaxOrderByAggregateInput.prototype, "cust_id", void 0);
Customer_groupMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Customer_groupMaxOrderByAggregateInput", {
        isAbstract: true
    })
], Customer_groupMaxOrderByAggregateInput);
exports.Customer_groupMaxOrderByAggregateInput = Customer_groupMaxOrderByAggregateInput;
