"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteRoleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoleWhereUniqueInput_1 = require("../../../inputs/RoleWhereUniqueInput");
let DeleteRoleArgs = class DeleteRoleArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleWhereUniqueInput_1.RoleWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RoleWhereUniqueInput_1.RoleWhereUniqueInput)
], DeleteRoleArgs.prototype, "where", void 0);
DeleteRoleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteRoleArgs);
exports.DeleteRoleArgs = DeleteRoleArgs;
