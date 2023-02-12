"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstPermissionsOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PermissionsOrderByWithRelationInput_1 = require("../../../inputs/PermissionsOrderByWithRelationInput");
const PermissionsWhereInput_1 = require("../../../inputs/PermissionsWhereInput");
const PermissionsWhereUniqueInput_1 = require("../../../inputs/PermissionsWhereUniqueInput");
const PermissionsScalarFieldEnum_1 = require("../../../../enums/PermissionsScalarFieldEnum");
let FindFirstPermissionsOrThrowArgs = class FindFirstPermissionsOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PermissionsWhereInput_1.PermissionsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PermissionsWhereInput_1.PermissionsWhereInput)
], FindFirstPermissionsOrThrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PermissionsOrderByWithRelationInput_1.PermissionsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstPermissionsOrThrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PermissionsWhereUniqueInput_1.PermissionsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PermissionsWhereUniqueInput_1.PermissionsWhereUniqueInput)
], FindFirstPermissionsOrThrowArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstPermissionsOrThrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstPermissionsOrThrowArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PermissionsScalarFieldEnum_1.PermissionsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstPermissionsOrThrowArgs.prototype, "distinct", void 0);
FindFirstPermissionsOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstPermissionsOrThrowArgs);
exports.FindFirstPermissionsOrThrowArgs = FindFirstPermissionsOrThrowArgs;
