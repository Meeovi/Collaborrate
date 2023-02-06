"use strict";
var DashboardjsonWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardjsonWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let DashboardjsonWhereInput = DashboardjsonWhereInput_1 = class DashboardjsonWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardjsonWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DashboardjsonWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardjsonWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DashboardjsonWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardjsonWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DashboardjsonWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], DashboardjsonWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], DashboardjsonWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], DashboardjsonWhereInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], DashboardjsonWhereInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], DashboardjsonWhereInput.prototype, "definition", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], DashboardjsonWhereInput.prototype, "format", void 0);
DashboardjsonWhereInput = DashboardjsonWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("DashboardjsonWhereInput", {
        isAbstract: true
    })
], DashboardjsonWhereInput);
exports.DashboardjsonWhereInput = DashboardjsonWhereInput;
