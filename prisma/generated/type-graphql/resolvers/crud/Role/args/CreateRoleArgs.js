"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRoleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoleCreateInput_1 = require("../../../inputs/RoleCreateInput");
let CreateRoleArgs = class CreateRoleArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleCreateInput_1.RoleCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RoleCreateInput_1.RoleCreateInput)
], CreateRoleArgs.prototype, "data", void 0);
CreateRoleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateRoleArgs);
exports.CreateRoleArgs = CreateRoleArgs;
