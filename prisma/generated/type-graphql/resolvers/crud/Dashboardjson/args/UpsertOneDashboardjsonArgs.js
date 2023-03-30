"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneDashboardjsonArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardjsonCreateInput_1 = require("../../../inputs/DashboardjsonCreateInput");
const DashboardjsonUpdateInput_1 = require("../../../inputs/DashboardjsonUpdateInput");
const DashboardjsonWhereUniqueInput_1 = require("../../../inputs/DashboardjsonWhereUniqueInput");
let UpsertOneDashboardjsonArgs = class UpsertOneDashboardjsonArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardjsonWhereUniqueInput_1.DashboardjsonWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DashboardjsonWhereUniqueInput_1.DashboardjsonWhereUniqueInput)
], UpsertOneDashboardjsonArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardjsonCreateInput_1.DashboardjsonCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DashboardjsonCreateInput_1.DashboardjsonCreateInput)
], UpsertOneDashboardjsonArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardjsonUpdateInput_1.DashboardjsonUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DashboardjsonUpdateInput_1.DashboardjsonUpdateInput)
], UpsertOneDashboardjsonArgs.prototype, "update", void 0);
UpsertOneDashboardjsonArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneDashboardjsonArgs);
exports.UpsertOneDashboardjsonArgs = UpsertOneDashboardjsonArgs;
