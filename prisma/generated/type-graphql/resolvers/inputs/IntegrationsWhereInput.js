"use strict";
var IntegrationsWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationsWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BigIntFilter_1 = require("../inputs/BigIntFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let IntegrationsWhereInput = IntegrationsWhereInput_1 = class IntegrationsWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IntegrationsWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IntegrationsWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IntegrationsWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IntegrationsWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IntegrationsWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IntegrationsWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BigIntFilter_1.BigIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BigIntFilter_1.BigIntFilter)
], IntegrationsWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], IntegrationsWhereInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], IntegrationsWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], IntegrationsWhereInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], IntegrationsWhereInput.prototype, "media", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], IntegrationsWhereInput.prototype, "location", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], IntegrationsWhereInput.prototype, "category", void 0);
IntegrationsWhereInput = IntegrationsWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("IntegrationsWhereInput", {
        isAbstract: true
    })
], IntegrationsWhereInput);
exports.IntegrationsWhereInput = IntegrationsWhereInput;
