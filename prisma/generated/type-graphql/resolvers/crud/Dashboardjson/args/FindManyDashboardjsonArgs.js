"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyDashboardjsonArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardjsonOrderByWithRelationInput_1 = require("../../../inputs/DashboardjsonOrderByWithRelationInput");
const DashboardjsonWhereInput_1 = require("../../../inputs/DashboardjsonWhereInput");
const DashboardjsonWhereUniqueInput_1 = require("../../../inputs/DashboardjsonWhereUniqueInput");
const DashboardjsonScalarFieldEnum_1 = require("../../../../enums/DashboardjsonScalarFieldEnum");
let FindManyDashboardjsonArgs = class FindManyDashboardjsonArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardjsonWhereInput_1.DashboardjsonWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardjsonWhereInput_1.DashboardjsonWhereInput)
], FindManyDashboardjsonArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardjsonOrderByWithRelationInput_1.DashboardjsonOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyDashboardjsonArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardjsonWhereUniqueInput_1.DashboardjsonWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardjsonWhereUniqueInput_1.DashboardjsonWhereUniqueInput)
], FindManyDashboardjsonArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyDashboardjsonArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyDashboardjsonArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardjsonScalarFieldEnum_1.DashboardjsonScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyDashboardjsonArgs.prototype, "distinct", void 0);
FindManyDashboardjsonArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyDashboardjsonArgs);
exports.FindManyDashboardjsonArgs = FindManyDashboardjsonArgs;
