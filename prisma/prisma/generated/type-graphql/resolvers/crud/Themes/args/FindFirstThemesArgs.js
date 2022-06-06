"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstThemesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThemesOrderByWithRelationInput_1 = require("../../../inputs/ThemesOrderByWithRelationInput");
const ThemesWhereInput_1 = require("../../../inputs/ThemesWhereInput");
const ThemesWhereUniqueInput_1 = require("../../../inputs/ThemesWhereUniqueInput");
const ThemesScalarFieldEnum_1 = require("../../../../enums/ThemesScalarFieldEnum");
let FindFirstThemesArgs = class FindFirstThemesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThemesWhereInput_1.ThemesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThemesWhereInput_1.ThemesWhereInput)
], FindFirstThemesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThemesOrderByWithRelationInput_1.ThemesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstThemesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThemesWhereUniqueInput_1.ThemesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThemesWhereUniqueInput_1.ThemesWhereUniqueInput)
], FindFirstThemesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstThemesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstThemesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThemesScalarFieldEnum_1.ThemesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstThemesArgs.prototype, "distinct", void 0);
FindFirstThemesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstThemesArgs);
exports.FindFirstThemesArgs = FindFirstThemesArgs;
