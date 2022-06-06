"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateShop_settingsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Shop_settingsOrderByWithRelationInput_1 = require("../../../inputs/Shop_settingsOrderByWithRelationInput");
const Shop_settingsWhereInput_1 = require("../../../inputs/Shop_settingsWhereInput");
const Shop_settingsWhereUniqueInput_1 = require("../../../inputs/Shop_settingsWhereUniqueInput");
let AggregateShop_settingsArgs = class AggregateShop_settingsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Shop_settingsWhereInput_1.Shop_settingsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Shop_settingsWhereInput_1.Shop_settingsWhereInput)
], AggregateShop_settingsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Shop_settingsOrderByWithRelationInput_1.Shop_settingsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateShop_settingsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Shop_settingsWhereUniqueInput_1.Shop_settingsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Shop_settingsWhereUniqueInput_1.Shop_settingsWhereUniqueInput)
], AggregateShop_settingsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateShop_settingsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateShop_settingsArgs.prototype, "skip", void 0);
AggregateShop_settingsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateShop_settingsArgs);
exports.AggregateShop_settingsArgs = AggregateShop_settingsArgs;
