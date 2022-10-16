"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_typesOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_typesAvgOrderByAggregateInput_1 = require("../inputs/Product_typesAvgOrderByAggregateInput");
const Product_typesCountOrderByAggregateInput_1 = require("../inputs/Product_typesCountOrderByAggregateInput");
const Product_typesMaxOrderByAggregateInput_1 = require("../inputs/Product_typesMaxOrderByAggregateInput");
const Product_typesMinOrderByAggregateInput_1 = require("../inputs/Product_typesMinOrderByAggregateInput");
const Product_typesSumOrderByAggregateInput_1 = require("../inputs/Product_typesSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let Product_typesOrderByWithAggregationInput = class Product_typesOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_typesOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_typesOrderByWithAggregationInput.prototype, "type_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_typesOrderByWithAggregationInput.prototype, "taxes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_typesOrderByWithAggregationInput.prototype, "isShippable", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_typesOrderByWithAggregationInput.prototype, "meta_url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_typesOrderByWithAggregationInput.prototype, "meta_description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_typesOrderByWithAggregationInput.prototype, "filter_options", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_typesOrderByWithAggregationInput.prototype, "product_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_typesOrderByWithAggregationInput.prototype, "prod_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_typesOrderByWithAggregationInput.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_typesCountOrderByAggregateInput_1.Product_typesCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_typesCountOrderByAggregateInput_1.Product_typesCountOrderByAggregateInput)
], Product_typesOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_typesAvgOrderByAggregateInput_1.Product_typesAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_typesAvgOrderByAggregateInput_1.Product_typesAvgOrderByAggregateInput)
], Product_typesOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_typesMaxOrderByAggregateInput_1.Product_typesMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_typesMaxOrderByAggregateInput_1.Product_typesMaxOrderByAggregateInput)
], Product_typesOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_typesMinOrderByAggregateInput_1.Product_typesMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_typesMinOrderByAggregateInput_1.Product_typesMinOrderByAggregateInput)
], Product_typesOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_typesSumOrderByAggregateInput_1.Product_typesSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_typesSumOrderByAggregateInput_1.Product_typesSumOrderByAggregateInput)
], Product_typesOrderByWithAggregationInput.prototype, "_sum", void 0);
Product_typesOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Product_typesOrderByWithAggregationInput", {
        isAbstract: true
    })
], Product_typesOrderByWithAggregationInput);
exports.Product_typesOrderByWithAggregationInput = Product_typesOrderByWithAggregationInput;
