"use strict";
var Content_typeWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content_typeWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BigIntFilter_1 = require("../inputs/BigIntFilter");
const BoolNullableFilter_1 = require("../inputs/BoolNullableFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const DecimalNullableFilter_1 = require("../inputs/DecimalNullableFilter");
const JsonNullableFilter_1 = require("../inputs/JsonNullableFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let Content_typeWhereInput = Content_typeWhereInput_1 = class Content_typeWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Content_typeWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Content_typeWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Content_typeWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Content_typeWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Content_typeWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Content_typeWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BigIntFilter_1.BigIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BigIntFilter_1.BigIntFilter)
], Content_typeWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], Content_typeWhereInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Content_typeWhereInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DecimalNullableFilter_1.DecimalNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DecimalNullableFilter_1.DecimalNullableFilter)
], Content_typeWhereInput.prototype, "number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => JsonNullableFilter_1.JsonNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", JsonNullableFilter_1.JsonNullableFilter)
], Content_typeWhereInput.prototype, "json", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Content_typeWhereInput.prototype, "link", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Content_typeWhereInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Content_typeWhereInput.prototype, "uid", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], Content_typeWhereInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], Content_typeWhereInput.prototype, "time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], Content_typeWhereInput.prototype, "timestamp", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], Content_typeWhereInput.prototype, "boolean", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Content_typeWhereInput.prototype, "rich_text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Content_typeWhereInput.prototype, "password", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Content_typeWhereInput.prototype, "media", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Content_typeWhereInput.prototype, "database_name", void 0);
Content_typeWhereInput = Content_typeWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("Content_typeWhereInput", {
        isAbstract: true
    })
], Content_typeWhereInput);
exports.Content_typeWhereInput = Content_typeWhereInput;
