"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneDashboardrestapiArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardrestapiUpdateInput_1 = require("../../../inputs/DashboardrestapiUpdateInput");
const DashboardrestapiWhereUniqueInput_1 = require("../../../inputs/DashboardrestapiWhereUniqueInput");
let UpdateOneDashboardrestapiArgs = class UpdateOneDashboardrestapiArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardrestapiUpdateInput_1.DashboardrestapiUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DashboardrestapiUpdateInput_1.DashboardrestapiUpdateInput)
], UpdateOneDashboardrestapiArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardrestapiWhereUniqueInput_1.DashboardrestapiWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DashboardrestapiWhereUniqueInput_1.DashboardrestapiWhereUniqueInput)
], UpdateOneDashboardrestapiArgs.prototype, "where", void 0);
UpdateOneDashboardrestapiArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneDashboardrestapiArgs);
exports.UpdateOneDashboardrestapiArgs = UpdateOneDashboardrestapiArgs;
