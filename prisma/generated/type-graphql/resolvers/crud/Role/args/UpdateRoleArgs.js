"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRoleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoleUpdateInput_1 = require("../../../inputs/RoleUpdateInput");
const RoleWhereUniqueInput_1 = require("../../../inputs/RoleWhereUniqueInput");
let UpdateRoleArgs = class UpdateRoleArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleUpdateInput_1.RoleUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RoleUpdateInput_1.RoleUpdateInput)
], UpdateRoleArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleWhereUniqueInput_1.RoleWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RoleWhereUniqueInput_1.RoleWhereUniqueInput)
], UpdateRoleArgs.prototype, "where", void 0);
UpdateRoleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateRoleArgs);
exports.UpdateRoleArgs = UpdateRoleArgs;
