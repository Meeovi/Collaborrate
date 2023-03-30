"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstDashboardslistArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardslistOrderByWithRelationInput_1 = require("../../../inputs/DashboardslistOrderByWithRelationInput");
const DashboardslistWhereInput_1 = require("../../../inputs/DashboardslistWhereInput");
const DashboardslistWhereUniqueInput_1 = require("../../../inputs/DashboardslistWhereUniqueInput");
const DashboardslistScalarFieldEnum_1 = require("../../../../enums/DashboardslistScalarFieldEnum");
let FindFirstDashboardslistArgs = class FindFirstDashboardslistArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslistWhereInput_1.DashboardslistWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardslistWhereInput_1.DashboardslistWhereInput)
], FindFirstDashboardslistArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardslistOrderByWithRelationInput_1.DashboardslistOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstDashboardslistArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslistWhereUniqueInput_1.DashboardslistWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardslistWhereUniqueInput_1.DashboardslistWhereUniqueInput)
], FindFirstDashboardslistArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstDashboardslistArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstDashboardslistArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardslistScalarFieldEnum_1.DashboardslistScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstDashboardslistArgs.prototype, "distinct", void 0);
FindFirstDashboardslistArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstDashboardslistArgs);
exports.FindFirstDashboardslistArgs = FindFirstDashboardslistArgs;
