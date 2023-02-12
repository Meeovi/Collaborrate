"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyRolesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RolesOrderByWithRelationInput_1 = require("../../../inputs/RolesOrderByWithRelationInput");
const RolesWhereInput_1 = require("../../../inputs/RolesWhereInput");
const RolesWhereUniqueInput_1 = require("../../../inputs/RolesWhereUniqueInput");
const RolesScalarFieldEnum_1 = require("../../../../enums/RolesScalarFieldEnum");
let FindManyRolesArgs = class FindManyRolesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RolesWhereInput_1.RolesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RolesWhereInput_1.RolesWhereInput)
], FindManyRolesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RolesOrderByWithRelationInput_1.RolesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyRolesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RolesWhereUniqueInput_1.RolesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RolesWhereUniqueInput_1.RolesWhereUniqueInput)
], FindManyRolesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyRolesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyRolesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RolesScalarFieldEnum_1.RolesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyRolesArgs.prototype, "distinct", void 0);
FindManyRolesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyRolesArgs);
exports.FindManyRolesArgs = FindManyRolesArgs;
