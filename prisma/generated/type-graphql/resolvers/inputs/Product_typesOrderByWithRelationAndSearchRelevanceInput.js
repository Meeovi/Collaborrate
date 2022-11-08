"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_typesOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_typesOrderByRelevanceInput_1 = require("../inputs/Product_typesOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let Product_typesOrderByWithRelationAndSearchRelevanceInput = class Product_typesOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_typesOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_typesOrderByWithRelationAndSearchRelevanceInput.prototype, "type_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_typesOrderByWithRelationAndSearchRelevanceInput.prototype, "taxes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_typesOrderByWithRelationAndSearchRelevanceInput.prototype, "isShippable", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_typesOrderByWithRelationAndSearchRelevanceInput.prototype, "meta_url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_typesOrderByWithRelationAndSearchRelevanceInput.prototype, "meta_description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_typesOrderByWithRelationAndSearchRelevanceInput.prototype, "filter_options", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_typesOrderByWithRelationAndSearchRelevanceInput.prototype, "product_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_typesOrderByWithRelationAndSearchRelevanceInput.prototype, "prod_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_typesOrderByWithRelationAndSearchRelevanceInput.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_typesOrderByRelevanceInput_1.Product_typesOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_typesOrderByRelevanceInput_1.Product_typesOrderByRelevanceInput)
], Product_typesOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
Product_typesOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Product_typesOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], Product_typesOrderByWithRelationAndSearchRelevanceInput);
exports.Product_typesOrderByWithRelationAndSearchRelevanceInput = Product_typesOrderByWithRelationAndSearchRelevanceInput;
