"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstDashboardrestapiArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardrestapiOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/DashboardrestapiOrderByWithRelationAndSearchRelevanceInput");
const DashboardrestapiWhereInput_1 = require("../../../inputs/DashboardrestapiWhereInput");
const DashboardrestapiWhereUniqueInput_1 = require("../../../inputs/DashboardrestapiWhereUniqueInput");
const DashboardrestapiScalarFieldEnum_1 = require("../../../../enums/DashboardrestapiScalarFieldEnum");
let FindFirstDashboardrestapiArgs = class FindFirstDashboardrestapiArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardrestapiWhereInput_1.DashboardrestapiWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardrestapiWhereInput_1.DashboardrestapiWhereInput)
], FindFirstDashboardrestapiArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardrestapiOrderByWithRelationAndSearchRelevanceInput_1.DashboardrestapiOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstDashboardrestapiArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardrestapiWhereUniqueInput_1.DashboardrestapiWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardrestapiWhereUniqueInput_1.DashboardrestapiWhereUniqueInput)
], FindFirstDashboardrestapiArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstDashboardrestapiArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstDashboardrestapiArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardrestapiScalarFieldEnum_1.DashboardrestapiScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstDashboardrestapiArgs.prototype, "distinct", void 0);
FindFirstDashboardrestapiArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstDashboardrestapiArgs);
exports.FindFirstDashboardrestapiArgs = FindFirstDashboardrestapiArgs;
