"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueDashboardrestapiArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardrestapiWhereUniqueInput_1 = require("../../../inputs/DashboardrestapiWhereUniqueInput");
let FindUniqueDashboardrestapiArgs = class FindUniqueDashboardrestapiArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardrestapiWhereUniqueInput_1.DashboardrestapiWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DashboardrestapiWhereUniqueInput_1.DashboardrestapiWhereUniqueInput)
], FindUniqueDashboardrestapiArgs.prototype, "where", void 0);
FindUniqueDashboardrestapiArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueDashboardrestapiArgs);
exports.FindUniqueDashboardrestapiArgs = FindUniqueDashboardrestapiArgs;
