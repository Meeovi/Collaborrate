"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueDashboardjsonOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardjsonWhereUniqueInput_1 = require("../../../inputs/DashboardjsonWhereUniqueInput");
let FindUniqueDashboardjsonOrThrowArgs = class FindUniqueDashboardjsonOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardjsonWhereUniqueInput_1.DashboardjsonWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DashboardjsonWhereUniqueInput_1.DashboardjsonWhereUniqueInput)
], FindUniqueDashboardjsonOrThrowArgs.prototype, "where", void 0);
FindUniqueDashboardjsonOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueDashboardjsonOrThrowArgs);
exports.FindUniqueDashboardjsonOrThrowArgs = FindUniqueDashboardjsonOrThrowArgs;
