"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneRolesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RolesUpdateInput_1 = require("../../../inputs/RolesUpdateInput");
const RolesWhereUniqueInput_1 = require("../../../inputs/RolesWhereUniqueInput");
let UpdateOneRolesArgs = class UpdateOneRolesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RolesUpdateInput_1.RolesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RolesUpdateInput_1.RolesUpdateInput)
], UpdateOneRolesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RolesWhereUniqueInput_1.RolesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RolesWhereUniqueInput_1.RolesWhereUniqueInput)
], UpdateOneRolesArgs.prototype, "where", void 0);
UpdateOneRolesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneRolesArgs);
exports.UpdateOneRolesArgs = UpdateOneRolesArgs;
