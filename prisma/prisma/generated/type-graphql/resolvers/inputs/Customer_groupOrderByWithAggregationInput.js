"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_groupOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Customer_groupAvgOrderByAggregateInput_1 = require("../inputs/Customer_groupAvgOrderByAggregateInput");
const Customer_groupCountOrderByAggregateInput_1 = require("../inputs/Customer_groupCountOrderByAggregateInput");
const Customer_groupMaxOrderByAggregateInput_1 = require("../inputs/Customer_groupMaxOrderByAggregateInput");
const Customer_groupMinOrderByAggregateInput_1 = require("../inputs/Customer_groupMinOrderByAggregateInput");
const Customer_groupSumOrderByAggregateInput_1 = require("../inputs/Customer_groupSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let Customer_groupOrderByWithAggregationInput = class Customer_groupOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_groupOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_groupOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_groupOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_groupOrderByWithAggregationInput.prototype, "tax_class", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Customer_groupOrderByWithAggregationInput.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupCountOrderByAggregateInput_1.Customer_groupCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_groupCountOrderByAggregateInput_1.Customer_groupCountOrderByAggregateInput)
], Customer_groupOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupAvgOrderByAggregateInput_1.Customer_groupAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_groupAvgOrderByAggregateInput_1.Customer_groupAvgOrderByAggregateInput)
], Customer_groupOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupMaxOrderByAggregateInput_1.Customer_groupMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_groupMaxOrderByAggregateInput_1.Customer_groupMaxOrderByAggregateInput)
], Customer_groupOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupMinOrderByAggregateInput_1.Customer_groupMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_groupMinOrderByAggregateInput_1.Customer_groupMinOrderByAggregateInput)
], Customer_groupOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Customer_groupSumOrderByAggregateInput_1.Customer_groupSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Customer_groupSumOrderByAggregateInput_1.Customer_groupSumOrderByAggregateInput)
], Customer_groupOrderByWithAggregationInput.prototype, "_sum", void 0);
Customer_groupOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Customer_groupOrderByWithAggregationInput", {
        isAbstract: true
    })
], Customer_groupOrderByWithAggregationInput);
exports.Customer_groupOrderByWithAggregationInput = Customer_groupOrderByWithAggregationInput;
