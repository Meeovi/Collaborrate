"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregatePlugins = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PluginsAvgAggregate_1 = require("../outputs/PluginsAvgAggregate");
const PluginsCountAggregate_1 = require("../outputs/PluginsCountAggregate");
const PluginsMaxAggregate_1 = require("../outputs/PluginsMaxAggregate");
const PluginsMinAggregate_1 = require("../outputs/PluginsMinAggregate");
const PluginsSumAggregate_1 = require("../outputs/PluginsSumAggregate");
let AggregatePlugins = class AggregatePlugins {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PluginsCountAggregate_1.PluginsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PluginsCountAggregate_1.PluginsCountAggregate)
], AggregatePlugins.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PluginsAvgAggregate_1.PluginsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PluginsAvgAggregate_1.PluginsAvgAggregate)
], AggregatePlugins.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PluginsSumAggregate_1.PluginsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PluginsSumAggregate_1.PluginsSumAggregate)
], AggregatePlugins.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PluginsMinAggregate_1.PluginsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PluginsMinAggregate_1.PluginsMinAggregate)
], AggregatePlugins.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PluginsMaxAggregate_1.PluginsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PluginsMaxAggregate_1.PluginsMaxAggregate)
], AggregatePlugins.prototype, "_max", void 0);
AggregatePlugins = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregatePlugins", {
        isAbstract: true
    })
], AggregatePlugins);
exports.AggregatePlugins = AggregatePlugins;
