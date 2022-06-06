"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstShop_settingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Shop_settingsOrderByWithRelationInput_1 = require("../../../inputs/Shop_settingsOrderByWithRelationInput");
const Shop_settingsWhereInput_1 = require("../../../inputs/Shop_settingsWhereInput");
const Shop_settingsWhereUniqueInput_1 = require("../../../inputs/Shop_settingsWhereUniqueInput");
const Shop_settingsScalarFieldEnum_1 = require("../../../../enums/Shop_settingsScalarFieldEnum");
let FindFirstShop_settingsArgs = class FindFirstShop_settingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Shop_settingsWhereInput_1.Shop_settingsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Shop_settingsWhereInput_1.Shop_settingsWhereInput)
], FindFirstShop_settingsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Shop_settingsOrderByWithRelationInput_1.Shop_settingsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstShop_settingsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Shop_settingsWhereUniqueInput_1.Shop_settingsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Shop_settingsWhereUniqueInput_1.Shop_settingsWhereUniqueInput)
], FindFirstShop_settingsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstShop_settingsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstShop_settingsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Shop_settingsScalarFieldEnum_1.Shop_settingsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstShop_settingsArgs.prototype, "distinct", void 0);
FindFirstShop_settingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstShop_settingsArgs);
exports.FindFirstShop_settingsArgs = FindFirstShop_settingsArgs;
