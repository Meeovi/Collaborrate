"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneRolesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RolesWhereUniqueInput_1 = require("../../../inputs/RolesWhereUniqueInput");
let DeleteOneRolesArgs = class DeleteOneRolesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RolesWhereUniqueInput_1.RolesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RolesWhereUniqueInput_1.RolesWhereUniqueInput)
], DeleteOneRolesArgs.prototype, "where", void 0);
DeleteOneRolesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneRolesArgs);
exports.DeleteOneRolesArgs = DeleteOneRolesArgs;
