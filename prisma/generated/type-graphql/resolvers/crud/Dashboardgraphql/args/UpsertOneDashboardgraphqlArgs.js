"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneDashboardgraphqlArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardgraphqlCreateInput_1 = require("../../../inputs/DashboardgraphqlCreateInput");
const DashboardgraphqlUpdateInput_1 = require("../../../inputs/DashboardgraphqlUpdateInput");
const DashboardgraphqlWhereUniqueInput_1 = require("../../../inputs/DashboardgraphqlWhereUniqueInput");
let UpsertOneDashboardgraphqlArgs = class UpsertOneDashboardgraphqlArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardgraphqlWhereUniqueInput_1.DashboardgraphqlWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DashboardgraphqlWhereUniqueInput_1.DashboardgraphqlWhereUniqueInput)
], UpsertOneDashboardgraphqlArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardgraphqlCreateInput_1.DashboardgraphqlCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DashboardgraphqlCreateInput_1.DashboardgraphqlCreateInput)
], UpsertOneDashboardgraphqlArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardgraphqlUpdateInput_1.DashboardgraphqlUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DashboardgraphqlUpdateInput_1.DashboardgraphqlUpdateInput)
], UpsertOneDashboardgraphqlArgs.prototype, "update", void 0);
UpsertOneDashboardgraphqlArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneDashboardgraphqlArgs);
exports.UpsertOneDashboardgraphqlArgs = UpsertOneDashboardgraphqlArgs;
