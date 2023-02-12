"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SegmentsWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const SegmentsWhereInput_1 = require("../inputs/SegmentsWhereInput");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let SegmentsWhereUniqueInput = class SegmentsWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], SegmentsWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SegmentsWhereInput_1.SegmentsWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SegmentsWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SegmentsWhereInput_1.SegmentsWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SegmentsWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SegmentsWhereInput_1.SegmentsWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SegmentsWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], SegmentsWhereUniqueInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], SegmentsWhereUniqueInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], SegmentsWhereUniqueInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], SegmentsWhereUniqueInput.prototype, "website", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], SegmentsWhereUniqueInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], SegmentsWhereUniqueInput.prototype, "apply_to", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], SegmentsWhereUniqueInput.prototype, "customers", void 0);
SegmentsWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SegmentsWhereUniqueInput", {
        isAbstract: true
    })
], SegmentsWhereUniqueInput);
exports.SegmentsWhereUniqueInput = SegmentsWhereUniqueInput;
