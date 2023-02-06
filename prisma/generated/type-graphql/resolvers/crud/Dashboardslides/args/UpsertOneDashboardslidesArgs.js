"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneDashboardslidesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardslidesCreateInput_1 = require("../../../inputs/DashboardslidesCreateInput");
const DashboardslidesUpdateInput_1 = require("../../../inputs/DashboardslidesUpdateInput");
const DashboardslidesWhereUniqueInput_1 = require("../../../inputs/DashboardslidesWhereUniqueInput");
let UpsertOneDashboardslidesArgs = class UpsertOneDashboardslidesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslidesWhereUniqueInput_1.DashboardslidesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DashboardslidesWhereUniqueInput_1.DashboardslidesWhereUniqueInput)
], UpsertOneDashboardslidesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslidesCreateInput_1.DashboardslidesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DashboardslidesCreateInput_1.DashboardslidesCreateInput)
], UpsertOneDashboardslidesArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslidesUpdateInput_1.DashboardslidesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DashboardslidesUpdateInput_1.DashboardslidesUpdateInput)
], UpsertOneDashboardslidesArgs.prototype, "update", void 0);
UpsertOneDashboardslidesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneDashboardslidesArgs);
exports.UpsertOneDashboardslidesArgs = UpsertOneDashboardslidesArgs;
