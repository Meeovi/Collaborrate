"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardgraphqlWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardgraphqlWhereInput_1 = require("../inputs/DashboardgraphqlWhereInput");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let DashboardgraphqlWhereUniqueInput = class DashboardgraphqlWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], DashboardgraphqlWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardgraphqlWhereInput_1.DashboardgraphqlWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DashboardgraphqlWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardgraphqlWhereInput_1.DashboardgraphqlWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DashboardgraphqlWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardgraphqlWhereInput_1.DashboardgraphqlWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DashboardgraphqlWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], DashboardgraphqlWhereUniqueInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], DashboardgraphqlWhereUniqueInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], DashboardgraphqlWhereUniqueInput.prototype, "headerValue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], DashboardgraphqlWhereUniqueInput.prototype, "headerKey", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], DashboardgraphqlWhereUniqueInput.prototype, "urlValue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], DashboardgraphqlWhereUniqueInput.prototype, "urlKey", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], DashboardgraphqlWhereUniqueInput.prototype, "description", void 0);
DashboardgraphqlWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DashboardgraphqlWhereUniqueInput", {
        isAbstract: true
    })
], DashboardgraphqlWhereUniqueInput);
exports.DashboardgraphqlWhereUniqueInput = DashboardgraphqlWhereUniqueInput;
