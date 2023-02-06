"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyPermissionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PermissionsCreateManyInput_1 = require("../../../inputs/PermissionsCreateManyInput");
let CreateManyPermissionsArgs = class CreateManyPermissionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PermissionsCreateManyInput_1.PermissionsCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyPermissionsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyPermissionsArgs.prototype, "skipDuplicates", void 0);
CreateManyPermissionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyPermissionsArgs);
exports.CreateManyPermissionsArgs = CreateManyPermissionsArgs;
