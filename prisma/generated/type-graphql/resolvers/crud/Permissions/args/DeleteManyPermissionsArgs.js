"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyPermissionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PermissionsWhereInput_1 = require("../../../inputs/PermissionsWhereInput");
let DeleteManyPermissionsArgs = class DeleteManyPermissionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PermissionsWhereInput_1.PermissionsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PermissionsWhereInput_1.PermissionsWhereInput)
], DeleteManyPermissionsArgs.prototype, "where", void 0);
DeleteManyPermissionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyPermissionsArgs);
exports.DeleteManyPermissionsArgs = DeleteManyPermissionsArgs;
