"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueDashboardsOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardsWhereUniqueInput_1 = require("../../../inputs/DashboardsWhereUniqueInput");
let FindUniqueDashboardsOrThrowArgs = class FindUniqueDashboardsOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardsWhereUniqueInput_1.DashboardsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DashboardsWhereUniqueInput_1.DashboardsWhereUniqueInput)
], FindUniqueDashboardsOrThrowArgs.prototype, "where", void 0);
FindUniqueDashboardsOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueDashboardsOrThrowArgs);
exports.FindUniqueDashboardsOrThrowArgs = FindUniqueDashboardsOrThrowArgs;
