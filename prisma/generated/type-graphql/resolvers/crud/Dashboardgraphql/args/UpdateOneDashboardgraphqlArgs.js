"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneDashboardgraphqlArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardgraphqlUpdateInput_1 = require("../../../inputs/DashboardgraphqlUpdateInput");
const DashboardgraphqlWhereUniqueInput_1 = require("../../../inputs/DashboardgraphqlWhereUniqueInput");
let UpdateOneDashboardgraphqlArgs = class UpdateOneDashboardgraphqlArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardgraphqlUpdateInput_1.DashboardgraphqlUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DashboardgraphqlUpdateInput_1.DashboardgraphqlUpdateInput)
], UpdateOneDashboardgraphqlArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardgraphqlWhereUniqueInput_1.DashboardgraphqlWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DashboardgraphqlWhereUniqueInput_1.DashboardgraphqlWhereUniqueInput)
], UpdateOneDashboardgraphqlArgs.prototype, "where", void 0);
UpdateOneDashboardgraphqlArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneDashboardgraphqlArgs);
exports.UpdateOneDashboardgraphqlArgs = UpdateOneDashboardgraphqlArgs;
