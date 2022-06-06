"use strict";
var RatingWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BigIntFilter_1 = require("../inputs/BigIntFilter");
const BoolNullableFilter_1 = require("../inputs/BoolNullableFilter");
const DecimalNullableFilter_1 = require("../inputs/DecimalNullableFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const ProductsRelationFilter_1 = require("../inputs/ProductsRelationFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let RatingWhereInput = RatingWhereInput_1 = class RatingWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RatingWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RatingWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RatingWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RatingWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RatingWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RatingWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], RatingWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], RatingWhereInput.prototype, "default_value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], RatingWhereInput.prototype, "default_store_view", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], RatingWhereInput.prototype, "rating_visibility", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], RatingWhereInput.prototype, "active", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DecimalNullableFilter_1.DecimalNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DecimalNullableFilter_1.DecimalNullableFilter)
], RatingWhereInput.prototype, "sort_order", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BigIntFilter_1.BigIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BigIntFilter_1.BigIntFilter)
], RatingWhereInput.prototype, "prod_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsRelationFilter_1.ProductsRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsRelationFilter_1.ProductsRelationFilter)
], RatingWhereInput.prototype, "products", void 0);
RatingWhereInput = RatingWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("RatingWhereInput", {
        isAbstract: true
    })
], RatingWhereInput);
exports.RatingWhereInput = RatingWhereInput;
