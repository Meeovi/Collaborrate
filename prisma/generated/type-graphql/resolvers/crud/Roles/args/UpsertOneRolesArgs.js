"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneRolesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RolesCreateInput_1 = require("../../../inputs/RolesCreateInput");
const RolesUpdateInput_1 = require("../../../inputs/RolesUpdateInput");
const RolesWhereUniqueInput_1 = require("../../../inputs/RolesWhereUniqueInput");
let UpsertOneRolesArgs = class UpsertOneRolesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RolesWhereUniqueInput_1.RolesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RolesWhereUniqueInput_1.RolesWhereUniqueInput)
], UpsertOneRolesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RolesCreateInput_1.RolesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RolesCreateInput_1.RolesCreateInput)
], UpsertOneRolesArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RolesUpdateInput_1.RolesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RolesUpdateInput_1.RolesUpdateInput)
], UpsertOneRolesArgs.prototype, "update", void 0);
UpsertOneRolesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneRolesArgs);
exports.UpsertOneRolesArgs = UpsertOneRolesArgs;
