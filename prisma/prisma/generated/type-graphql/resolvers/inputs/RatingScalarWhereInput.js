"use strict";
var RatingScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BigIntFilter_1 = require("../inputs/BigIntFilter");
const BoolNullableFilter_1 = require("../inputs/BoolNullableFilter");
const DecimalNullableFilter_1 = require("../inputs/DecimalNullableFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let RatingScalarWhereInput = RatingScalarWhereInput_1 = class RatingScalarWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RatingScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RatingScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RatingScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RatingScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RatingScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RatingScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], RatingScalarWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], RatingScalarWhereInput.prototype, "default_value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], RatingScalarWhereInput.prototype, "default_store_view", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], RatingScalarWhereInput.prototype, "rating_visibility", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], RatingScalarWhereInput.prototype, "active", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DecimalNullableFilter_1.DecimalNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DecimalNullableFilter_1.DecimalNullableFilter)
], RatingScalarWhereInput.prototype, "sort_order", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BigIntFilter_1.BigIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BigIntFilter_1.BigIntFilter)
], RatingScalarWhereInput.prototype, "prod_id", void 0);
RatingScalarWhereInput = RatingScalarWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("RatingScalarWhereInput", {
        isAbstract: true
    })
], RatingScalarWhereInput);
exports.RatingScalarWhereInput = RatingScalarWhereInput;
