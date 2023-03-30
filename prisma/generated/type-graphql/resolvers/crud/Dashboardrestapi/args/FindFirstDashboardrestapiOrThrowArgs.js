"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstDashboardrestapiOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardrestapiOrderByWithRelationInput_1 = require("../../../inputs/DashboardrestapiOrderByWithRelationInput");
const DashboardrestapiWhereInput_1 = require("../../../inputs/DashboardrestapiWhereInput");
const DashboardrestapiWhereUniqueInput_1 = require("../../../inputs/DashboardrestapiWhereUniqueInput");
const DashboardrestapiScalarFieldEnum_1 = require("../../../../enums/DashboardrestapiScalarFieldEnum");
let FindFirstDashboardrestapiOrThrowArgs = class FindFirstDashboardrestapiOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardrestapiWhereInput_1.DashboardrestapiWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardrestapiWhereInput_1.DashboardrestapiWhereInput)
], FindFirstDashboardrestapiOrThrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardrestapiOrderByWithRelationInput_1.DashboardrestapiOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstDashboardrestapiOrThrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardrestapiWhereUniqueInput_1.DashboardrestapiWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardrestapiWhereUniqueInput_1.DashboardrestapiWhereUniqueInput)
], FindFirstDashboardrestapiOrThrowArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstDashboardrestapiOrThrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstDashboardrestapiOrThrowArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardrestapiScalarFieldEnum_1.DashboardrestapiScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstDashboardrestapiOrThrowArgs.prototype, "distinct", void 0);
FindFirstDashboardrestapiOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstDashboardrestapiOrThrowArgs);
exports.FindFirstDashboardrestapiOrThrowArgs = FindFirstDashboardrestapiOrThrowArgs;
