"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateDashboardjsonArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardjsonOrderByWithRelationInput_1 = require("../../../inputs/DashboardjsonOrderByWithRelationInput");
const DashboardjsonWhereInput_1 = require("../../../inputs/DashboardjsonWhereInput");
const DashboardjsonWhereUniqueInput_1 = require("../../../inputs/DashboardjsonWhereUniqueInput");
let AggregateDashboardjsonArgs = class AggregateDashboardjsonArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardjsonWhereInput_1.DashboardjsonWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardjsonWhereInput_1.DashboardjsonWhereInput)
], AggregateDashboardjsonArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardjsonOrderByWithRelationInput_1.DashboardjsonOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateDashboardjsonArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardjsonWhereUniqueInput_1.DashboardjsonWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardjsonWhereUniqueInput_1.DashboardjsonWhereUniqueInput)
], AggregateDashboardjsonArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateDashboardjsonArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateDashboardjsonArgs.prototype, "skip", void 0);
AggregateDashboardjsonArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateDashboardjsonArgs);
exports.AggregateDashboardjsonArgs = AggregateDashboardjsonArgs;
