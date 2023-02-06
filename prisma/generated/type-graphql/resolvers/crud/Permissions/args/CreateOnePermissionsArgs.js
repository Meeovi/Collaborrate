"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOnePermissionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PermissionsCreateInput_1 = require("../../../inputs/PermissionsCreateInput");
let CreateOnePermissionsArgs = class CreateOnePermissionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PermissionsCreateInput_1.PermissionsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PermissionsCreateInput_1.PermissionsCreateInput)
], CreateOnePermissionsArgs.prototype, "data", void 0);
CreateOnePermissionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOnePermissionsArgs);
exports.CreateOnePermissionsArgs = CreateOnePermissionsArgs;
