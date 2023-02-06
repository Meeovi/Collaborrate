"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneDashboardrestapiArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardrestapiCreateInput_1 = require("../../../inputs/DashboardrestapiCreateInput");
const DashboardrestapiUpdateInput_1 = require("../../../inputs/DashboardrestapiUpdateInput");
const DashboardrestapiWhereUniqueInput_1 = require("../../../inputs/DashboardrestapiWhereUniqueInput");
let UpsertOneDashboardrestapiArgs = class UpsertOneDashboardrestapiArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardrestapiWhereUniqueInput_1.DashboardrestapiWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DashboardrestapiWhereUniqueInput_1.DashboardrestapiWhereUniqueInput)
], UpsertOneDashboardrestapiArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardrestapiCreateInput_1.DashboardrestapiCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DashboardrestapiCreateInput_1.DashboardrestapiCreateInput)
], UpsertOneDashboardrestapiArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardrestapiUpdateInput_1.DashboardrestapiUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DashboardrestapiUpdateInput_1.DashboardrestapiUpdateInput)
], UpsertOneDashboardrestapiArgs.prototype, "update", void 0);
UpsertOneDashboardrestapiArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneDashboardrestapiArgs);
exports.UpsertOneDashboardrestapiArgs = UpsertOneDashboardrestapiArgs;
