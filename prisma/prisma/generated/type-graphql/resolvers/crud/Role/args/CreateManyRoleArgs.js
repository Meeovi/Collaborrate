"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyRoleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoleCreateManyInput_1 = require("../../../inputs/RoleCreateManyInput");
let CreateManyRoleArgs = class CreateManyRoleArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RoleCreateManyInput_1.RoleCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyRoleArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyRoleArgs.prototype, "skipDuplicates", void 0);
CreateManyRoleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyRoleArgs);
exports.CreateManyRoleArgs = CreateManyRoleArgs;
