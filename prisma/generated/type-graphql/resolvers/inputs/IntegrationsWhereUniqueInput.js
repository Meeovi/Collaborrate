"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationsWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const IntegrationsWhereInput_1 = require("../inputs/IntegrationsWhereInput");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let IntegrationsWhereUniqueInput = class IntegrationsWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], IntegrationsWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IntegrationsWhereInput_1.IntegrationsWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IntegrationsWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IntegrationsWhereInput_1.IntegrationsWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IntegrationsWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IntegrationsWhereInput_1.IntegrationsWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IntegrationsWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], IntegrationsWhereUniqueInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], IntegrationsWhereUniqueInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], IntegrationsWhereUniqueInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], IntegrationsWhereUniqueInput.prototype, "media", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], IntegrationsWhereUniqueInput.prototype, "location", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], IntegrationsWhereUniqueInput.prototype, "category", void 0);
IntegrationsWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IntegrationsWhereUniqueInput", {
        isAbstract: true
    })
], IntegrationsWhereUniqueInput);
exports.IntegrationsWhereUniqueInput = IntegrationsWhereUniqueInput;
