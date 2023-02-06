"use strict";
var DashboardgraphqlWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardgraphqlWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let DashboardgraphqlWhereInput = DashboardgraphqlWhereInput_1 = class DashboardgraphqlWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardgraphqlWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DashboardgraphqlWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardgraphqlWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DashboardgraphqlWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardgraphqlWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DashboardgraphqlWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], DashboardgraphqlWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], DashboardgraphqlWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], DashboardgraphqlWhereInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], DashboardgraphqlWhereInput.prototype, "headerValue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], DashboardgraphqlWhereInput.prototype, "headerKey", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], DashboardgraphqlWhereInput.prototype, "urlValue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], DashboardgraphqlWhereInput.prototype, "urlKey", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], DashboardgraphqlWhereInput.prototype, "description", void 0);
DashboardgraphqlWhereInput = DashboardgraphqlWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("DashboardgraphqlWhereInput", {
        isAbstract: true
    })
], DashboardgraphqlWhereInput);
exports.DashboardgraphqlWhereInput = DashboardgraphqlWhereInput;
