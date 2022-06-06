"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSales_settings = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Sales_settingsAvgAggregate_1 = require("../outputs/Sales_settingsAvgAggregate");
const Sales_settingsCountAggregate_1 = require("../outputs/Sales_settingsCountAggregate");
const Sales_settingsMaxAggregate_1 = require("../outputs/Sales_settingsMaxAggregate");
const Sales_settingsMinAggregate_1 = require("../outputs/Sales_settingsMinAggregate");
const Sales_settingsSumAggregate_1 = require("../outputs/Sales_settingsSumAggregate");
let AggregateSales_settings = class AggregateSales_settings {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Sales_settingsCountAggregate_1.Sales_settingsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Sales_settingsCountAggregate_1.Sales_settingsCountAggregate)
], AggregateSales_settings.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Sales_settingsAvgAggregate_1.Sales_settingsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Sales_settingsAvgAggregate_1.Sales_settingsAvgAggregate)
], AggregateSales_settings.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Sales_settingsSumAggregate_1.Sales_settingsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Sales_settingsSumAggregate_1.Sales_settingsSumAggregate)
], AggregateSales_settings.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Sales_settingsMinAggregate_1.Sales_settingsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Sales_settingsMinAggregate_1.Sales_settingsMinAggregate)
], AggregateSales_settings.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Sales_settingsMaxAggregate_1.Sales_settingsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Sales_settingsMaxAggregate_1.Sales_settingsMaxAggregate)
], AggregateSales_settings.prototype, "_max", void 0);
AggregateSales_settings = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateSales_settings", {
        isAbstract: true
    })
], AggregateSales_settings);
exports.AggregateSales_settings = AggregateSales_settings;
