"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateGeneral_settings = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const General_settingsAvgAggregate_1 = require("../outputs/General_settingsAvgAggregate");
const General_settingsCountAggregate_1 = require("../outputs/General_settingsCountAggregate");
const General_settingsMaxAggregate_1 = require("../outputs/General_settingsMaxAggregate");
const General_settingsMinAggregate_1 = require("../outputs/General_settingsMinAggregate");
const General_settingsSumAggregate_1 = require("../outputs/General_settingsSumAggregate");
let AggregateGeneral_settings = class AggregateGeneral_settings {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => General_settingsCountAggregate_1.General_settingsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", General_settingsCountAggregate_1.General_settingsCountAggregate)
], AggregateGeneral_settings.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => General_settingsAvgAggregate_1.General_settingsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", General_settingsAvgAggregate_1.General_settingsAvgAggregate)
], AggregateGeneral_settings.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => General_settingsSumAggregate_1.General_settingsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", General_settingsSumAggregate_1.General_settingsSumAggregate)
], AggregateGeneral_settings.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => General_settingsMinAggregate_1.General_settingsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", General_settingsMinAggregate_1.General_settingsMinAggregate)
], AggregateGeneral_settings.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => General_settingsMaxAggregate_1.General_settingsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", General_settingsMaxAggregate_1.General_settingsMaxAggregate)
], AggregateGeneral_settings.prototype, "_max", void 0);
AggregateGeneral_settings = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateGeneral_settings", {
        isAbstract: true
    })
], AggregateGeneral_settings);
exports.AggregateGeneral_settings = AggregateGeneral_settings;
