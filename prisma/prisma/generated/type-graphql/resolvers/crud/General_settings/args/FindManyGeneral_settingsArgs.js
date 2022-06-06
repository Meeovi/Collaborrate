"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyGeneral_settingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const General_settingsOrderByWithRelationInput_1 = require("../../../inputs/General_settingsOrderByWithRelationInput");
const General_settingsWhereInput_1 = require("../../../inputs/General_settingsWhereInput");
const General_settingsWhereUniqueInput_1 = require("../../../inputs/General_settingsWhereUniqueInput");
const General_settingsScalarFieldEnum_1 = require("../../../../enums/General_settingsScalarFieldEnum");
let FindManyGeneral_settingsArgs = class FindManyGeneral_settingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => General_settingsWhereInput_1.General_settingsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", General_settingsWhereInput_1.General_settingsWhereInput)
], FindManyGeneral_settingsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [General_settingsOrderByWithRelationInput_1.General_settingsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyGeneral_settingsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => General_settingsWhereUniqueInput_1.General_settingsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", General_settingsWhereUniqueInput_1.General_settingsWhereUniqueInput)
], FindManyGeneral_settingsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyGeneral_settingsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyGeneral_settingsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [General_settingsScalarFieldEnum_1.General_settingsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyGeneral_settingsArgs.prototype, "distinct", void 0);
FindManyGeneral_settingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyGeneral_settingsArgs);
exports.FindManyGeneral_settingsArgs = FindManyGeneral_settingsArgs;
