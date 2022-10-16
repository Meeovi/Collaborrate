"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSettings = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SettingsAvgAggregate_1 = require("../outputs/SettingsAvgAggregate");
const SettingsCountAggregate_1 = require("../outputs/SettingsCountAggregate");
const SettingsMaxAggregate_1 = require("../outputs/SettingsMaxAggregate");
const SettingsMinAggregate_1 = require("../outputs/SettingsMinAggregate");
const SettingsSumAggregate_1 = require("../outputs/SettingsSumAggregate");
let AggregateSettings = class AggregateSettings {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsCountAggregate_1.SettingsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingsCountAggregate_1.SettingsCountAggregate)
], AggregateSettings.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsAvgAggregate_1.SettingsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingsAvgAggregate_1.SettingsAvgAggregate)
], AggregateSettings.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsSumAggregate_1.SettingsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingsSumAggregate_1.SettingsSumAggregate)
], AggregateSettings.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsMinAggregate_1.SettingsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingsMinAggregate_1.SettingsMinAggregate)
], AggregateSettings.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SettingsMaxAggregate_1.SettingsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SettingsMaxAggregate_1.SettingsMaxAggregate)
], AggregateSettings.prototype, "_max", void 0);
AggregateSettings = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateSettings", {
        isAbstract: true
    })
], AggregateSettings);
exports.AggregateSettings = AggregateSettings;
