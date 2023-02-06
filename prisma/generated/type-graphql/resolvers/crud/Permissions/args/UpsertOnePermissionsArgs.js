"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOnePermissionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PermissionsCreateInput_1 = require("../../../inputs/PermissionsCreateInput");
const PermissionsUpdateInput_1 = require("../../../inputs/PermissionsUpdateInput");
const PermissionsWhereUniqueInput_1 = require("../../../inputs/PermissionsWhereUniqueInput");
let UpsertOnePermissionsArgs = class UpsertOnePermissionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PermissionsWhereUniqueInput_1.PermissionsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PermissionsWhereUniqueInput_1.PermissionsWhereUniqueInput)
], UpsertOnePermissionsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PermissionsCreateInput_1.PermissionsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PermissionsCreateInput_1.PermissionsCreateInput)
], UpsertOnePermissionsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PermissionsUpdateInput_1.PermissionsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PermissionsUpdateInput_1.PermissionsUpdateInput)
], UpsertOnePermissionsArgs.prototype, "update", void 0);
UpsertOnePermissionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOnePermissionsArgs);
exports.UpsertOnePermissionsArgs = UpsertOnePermissionsArgs;
