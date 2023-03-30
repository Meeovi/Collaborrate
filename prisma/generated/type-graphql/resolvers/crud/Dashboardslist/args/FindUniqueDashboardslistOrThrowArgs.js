"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueDashboardslistOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardslistWhereUniqueInput_1 = require("../../../inputs/DashboardslistWhereUniqueInput");
let FindUniqueDashboardslistOrThrowArgs = class FindUniqueDashboardslistOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslistWhereUniqueInput_1.DashboardslistWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DashboardslistWhereUniqueInput_1.DashboardslistWhereUniqueInput)
], FindUniqueDashboardslistOrThrowArgs.prototype, "where", void 0);
FindUniqueDashboardslistOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueDashboardslistOrThrowArgs);
exports.FindUniqueDashboardslistOrThrowArgs = FindUniqueDashboardslistOrThrowArgs;
