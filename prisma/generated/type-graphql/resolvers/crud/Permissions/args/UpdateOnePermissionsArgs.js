"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOnePermissionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PermissionsUpdateInput_1 = require("../../../inputs/PermissionsUpdateInput");
const PermissionsWhereUniqueInput_1 = require("../../../inputs/PermissionsWhereUniqueInput");
let UpdateOnePermissionsArgs = class UpdateOnePermissionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PermissionsUpdateInput_1.PermissionsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PermissionsUpdateInput_1.PermissionsUpdateInput)
], UpdateOnePermissionsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PermissionsWhereUniqueInput_1.PermissionsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PermissionsWhereUniqueInput_1.PermissionsWhereUniqueInput)
], UpdateOnePermissionsArgs.prototype, "where", void 0);
UpdateOnePermissionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOnePermissionsArgs);
exports.UpdateOnePermissionsArgs = UpdateOnePermissionsArgs;
