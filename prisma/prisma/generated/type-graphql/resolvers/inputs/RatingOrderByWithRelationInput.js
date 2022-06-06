"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductsOrderByWithRelationInput_1 = require("../inputs/ProductsOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let RatingOrderByWithRelationInput = class RatingOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RatingOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RatingOrderByWithRelationInput.prototype, "default_value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RatingOrderByWithRelationInput.prototype, "default_store_view", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RatingOrderByWithRelationInput.prototype, "rating_visibility", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RatingOrderByWithRelationInput.prototype, "active", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RatingOrderByWithRelationInput.prototype, "sort_order", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RatingOrderByWithRelationInput.prototype, "prod_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsOrderByWithRelationInput_1.ProductsOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsOrderByWithRelationInput_1.ProductsOrderByWithRelationInput)
], RatingOrderByWithRelationInput.prototype, "products", void 0);
RatingOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RatingOrderByWithRelationInput", {
        isAbstract: true
    })
], RatingOrderByWithRelationInput);
exports.RatingOrderByWithRelationInput = RatingOrderByWithRelationInput;
