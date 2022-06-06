"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomerAvgOrderByAggregateInput_1 = require("../inputs/CustomerAvgOrderByAggregateInput");
const CustomerCountOrderByAggregateInput_1 = require("../inputs/CustomerCountOrderByAggregateInput");
const CustomerMaxOrderByAggregateInput_1 = require("../inputs/CustomerMaxOrderByAggregateInput");
const CustomerMinOrderByAggregateInput_1 = require("../inputs/CustomerMinOrderByAggregateInput");
const CustomerSumOrderByAggregateInput_1 = require("../inputs/CustomerSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let CustomerOrderByWithAggregationInput = class CustomerOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomerOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomerOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomerOrderByWithAggregationInput.prototype, "firstname", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomerOrderByWithAggregationInput.prototype, "lastname", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomerOrderByWithAggregationInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomerOrderByWithAggregationInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomerOrderByWithAggregationInput.prototype, "city", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomerOrderByWithAggregationInput.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomerOrderByWithAggregationInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomerOrderByWithAggregationInput.prototype, "postal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomerOrderByWithAggregationInput.prototype, "active", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerCountOrderByAggregateInput_1.CustomerCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomerCountOrderByAggregateInput_1.CustomerCountOrderByAggregateInput)
], CustomerOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerAvgOrderByAggregateInput_1.CustomerAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomerAvgOrderByAggregateInput_1.CustomerAvgOrderByAggregateInput)
], CustomerOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerMaxOrderByAggregateInput_1.CustomerMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomerMaxOrderByAggregateInput_1.CustomerMaxOrderByAggregateInput)
], CustomerOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerMinOrderByAggregateInput_1.CustomerMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomerMinOrderByAggregateInput_1.CustomerMinOrderByAggregateInput)
], CustomerOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerSumOrderByAggregateInput_1.CustomerSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomerSumOrderByAggregateInput_1.CustomerSumOrderByAggregateInput)
], CustomerOrderByWithAggregationInput.prototype, "_sum", void 0);
CustomerOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomerOrderByWithAggregationInput", {
        isAbstract: true
    })
], CustomerOrderByWithAggregationInput);
exports.CustomerOrderByWithAggregationInput = CustomerOrderByWithAggregationInput;
