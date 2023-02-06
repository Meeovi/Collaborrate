"use strict";
var DashboardrestapiWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardrestapiWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let DashboardrestapiWhereInput = DashboardrestapiWhereInput_1 = class DashboardrestapiWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardrestapiWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DashboardrestapiWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardrestapiWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DashboardrestapiWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardrestapiWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DashboardrestapiWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], DashboardrestapiWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], DashboardrestapiWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], DashboardrestapiWhereInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], DashboardrestapiWhereInput.prototype, "headerValue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], DashboardrestapiWhereInput.prototype, "headerKey", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], DashboardrestapiWhereInput.prototype, "authenticationType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], DashboardrestapiWhereInput.prototype, "description", void 0);
DashboardrestapiWhereInput = DashboardrestapiWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("DashboardrestapiWhereInput", {
        isAbstract: true
    })
], DashboardrestapiWhereInput);
exports.DashboardrestapiWhereInput = DashboardrestapiWhereInput;
