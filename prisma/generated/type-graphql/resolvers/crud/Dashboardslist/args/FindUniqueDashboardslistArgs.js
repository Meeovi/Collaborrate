"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueDashboardslistArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardslistWhereUniqueInput_1 = require("../../../inputs/DashboardslistWhereUniqueInput");
let FindUniqueDashboardslistArgs = class FindUniqueDashboardslistArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslistWhereUniqueInput_1.DashboardslistWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DashboardslistWhereUniqueInput_1.DashboardslistWhereUniqueInput)
], FindUniqueDashboardslistArgs.prototype, "where", void 0);
FindUniqueDashboardslistArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueDashboardslistArgs);
exports.FindUniqueDashboardslistArgs = FindUniqueDashboardslistArgs;
