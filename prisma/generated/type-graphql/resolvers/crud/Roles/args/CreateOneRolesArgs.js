"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneRolesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RolesCreateInput_1 = require("../../../inputs/RolesCreateInput");
let CreateOneRolesArgs = class CreateOneRolesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RolesCreateInput_1.RolesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RolesCreateInput_1.RolesCreateInput)
], CreateOneRolesArgs.prototype, "data", void 0);
CreateOneRolesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneRolesArgs);
exports.CreateOneRolesArgs = CreateOneRolesArgs;
