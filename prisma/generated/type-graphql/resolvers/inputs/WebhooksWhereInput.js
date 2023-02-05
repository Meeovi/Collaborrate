"use strict";
var WebhooksWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhooksWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BigIntFilter_1 = require("../inputs/BigIntFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let WebhooksWhereInput = WebhooksWhereInput_1 = class WebhooksWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WebhooksWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WebhooksWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WebhooksWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WebhooksWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WebhooksWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], WebhooksWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BigIntFilter_1.BigIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BigIntFilter_1.BigIntFilter)
], WebhooksWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], WebhooksWhereInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], WebhooksWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], WebhooksWhereInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], WebhooksWhereInput.prototype, "headers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], WebhooksWhereInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], WebhooksWhereInput.prototype, "retrieve", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], WebhooksWhereInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], WebhooksWhereInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], WebhooksWhereInput.prototype, "publish", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], WebhooksWhereInput.prototype, "unpublish", void 0);
WebhooksWhereInput = WebhooksWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("WebhooksWhereInput", {
        isAbstract: true
    })
], WebhooksWhereInput);
exports.WebhooksWhereInput = WebhooksWhereInput;
