"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyRolesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RolesCreateManyInput_1 = require("../../../inputs/RolesCreateManyInput");
let CreateManyRolesArgs = class CreateManyRolesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RolesCreateManyInput_1.RolesCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyRolesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyRolesArgs.prototype, "skipDuplicates", void 0);
CreateManyRolesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyRolesArgs);
exports.CreateManyRolesArgs = CreateManyRolesArgs;
