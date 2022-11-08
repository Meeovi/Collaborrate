"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOnePermissionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PermissionsWhereUniqueInput_1 = require("../../../inputs/PermissionsWhereUniqueInput");
let DeleteOnePermissionsArgs = class DeleteOnePermissionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PermissionsWhereUniqueInput_1.PermissionsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PermissionsWhereUniqueInput_1.PermissionsWhereUniqueInput)
], DeleteOnePermissionsArgs.prototype, "where", void 0);
DeleteOnePermissionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOnePermissionsArgs);
exports.DeleteOnePermissionsArgs = DeleteOnePermissionsArgs;
