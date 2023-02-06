"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyRolesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RolesUpdateManyMutationInput_1 = require("../../../inputs/RolesUpdateManyMutationInput");
const RolesWhereInput_1 = require("../../../inputs/RolesWhereInput");
let UpdateManyRolesArgs = class UpdateManyRolesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RolesUpdateManyMutationInput_1.RolesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RolesUpdateManyMutationInput_1.RolesUpdateManyMutationInput)
], UpdateManyRolesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RolesWhereInput_1.RolesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RolesWhereInput_1.RolesWhereInput)
], UpdateManyRolesArgs.prototype, "where", void 0);
UpdateManyRolesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyRolesArgs);
exports.UpdateManyRolesArgs = UpdateManyRolesArgs;
