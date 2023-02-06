"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneDashboardsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardsCreateInput_1 = require("../../../inputs/DashboardsCreateInput");
const DashboardsUpdateInput_1 = require("../../../inputs/DashboardsUpdateInput");
const DashboardsWhereUniqueInput_1 = require("../../../inputs/DashboardsWhereUniqueInput");
let UpsertOneDashboardsArgs = class UpsertOneDashboardsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardsWhereUniqueInput_1.DashboardsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DashboardsWhereUniqueInput_1.DashboardsWhereUniqueInput)
], UpsertOneDashboardsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardsCreateInput_1.DashboardsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DashboardsCreateInput_1.DashboardsCreateInput)
], UpsertOneDashboardsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardsUpdateInput_1.DashboardsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DashboardsUpdateInput_1.DashboardsUpdateInput)
], UpsertOneDashboardsArgs.prototype, "update", void 0);
UpsertOneDashboardsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneDashboardsArgs);
exports.UpsertOneDashboardsArgs = UpsertOneDashboardsArgs;
