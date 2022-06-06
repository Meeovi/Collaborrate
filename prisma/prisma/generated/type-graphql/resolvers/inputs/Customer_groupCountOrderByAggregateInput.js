"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_groupCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Customer_groupCountOrderByAggregateInput = class Customer_groupCountOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_groupCountOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_groupCountOrderByAggregateInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_groupCountOrderByAggregateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_groupCountOrderByAggregateInput.prototype, "tax_class", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_groupCountOrderByAggregateInput.prototype, "cust_id", void 0);
Customer_groupCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Customer_groupCountOrderByAggregateInput", {
        isAbstract: true
    })
], Customer_groupCountOrderByAggregateInput);
exports.Customer_groupCountOrderByAggregateInput = Customer_groupCountOrderByAggregateInput;
