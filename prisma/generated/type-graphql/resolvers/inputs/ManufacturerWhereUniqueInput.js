"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManufacturerWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const BigIntNullableFilter_1 = require("../inputs/BigIntNullableFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const ManufacturerWhereInput_1 = require("../inputs/ManufacturerWhereInput");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let ManufacturerWhereUniqueInput = class ManufacturerWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], ManufacturerWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ManufacturerWhereInput_1.ManufacturerWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ManufacturerWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ManufacturerWhereInput_1.ManufacturerWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ManufacturerWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ManufacturerWhereInput_1.ManufacturerWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ManufacturerWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], ManufacturerWhereUniqueInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ManufacturerWhereUniqueInput.prototype, "code", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ManufacturerWhereUniqueInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ManufacturerWhereUniqueInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ManufacturerWhereUniqueInput.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ManufacturerWhereUniqueInput.prototype, "isPublic", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ManufacturerWhereUniqueInput.prototype, "city", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BigIntNullableFilter_1.BigIntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BigIntNullableFilter_1.BigIntNullableFilter)
], ManufacturerWhereUniqueInput.prototype, "product", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ManufacturerWhereUniqueInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ManufacturerWhereUniqueInput.prototype, "media", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ManufacturerWhereUniqueInput.prototype, "products", void 0);
ManufacturerWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ManufacturerWhereUniqueInput", {
        isAbstract: true
    })
], ManufacturerWhereUniqueInput);
exports.ManufacturerWhereUniqueInput = ManufacturerWhereUniqueInput;
