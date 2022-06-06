"use strict";
var EmailsWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailsWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersRelationFilter_1 = require("../inputs/CustomersRelationFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let EmailsWhereInput = EmailsWhereInput_1 = class EmailsWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EmailsWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EmailsWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EmailsWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EmailsWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EmailsWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EmailsWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], EmailsWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], EmailsWhereInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], EmailsWhereInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], EmailsWhereInput.prototype, "subject", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], EmailsWhereInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], EmailsWhereInput.prototype, "recipients", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], EmailsWhereInput.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersRelationFilter_1.CustomersRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersRelationFilter_1.CustomersRelationFilter)
], EmailsWhereInput.prototype, "customers", void 0);
EmailsWhereInput = EmailsWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("EmailsWhereInput", {
        isAbstract: true
    })
], EmailsWhereInput);
exports.EmailsWhereInput = EmailsWhereInput;
