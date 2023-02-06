"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueDashboardsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardsWhereUniqueInput_1 = require("../../../inputs/DashboardsWhereUniqueInput");
let FindUniqueDashboardsArgs = class FindUniqueDashboardsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardsWhereUniqueInput_1.DashboardsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DashboardsWhereUniqueInput_1.DashboardsWhereUniqueInput)
], FindUniqueDashboardsArgs.prototype, "where", void 0);
FindUniqueDashboardsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueDashboardsArgs);
exports.FindUniqueDashboardsArgs = FindUniqueDashboardsArgs;
