"use strict";
var CommentsWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersRelationFilter_1 = require("../inputs/CustomersRelationFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let CommentsWhereInput = CommentsWhereInput_1 = class CommentsWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentsWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentsWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentsWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentsWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentsWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CommentsWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], CommentsWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CommentsWhereInput.prototype, "customer_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CommentsWhereInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CommentsWhereInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], CommentsWhereInput.prototype, "response", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], CommentsWhereInput.prototype, "published", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], CommentsWhereInput.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersRelationFilter_1.CustomersRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersRelationFilter_1.CustomersRelationFilter)
], CommentsWhereInput.prototype, "customers", void 0);
CommentsWhereInput = CommentsWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentsWhereInput", {
        isAbstract: true
    })
], CommentsWhereInput);
exports.CommentsWhereInput = CommentsWhereInput;
