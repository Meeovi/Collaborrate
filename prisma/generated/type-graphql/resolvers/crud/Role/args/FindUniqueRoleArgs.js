"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueRoleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoleWhereUniqueInput_1 = require("../../../inputs/RoleWhereUniqueInput");
let FindUniqueRoleArgs = class FindUniqueRoleArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleWhereUniqueInput_1.RoleWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RoleWhereUniqueInput_1.RoleWhereUniqueInput)
], FindUniqueRoleArgs.prototype, "where", void 0);
FindUniqueRoleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueRoleArgs);
exports.FindUniqueRoleArgs = FindUniqueRoleArgs;
