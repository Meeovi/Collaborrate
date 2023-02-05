"use strict";
var DashboardslidesWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardslidesWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let DashboardslidesWhereInput = DashboardslidesWhereInput_1 = class DashboardslidesWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardslidesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DashboardslidesWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardslidesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DashboardslidesWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardslidesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DashboardslidesWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], DashboardslidesWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], DashboardslidesWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], DashboardslidesWhereInput.prototype, "categories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], DashboardslidesWhereInput.prototype, "media", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], DashboardslidesWhereInput.prototype, "description", void 0);
DashboardslidesWhereInput = DashboardslidesWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("DashboardslidesWhereInput", {
        isAbstract: true
    })
], DashboardslidesWhereInput);
exports.DashboardslidesWhereInput = DashboardslidesWhereInput;
