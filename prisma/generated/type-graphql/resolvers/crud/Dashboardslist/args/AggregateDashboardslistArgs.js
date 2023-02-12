"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateDashboardslistArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardslistOrderByWithRelationInput_1 = require("../../../inputs/DashboardslistOrderByWithRelationInput");
const DashboardslistWhereInput_1 = require("../../../inputs/DashboardslistWhereInput");
const DashboardslistWhereUniqueInput_1 = require("../../../inputs/DashboardslistWhereUniqueInput");
let AggregateDashboardslistArgs = class AggregateDashboardslistArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslistWhereInput_1.DashboardslistWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardslistWhereInput_1.DashboardslistWhereInput)
], AggregateDashboardslistArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardslistOrderByWithRelationInput_1.DashboardslistOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateDashboardslistArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslistWhereUniqueInput_1.DashboardslistWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardslistWhereUniqueInput_1.DashboardslistWhereUniqueInput)
], AggregateDashboardslistArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateDashboardslistArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateDashboardslistArgs.prototype, "skip", void 0);
AggregateDashboardslistArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateDashboardslistArgs);
exports.AggregateDashboardslistArgs = AggregateDashboardslistArgs;
