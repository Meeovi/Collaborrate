"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueRolesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RolesWhereUniqueInput_1 = require("../../../inputs/RolesWhereUniqueInput");
let FindUniqueRolesArgs = class FindUniqueRolesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RolesWhereUniqueInput_1.RolesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RolesWhereUniqueInput_1.RolesWhereUniqueInput)
], FindUniqueRolesArgs.prototype, "where", void 0);
FindUniqueRolesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueRolesArgs);
exports.FindUniqueRolesArgs = FindUniqueRolesArgs;
