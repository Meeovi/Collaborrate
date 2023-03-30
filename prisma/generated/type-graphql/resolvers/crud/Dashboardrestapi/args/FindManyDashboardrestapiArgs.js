"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyDashboardrestapiArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardrestapiOrderByWithRelationInput_1 = require("../../../inputs/DashboardrestapiOrderByWithRelationInput");
const DashboardrestapiWhereInput_1 = require("../../../inputs/DashboardrestapiWhereInput");
const DashboardrestapiWhereUniqueInput_1 = require("../../../inputs/DashboardrestapiWhereUniqueInput");
const DashboardrestapiScalarFieldEnum_1 = require("../../../../enums/DashboardrestapiScalarFieldEnum");
let FindManyDashboardrestapiArgs = class FindManyDashboardrestapiArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardrestapiWhereInput_1.DashboardrestapiWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardrestapiWhereInput_1.DashboardrestapiWhereInput)
], FindManyDashboardrestapiArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardrestapiOrderByWithRelationInput_1.DashboardrestapiOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyDashboardrestapiArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardrestapiWhereUniqueInput_1.DashboardrestapiWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardrestapiWhereUniqueInput_1.DashboardrestapiWhereUniqueInput)
], FindManyDashboardrestapiArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyDashboardrestapiArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyDashboardrestapiArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardrestapiScalarFieldEnum_1.DashboardrestapiScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyDashboardrestapiArgs.prototype, "distinct", void 0);
FindManyDashboardrestapiArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyDashboardrestapiArgs);
exports.FindManyDashboardrestapiArgs = FindManyDashboardrestapiArgs;
