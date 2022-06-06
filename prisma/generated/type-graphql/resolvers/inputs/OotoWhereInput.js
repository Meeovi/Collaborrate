"use strict";
var OotoWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OotoWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BigIntFilter_1 = require("../inputs/BigIntFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let OotoWhereInput = OotoWhereInput_1 = class OotoWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OotoWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OotoWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OotoWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OotoWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OotoWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OotoWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BigIntFilter_1.BigIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BigIntFilter_1.BigIntFilter)
], OotoWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], OotoWhereInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], OotoWhereInput.prototype, "login", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], OotoWhereInput.prototype, "start_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], OotoWhereInput.prototype, "end_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], OotoWhereInput.prototype, "note", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], OotoWhereInput.prototype, "using_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], OotoWhereInput.prototype, "location", void 0);
OotoWhereInput = OotoWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("OotoWhereInput", {
        isAbstract: true
    })
], OotoWhereInput);
exports.OotoWhereInput = OotoWhereInput;
