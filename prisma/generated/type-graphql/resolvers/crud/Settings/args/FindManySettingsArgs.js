"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManySettingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingsOrderByWithRelationInput_1 = require("../../../inputs/SettingsOrderByWithRelationInput");
const SettingsWhereInput_1 = require("../../../inputs/SettingsWhereInput");
const SettingsWhereUniqueInput_1 = require("../../../inputs/SettingsWhereUniqueInput");
const SettingsScalarFieldEnum_1 = require("../../../../enums/SettingsScalarFieldEnum");
let FindManySettingsArgs = class FindManySettingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsWhereInput_1.SettingsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingsWhereInput_1.SettingsWhereInput)
], FindManySettingsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SettingsOrderByWithRelationInput_1.SettingsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManySettingsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsWhereUniqueInput_1.SettingsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingsWhereUniqueInput_1.SettingsWhereUniqueInput)
], FindManySettingsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManySettingsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManySettingsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SettingsScalarFieldEnum_1.SettingsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManySettingsArgs.prototype, "distinct", void 0);
FindManySettingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManySettingsArgs);
exports.FindManySettingsArgs = FindManySettingsArgs;
