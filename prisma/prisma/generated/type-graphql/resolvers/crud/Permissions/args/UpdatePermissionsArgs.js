"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePermissionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PermissionsUpdateInput_1 = require("../../../inputs/PermissionsUpdateInput");
const PermissionsWhereUniqueInput_1 = require("../../../inputs/PermissionsWhereUniqueInput");
let UpdatePermissionsArgs = class UpdatePermissionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PermissionsUpdateInput_1.PermissionsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PermissionsUpdateInput_1.PermissionsUpdateInput)
], UpdatePermissionsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PermissionsWhereUniqueInput_1.PermissionsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PermissionsWhereUniqueInput_1.PermissionsWhereUniqueInput)
], UpdatePermissionsArgs.prototype, "where", void 0);
UpdatePermissionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdatePermissionsArgs);
exports.UpdatePermissionsArgs = UpdatePermissionsArgs;
