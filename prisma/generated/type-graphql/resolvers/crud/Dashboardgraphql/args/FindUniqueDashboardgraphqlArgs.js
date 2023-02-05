"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueDashboardgraphqlArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardgraphqlWhereUniqueInput_1 = require("../../../inputs/DashboardgraphqlWhereUniqueInput");
let FindUniqueDashboardgraphqlArgs = class FindUniqueDashboardgraphqlArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardgraphqlWhereUniqueInput_1.DashboardgraphqlWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DashboardgraphqlWhereUniqueInput_1.DashboardgraphqlWhereUniqueInput)
], FindUniqueDashboardgraphqlArgs.prototype, "where", void 0);
FindUniqueDashboardgraphqlArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueDashboardgraphqlArgs);
exports.FindUniqueDashboardgraphqlArgs = FindUniqueDashboardgraphqlArgs;
