"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardjsonWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardjsonWhereInput_1 = require("../inputs/DashboardjsonWhereInput");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let DashboardjsonWhereUniqueInput = class DashboardjsonWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], DashboardjsonWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardjsonWhereInput_1.DashboardjsonWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DashboardjsonWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardjsonWhereInput_1.DashboardjsonWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DashboardjsonWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardjsonWhereInput_1.DashboardjsonWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DashboardjsonWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], DashboardjsonWhereUniqueInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], DashboardjsonWhereUniqueInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], DashboardjsonWhereUniqueInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], DashboardjsonWhereUniqueInput.prototype, "definition", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], DashboardjsonWhereUniqueInput.prototype, "format", void 0);
DashboardjsonWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DashboardjsonWhereUniqueInput", {
        isAbstract: true
    })
], DashboardjsonWhereUniqueInput);
exports.DashboardjsonWhereUniqueInput = DashboardjsonWhereUniqueInput;
