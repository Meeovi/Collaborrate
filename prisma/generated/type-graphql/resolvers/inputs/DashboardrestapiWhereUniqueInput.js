"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardrestapiWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardrestapiWhereInput_1 = require("../inputs/DashboardrestapiWhereInput");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let DashboardrestapiWhereUniqueInput = class DashboardrestapiWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], DashboardrestapiWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardrestapiWhereInput_1.DashboardrestapiWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DashboardrestapiWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardrestapiWhereInput_1.DashboardrestapiWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DashboardrestapiWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardrestapiWhereInput_1.DashboardrestapiWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DashboardrestapiWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], DashboardrestapiWhereUniqueInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], DashboardrestapiWhereUniqueInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], DashboardrestapiWhereUniqueInput.prototype, "headerValue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], DashboardrestapiWhereUniqueInput.prototype, "headerKey", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], DashboardrestapiWhereUniqueInput.prototype, "authenticationType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], DashboardrestapiWhereUniqueInput.prototype, "description", void 0);
DashboardrestapiWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DashboardrestapiWhereUniqueInput", {
        isAbstract: true
    })
], DashboardrestapiWhereUniqueInput);
exports.DashboardrestapiWhereUniqueInput = DashboardrestapiWhereUniqueInput;
