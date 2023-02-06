"use strict";
var InternalizationWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalizationWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BigIntFilter_1 = require("../inputs/BigIntFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let InternalizationWhereInput = InternalizationWhereInput_1 = class InternalizationWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InternalizationWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InternalizationWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InternalizationWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InternalizationWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InternalizationWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InternalizationWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BigIntFilter_1.BigIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BigIntFilter_1.BigIntFilter)
], InternalizationWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], InternalizationWhereInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], InternalizationWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], InternalizationWhereInput.prototype, "region", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], InternalizationWhereInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], InternalizationWhereInput.prototype, "default", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], InternalizationWhereInput.prototype, "website", void 0);
InternalizationWhereInput = InternalizationWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("InternalizationWhereInput", {
        isAbstract: true
    })
], InternalizationWhereInput);
exports.InternalizationWhereInput = InternalizationWhereInput;
