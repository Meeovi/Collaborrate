"use strict";
var Newsletter_subscribersScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Newsletter_subscribersScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let Newsletter_subscribersScalarWhereInput = Newsletter_subscribersScalarWhereInput_1 = class Newsletter_subscribersScalarWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Newsletter_subscribersScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Newsletter_subscribersScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Newsletter_subscribersScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Newsletter_subscribersScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Newsletter_subscribersScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Newsletter_subscribersScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], Newsletter_subscribersScalarWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], Newsletter_subscribersScalarWhereInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Newsletter_subscribersScalarWhereInput.prototype, "customer_first_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Newsletter_subscribersScalarWhereInput.prototype, "customer_last_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Newsletter_subscribersScalarWhereInput.prototype, "store", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Newsletter_subscribersScalarWhereInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Newsletter_subscribersScalarWhereInput.prototype, "websites", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], Newsletter_subscribersScalarWhereInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], Newsletter_subscribersScalarWhereInput.prototype, "cust_id", void 0);
Newsletter_subscribersScalarWhereInput = Newsletter_subscribersScalarWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("Newsletter_subscribersScalarWhereInput", {
        isAbstract: true
    })
], Newsletter_subscribersScalarWhereInput);
exports.Newsletter_subscribersScalarWhereInput = Newsletter_subscribersScalarWhereInput;
