"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstDashboardslistOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardslistOrderByWithRelationInput_1 = require("../../../inputs/DashboardslistOrderByWithRelationInput");
const DashboardslistWhereInput_1 = require("../../../inputs/DashboardslistWhereInput");
const DashboardslistWhereUniqueInput_1 = require("../../../inputs/DashboardslistWhereUniqueInput");
const DashboardslistScalarFieldEnum_1 = require("../../../../enums/DashboardslistScalarFieldEnum");
let FindFirstDashboardslistOrThrowArgs = class FindFirstDashboardslistOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslistWhereInput_1.DashboardslistWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardslistWhereInput_1.DashboardslistWhereInput)
], FindFirstDashboardslistOrThrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardslistOrderByWithRelationInput_1.DashboardslistOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstDashboardslistOrThrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslistWhereUniqueInput_1.DashboardslistWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardslistWhereUniqueInput_1.DashboardslistWhereUniqueInput)
], FindFirstDashboardslistOrThrowArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstDashboardslistOrThrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstDashboardslistOrThrowArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardslistScalarFieldEnum_1.DashboardslistScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstDashboardslistOrThrowArgs.prototype, "distinct", void 0);
FindFirstDashboardslistOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstDashboardslistOrThrowArgs);
exports.FindFirstDashboardslistOrThrowArgs = FindFirstDashboardslistOrThrowArgs;
