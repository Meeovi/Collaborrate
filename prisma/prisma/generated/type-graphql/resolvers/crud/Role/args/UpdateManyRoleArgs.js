"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyRoleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoleUpdateManyMutationInput_1 = require("../../../inputs/RoleUpdateManyMutationInput");
const RoleWhereInput_1 = require("../../../inputs/RoleWhereInput");
let UpdateManyRoleArgs = class UpdateManyRoleArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleUpdateManyMutationInput_1.RoleUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RoleUpdateManyMutationInput_1.RoleUpdateManyMutationInput)
], UpdateManyRoleArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleWhereInput_1.RoleWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleWhereInput_1.RoleWhereInput)
], UpdateManyRoleArgs.prototype, "where", void 0);
UpdateManyRoleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyRoleArgs);
exports.UpdateManyRoleArgs = UpdateManyRoleArgs;
