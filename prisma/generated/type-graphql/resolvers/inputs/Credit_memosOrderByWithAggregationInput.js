"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credit_memosOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Credit_memosAvgOrderByAggregateInput_1 = require("../inputs/Credit_memosAvgOrderByAggregateInput");
const Credit_memosCountOrderByAggregateInput_1 = require("../inputs/Credit_memosCountOrderByAggregateInput");
const Credit_memosMaxOrderByAggregateInput_1 = require("../inputs/Credit_memosMaxOrderByAggregateInput");
const Credit_memosMinOrderByAggregateInput_1 = require("../inputs/Credit_memosMinOrderByAggregateInput");
const Credit_memosSumOrderByAggregateInput_1 = require("../inputs/Credit_memosSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let Credit_memosOrderByWithAggregationInput = class Credit_memosOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosOrderByWithAggregationInput.prototype, "credit_memo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosOrderByWithAggregationInput.prototype, "order_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosOrderByWithAggregationInput.prototype, "created", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosOrderByWithAggregationInput.prototype, "bill_to_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosOrderByWithAggregationInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosOrderByWithAggregationInput.prototype, "refunded", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosOrderByWithAggregationInput.prototype, "action", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosOrderByWithAggregationInput.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosOrderByWithAggregationInput.prototype, "prod_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosOrderByWithAggregationInput.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Credit_memosOrderByWithAggregationInput.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosCountOrderByAggregateInput_1.Credit_memosCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Credit_memosCountOrderByAggregateInput_1.Credit_memosCountOrderByAggregateInput)
], Credit_memosOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosAvgOrderByAggregateInput_1.Credit_memosAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Credit_memosAvgOrderByAggregateInput_1.Credit_memosAvgOrderByAggregateInput)
], Credit_memosOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosMaxOrderByAggregateInput_1.Credit_memosMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Credit_memosMaxOrderByAggregateInput_1.Credit_memosMaxOrderByAggregateInput)
], Credit_memosOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosMinOrderByAggregateInput_1.Credit_memosMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Credit_memosMinOrderByAggregateInput_1.Credit_memosMinOrderByAggregateInput)
], Credit_memosOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Credit_memosSumOrderByAggregateInput_1.Credit_memosSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Credit_memosSumOrderByAggregateInput_1.Credit_memosSumOrderByAggregateInput)
], Credit_memosOrderByWithAggregationInput.prototype, "_sum", void 0);
Credit_memosOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Credit_memosOrderByWithAggregationInput", {
        isAbstract: true
    })
], Credit_memosOrderByWithAggregationInput);
exports.Credit_memosOrderByWithAggregationInput = Credit_memosOrderByWithAggregationInput;
