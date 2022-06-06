"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateShop_settings = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Shop_settingsAvgAggregate_1 = require("../outputs/Shop_settingsAvgAggregate");
const Shop_settingsCountAggregate_1 = require("../outputs/Shop_settingsCountAggregate");
const Shop_settingsMaxAggregate_1 = require("../outputs/Shop_settingsMaxAggregate");
const Shop_settingsMinAggregate_1 = require("../outputs/Shop_settingsMinAggregate");
const Shop_settingsSumAggregate_1 = require("../outputs/Shop_settingsSumAggregate");
let AggregateShop_settings = class AggregateShop_settings {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Shop_settingsCountAggregate_1.Shop_settingsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Shop_settingsCountAggregate_1.Shop_settingsCountAggregate)
], AggregateShop_settings.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Shop_settingsAvgAggregate_1.Shop_settingsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Shop_settingsAvgAggregate_1.Shop_settingsAvgAggregate)
], AggregateShop_settings.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Shop_settingsSumAggregate_1.Shop_settingsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Shop_settingsSumAggregate_1.Shop_settingsSumAggregate)
], AggregateShop_settings.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Shop_settingsMinAggregate_1.Shop_settingsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Shop_settingsMinAggregate_1.Shop_settingsMinAggregate)
], AggregateShop_settings.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Shop_settingsMaxAggregate_1.Shop_settingsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Shop_settingsMaxAggregate_1.Shop_settingsMaxAggregate)
], AggregateShop_settings.prototype, "_max", void 0);
AggregateShop_settings = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateShop_settings", {
        isAbstract: true
    })
], AggregateShop_settings);
exports.AggregateShop_settings = AggregateShop_settings;
