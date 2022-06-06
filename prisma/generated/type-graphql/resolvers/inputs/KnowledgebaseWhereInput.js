"use strict";
var KnowledgebaseWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.KnowledgebaseWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BigIntFilter_1 = require("../inputs/BigIntFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let KnowledgebaseWhereInput = KnowledgebaseWhereInput_1 = class KnowledgebaseWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [KnowledgebaseWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], KnowledgebaseWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [KnowledgebaseWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], KnowledgebaseWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [KnowledgebaseWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], KnowledgebaseWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BigIntFilter_1.BigIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BigIntFilter_1.BigIntFilter)
], KnowledgebaseWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], KnowledgebaseWhereInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], KnowledgebaseWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], KnowledgebaseWhereInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], KnowledgebaseWhereInput.prototype, "revision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], KnowledgebaseWhereInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], KnowledgebaseWhereInput.prototype, "resolution", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], KnowledgebaseWhereInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], KnowledgebaseWhereInput.prototype, "approver", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], KnowledgebaseWhereInput.prototype, "date_modified", void 0);
KnowledgebaseWhereInput = KnowledgebaseWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("KnowledgebaseWhereInput", {
        isAbstract: true
    })
], KnowledgebaseWhereInput);
exports.KnowledgebaseWhereInput = KnowledgebaseWhereInput;
