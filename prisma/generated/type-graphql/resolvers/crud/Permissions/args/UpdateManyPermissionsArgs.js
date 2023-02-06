"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyPermissionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PermissionsUpdateManyMutationInput_1 = require("../../../inputs/PermissionsUpdateManyMutationInput");
const PermissionsWhereInput_1 = require("../../../inputs/PermissionsWhereInput");
let UpdateManyPermissionsArgs = class UpdateManyPermissionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PermissionsUpdateManyMutationInput_1.PermissionsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PermissionsUpdateManyMutationInput_1.PermissionsUpdateManyMutationInput)
], UpdateManyPermissionsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PermissionsWhereInput_1.PermissionsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PermissionsWhereInput_1.PermissionsWhereInput)
], UpdateManyPermissionsArgs.prototype, "where", void 0);
UpdateManyPermissionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyPermissionsArgs);
exports.UpdateManyPermissionsArgs = UpdateManyPermissionsArgs;
