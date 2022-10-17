"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyRolesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RolesWhereInput_1 = require("../../../inputs/RolesWhereInput");
let DeleteManyRolesArgs = class DeleteManyRolesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RolesWhereInput_1.RolesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RolesWhereInput_1.RolesWhereInput)
], DeleteManyRolesArgs.prototype, "where", void 0);
DeleteManyRolesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyRolesArgs);
exports.DeleteManyRolesArgs = DeleteManyRolesArgs;
