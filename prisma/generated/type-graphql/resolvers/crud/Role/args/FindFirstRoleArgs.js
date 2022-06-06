"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstRoleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoleOrderByWithRelationInput_1 = require("../../../inputs/RoleOrderByWithRelationInput");
const RoleWhereInput_1 = require("../../../inputs/RoleWhereInput");
const RoleWhereUniqueInput_1 = require("../../../inputs/RoleWhereUniqueInput");
const RoleScalarFieldEnum_1 = require("../../../../enums/RoleScalarFieldEnum");
let FindFirstRoleArgs = class FindFirstRoleArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleWhereInput_1.RoleWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleWhereInput_1.RoleWhereInput)
], FindFirstRoleArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RoleOrderByWithRelationInput_1.RoleOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstRoleArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoleWhereUniqueInput_1.RoleWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoleWhereUniqueInput_1.RoleWhereUniqueInput)
], FindFirstRoleArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstRoleArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstRoleArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RoleScalarFieldEnum_1.RoleScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstRoleArgs.prototype, "distinct", void 0);
FindFirstRoleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstRoleArgs);
exports.FindFirstRoleArgs = FindFirstRoleArgs;
