"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalizationWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const InternalizationWhereInput_1 = require("../inputs/InternalizationWhereInput");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let InternalizationWhereUniqueInput = class InternalizationWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], InternalizationWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InternalizationWhereInput_1.InternalizationWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InternalizationWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InternalizationWhereInput_1.InternalizationWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InternalizationWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [InternalizationWhereInput_1.InternalizationWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], InternalizationWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], InternalizationWhereUniqueInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], InternalizationWhereUniqueInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], InternalizationWhereUniqueInput.prototype, "region", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], InternalizationWhereUniqueInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], InternalizationWhereUniqueInput.prototype, "default", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], InternalizationWhereUniqueInput.prototype, "website", void 0);
InternalizationWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InternalizationWhereUniqueInput", {
        isAbstract: true
    })
], InternalizationWhereUniqueInput);
exports.InternalizationWhereUniqueInput = InternalizationWhereUniqueInput;
