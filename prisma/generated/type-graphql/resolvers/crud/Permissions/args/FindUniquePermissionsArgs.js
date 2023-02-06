"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniquePermissionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PermissionsWhereUniqueInput_1 = require("../../../inputs/PermissionsWhereUniqueInput");
let FindUniquePermissionsArgs = class FindUniquePermissionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PermissionsWhereUniqueInput_1.PermissionsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PermissionsWhereUniqueInput_1.PermissionsWhereUniqueInput)
], FindUniquePermissionsArgs.prototype, "where", void 0);
FindUniquePermissionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniquePermissionsArgs);
exports.FindUniquePermissionsArgs = FindUniquePermissionsArgs;
