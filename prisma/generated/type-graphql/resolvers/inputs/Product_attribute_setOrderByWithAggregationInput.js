"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_attribute_setOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_attribute_setAvgOrderByAggregateInput_1 = require("../inputs/Product_attribute_setAvgOrderByAggregateInput");
const Product_attribute_setCountOrderByAggregateInput_1 = require("../inputs/Product_attribute_setCountOrderByAggregateInput");
const Product_attribute_setMaxOrderByAggregateInput_1 = require("../inputs/Product_attribute_setMaxOrderByAggregateInput");
const Product_attribute_setMinOrderByAggregateInput_1 = require("../inputs/Product_attribute_setMinOrderByAggregateInput");
const Product_attribute_setSumOrderByAggregateInput_1 = require("../inputs/Product_attribute_setSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let Product_attribute_setOrderByWithAggregationInput = class Product_attribute_setOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attribute_setOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attribute_setOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attribute_setOrderByWithAggregationInput.prototype, "based_on", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attribute_setOrderByWithAggregationInput.prototype, "attribute_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attribute_setCountOrderByAggregateInput_1.Product_attribute_setCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attribute_setCountOrderByAggregateInput_1.Product_attribute_setCountOrderByAggregateInput)
], Product_attribute_setOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attribute_setAvgOrderByAggregateInput_1.Product_attribute_setAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attribute_setAvgOrderByAggregateInput_1.Product_attribute_setAvgOrderByAggregateInput)
], Product_attribute_setOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attribute_setMaxOrderByAggregateInput_1.Product_attribute_setMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attribute_setMaxOrderByAggregateInput_1.Product_attribute_setMaxOrderByAggregateInput)
], Product_attribute_setOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attribute_setMinOrderByAggregateInput_1.Product_attribute_setMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attribute_setMinOrderByAggregateInput_1.Product_attribute_setMinOrderByAggregateInput)
], Product_attribute_setOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attribute_setSumOrderByAggregateInput_1.Product_attribute_setSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attribute_setSumOrderByAggregateInput_1.Product_attribute_setSumOrderByAggregateInput)
], Product_attribute_setOrderByWithAggregationInput.prototype, "_sum", void 0);
Product_attribute_setOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Product_attribute_setOrderByWithAggregationInput", {
        isAbstract: true
    })
], Product_attribute_setOrderByWithAggregationInput);
exports.Product_attribute_setOrderByWithAggregationInput = Product_attribute_setOrderByWithAggregationInput;
