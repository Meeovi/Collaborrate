"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstDashboardgraphqlOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardgraphqlOrderByWithRelationInput_1 = require("../../../inputs/DashboardgraphqlOrderByWithRelationInput");
const DashboardgraphqlWhereInput_1 = require("../../../inputs/DashboardgraphqlWhereInput");
const DashboardgraphqlWhereUniqueInput_1 = require("../../../inputs/DashboardgraphqlWhereUniqueInput");
const DashboardgraphqlScalarFieldEnum_1 = require("../../../../enums/DashboardgraphqlScalarFieldEnum");
let FindFirstDashboardgraphqlOrThrowArgs = class FindFirstDashboardgraphqlOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardgraphqlWhereInput_1.DashboardgraphqlWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardgraphqlWhereInput_1.DashboardgraphqlWhereInput)
], FindFirstDashboardgraphqlOrThrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardgraphqlOrderByWithRelationInput_1.DashboardgraphqlOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstDashboardgraphqlOrThrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardgraphqlWhereUniqueInput_1.DashboardgraphqlWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardgraphqlWhereUniqueInput_1.DashboardgraphqlWhereUniqueInput)
], FindFirstDashboardgraphqlOrThrowArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstDashboardgraphqlOrThrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstDashboardgraphqlOrThrowArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardgraphqlScalarFieldEnum_1.DashboardgraphqlScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstDashboardgraphqlOrThrowArgs.prototype, "distinct", void 0);
FindFirstDashboardgraphqlOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstDashboardgraphqlOrThrowArgs);
exports.FindFirstDashboardgraphqlOrThrowArgs = FindFirstDashboardgraphqlOrThrowArgs;
