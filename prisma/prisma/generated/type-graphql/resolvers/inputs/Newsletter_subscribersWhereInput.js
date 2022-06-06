"use strict";
var Newsletter_subscribersWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Newsletter_subscribersWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersRelationFilter_1 = require("../inputs/CustomersRelationFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let Newsletter_subscribersWhereInput = Newsletter_subscribersWhereInput_1 = class Newsletter_subscribersWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Newsletter_subscribersWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Newsletter_subscribersWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Newsletter_subscribersWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Newsletter_subscribersWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Newsletter_subscribersWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Newsletter_subscribersWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], Newsletter_subscribersWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], Newsletter_subscribersWhereInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Newsletter_subscribersWhereInput.prototype, "customer_first_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Newsletter_subscribersWhereInput.prototype, "customer_last_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Newsletter_subscribersWhereInput.prototype, "store", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Newsletter_subscribersWhereInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Newsletter_subscribersWhereInput.prototype, "websites", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], Newsletter_subscribersWhereInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], Newsletter_subscribersWhereInput.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersRelationFilter_1.CustomersRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersRelationFilter_1.CustomersRelationFilter)
], Newsletter_subscribersWhereInput.prototype, "customers", void 0);
Newsletter_subscribersWhereInput = Newsletter_subscribersWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("Newsletter_subscribersWhereInput", {
        isAbstract: true
    })
], Newsletter_subscribersWhereInput);
exports.Newsletter_subscribersWhereInput = Newsletter_subscribersWhereInput;
