"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManySpecial_discountsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Special_discountsOrderByWithRelationInput_1 = require("../../../inputs/Special_discountsOrderByWithRelationInput");
const Special_discountsWhereInput_1 = require("../../../inputs/Special_discountsWhereInput");
const Special_discountsWhereUniqueInput_1 = require("../../../inputs/Special_discountsWhereUniqueInput");
const Special_discountsScalarFieldEnum_1 = require("../../../../enums/Special_discountsScalarFieldEnum");
let FindManySpecial_discountsArgs = class FindManySpecial_discountsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Special_discountsWhereInput_1.Special_discountsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Special_discountsWhereInput_1.Special_discountsWhereInput)
], FindManySpecial_discountsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Special_discountsOrderByWithRelationInput_1.Special_discountsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManySpecial_discountsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Special_discountsWhereUniqueInput_1.Special_discountsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Special_discountsWhereUniqueInput_1.Special_discountsWhereUniqueInput)
], FindManySpecial_discountsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManySpecial_discountsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManySpecial_discountsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Special_discountsScalarFieldEnum_1.Special_discountsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManySpecial_discountsArgs.prototype, "distinct", void 0);
FindManySpecial_discountsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManySpecial_discountsArgs);
exports.FindManySpecial_discountsArgs = FindManySpecial_discountsArgs;
