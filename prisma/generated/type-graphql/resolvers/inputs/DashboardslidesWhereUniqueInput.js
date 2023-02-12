"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardslidesWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardslidesWhereInput_1 = require("../inputs/DashboardslidesWhereInput");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let DashboardslidesWhereUniqueInput = class DashboardslidesWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], DashboardslidesWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardslidesWhereInput_1.DashboardslidesWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DashboardslidesWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardslidesWhereInput_1.DashboardslidesWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DashboardslidesWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardslidesWhereInput_1.DashboardslidesWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DashboardslidesWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], DashboardslidesWhereUniqueInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], DashboardslidesWhereUniqueInput.prototype, "categories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], DashboardslidesWhereUniqueInput.prototype, "media", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], DashboardslidesWhereUniqueInput.prototype, "description", void 0);
DashboardslidesWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DashboardslidesWhereUniqueInput", {
        isAbstract: true
    })
], DashboardslidesWhereUniqueInput);
exports.DashboardslidesWhereUniqueInput = DashboardslidesWhereUniqueInput;
