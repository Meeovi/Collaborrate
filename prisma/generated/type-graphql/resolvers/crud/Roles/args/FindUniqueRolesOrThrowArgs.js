"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueRolesOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RolesWhereUniqueInput_1 = require("../../../inputs/RolesWhereUniqueInput");
let FindUniqueRolesOrThrowArgs = class FindUniqueRolesOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RolesWhereUniqueInput_1.RolesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RolesWhereUniqueInput_1.RolesWhereUniqueInput)
], FindUniqueRolesOrThrowArgs.prototype, "where", void 0);
FindUniqueRolesOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueRolesOrThrowArgs);
exports.FindUniqueRolesOrThrowArgs = FindUniqueRolesOrThrowArgs;
