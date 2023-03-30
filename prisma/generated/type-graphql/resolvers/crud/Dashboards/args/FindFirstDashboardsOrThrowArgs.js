"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstDashboardsOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardsOrderByWithRelationInput_1 = require("../../../inputs/DashboardsOrderByWithRelationInput");
const DashboardsWhereInput_1 = require("../../../inputs/DashboardsWhereInput");
const DashboardsWhereUniqueInput_1 = require("../../../inputs/DashboardsWhereUniqueInput");
const DashboardsScalarFieldEnum_1 = require("../../../../enums/DashboardsScalarFieldEnum");
let FindFirstDashboardsOrThrowArgs = class FindFirstDashboardsOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardsWhereInput_1.DashboardsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardsWhereInput_1.DashboardsWhereInput)
], FindFirstDashboardsOrThrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardsOrderByWithRelationInput_1.DashboardsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstDashboardsOrThrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardsWhereUniqueInput_1.DashboardsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardsWhereUniqueInput_1.DashboardsWhereUniqueInput)
], FindFirstDashboardsOrThrowArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstDashboardsOrThrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstDashboardsOrThrowArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardsScalarFieldEnum_1.DashboardsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstDashboardsOrThrowArgs.prototype, "distinct", void 0);
FindFirstDashboardsOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstDashboardsOrThrowArgs);
exports.FindFirstDashboardsOrThrowArgs = FindFirstDashboardsOrThrowArgs;
