"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyRoleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoleWhereInput_1 = require("../../../inputs/RoleWhereInput");
let DeleteManyRoleArgs = class DeleteManyRoleArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleWhereInput_1.RoleWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleWhereInput_1.RoleWhereInput)
], DeleteManyRoleArgs.prototype, "where", void 0);
DeleteManyRoleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyRoleArgs);
exports.DeleteManyRoleArgs = DeleteManyRoleArgs;
