"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertRoleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoleCreateInput_1 = require("../../../inputs/RoleCreateInput");
const RoleUpdateInput_1 = require("../../../inputs/RoleUpdateInput");
const RoleWhereUniqueInput_1 = require("../../../inputs/RoleWhereUniqueInput");
let UpsertRoleArgs = class UpsertRoleArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleWhereUniqueInput_1.RoleWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RoleWhereUniqueInput_1.RoleWhereUniqueInput)
], UpsertRoleArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleCreateInput_1.RoleCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RoleCreateInput_1.RoleCreateInput)
], UpsertRoleArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleUpdateInput_1.RoleUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RoleUpdateInput_1.RoleUpdateInput)
], UpsertRoleArgs.prototype, "update", void 0);
UpsertRoleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertRoleArgs);
exports.UpsertRoleArgs = UpsertRoleArgs;
