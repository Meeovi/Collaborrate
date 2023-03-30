"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyDashboardgraphqlArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardgraphqlOrderByWithRelationInput_1 = require("../../../inputs/DashboardgraphqlOrderByWithRelationInput");
const DashboardgraphqlWhereInput_1 = require("../../../inputs/DashboardgraphqlWhereInput");
const DashboardgraphqlWhereUniqueInput_1 = require("../../../inputs/DashboardgraphqlWhereUniqueInput");
const DashboardgraphqlScalarFieldEnum_1 = require("../../../../enums/DashboardgraphqlScalarFieldEnum");
let FindManyDashboardgraphqlArgs = class FindManyDashboardgraphqlArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardgraphqlWhereInput_1.DashboardgraphqlWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardgraphqlWhereInput_1.DashboardgraphqlWhereInput)
], FindManyDashboardgraphqlArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardgraphqlOrderByWithRelationInput_1.DashboardgraphqlOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyDashboardgraphqlArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardgraphqlWhereUniqueInput_1.DashboardgraphqlWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardgraphqlWhereUniqueInput_1.DashboardgraphqlWhereUniqueInput)
], FindManyDashboardgraphqlArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyDashboardgraphqlArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyDashboardgraphqlArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardgraphqlScalarFieldEnum_1.DashboardgraphqlScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyDashboardgraphqlArgs.prototype, "distinct", void 0);
FindManyDashboardgraphqlArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyDashboardgraphqlArgs);
exports.FindManyDashboardgraphqlArgs = FindManyDashboardgraphqlArgs;
