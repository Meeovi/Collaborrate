"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePermissionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PermissionsWhereUniqueInput_1 = require("../../../inputs/PermissionsWhereUniqueInput");
let DeletePermissionsArgs = class DeletePermissionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PermissionsWhereUniqueInput_1.PermissionsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PermissionsWhereUniqueInput_1.PermissionsWhereUniqueInput)
], DeletePermissionsArgs.prototype, "where", void 0);
DeletePermissionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeletePermissionsArgs);
exports.DeletePermissionsArgs = DeletePermissionsArgs;
