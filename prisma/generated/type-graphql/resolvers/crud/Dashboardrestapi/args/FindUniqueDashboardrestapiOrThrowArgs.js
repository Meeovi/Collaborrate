"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueDashboardrestapiOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardrestapiWhereUniqueInput_1 = require("../../../inputs/DashboardrestapiWhereUniqueInput");
let FindUniqueDashboardrestapiOrThrowArgs = class FindUniqueDashboardrestapiOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardrestapiWhereUniqueInput_1.DashboardrestapiWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DashboardrestapiWhereUniqueInput_1.DashboardrestapiWhereUniqueInput)
], FindUniqueDashboardrestapiOrThrowArgs.prototype, "where", void 0);
FindUniqueDashboardrestapiOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueDashboardrestapiOrThrowArgs);
exports.FindUniqueDashboardrestapiOrThrowArgs = FindUniqueDashboardrestapiOrThrowArgs;
