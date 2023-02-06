"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PluginsGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const PluginsAvgAggregate_1 = require("../outputs/PluginsAvgAggregate");
const PluginsCountAggregate_1 = require("../outputs/PluginsCountAggregate");
const PluginsMaxAggregate_1 = require("../outputs/PluginsMaxAggregate");
const PluginsMinAggregate_1 = require("../outputs/PluginsMinAggregate");
const PluginsSumAggregate_1 = require("../outputs/PluginsSumAggregate");
let PluginsGroupBy = class PluginsGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], PluginsGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PluginsGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PluginsGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PluginsGroupBy.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PluginsGroupBy.prototype, "github_link", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PluginsGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PluginsGroupBy.prototype, "logo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PluginsGroupBy.prototype, "screenshots", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PluginsGroupBy.prototype, "last_updated", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PluginsGroupBy.prototype, "publisher_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], PluginsGroupBy.prototype, "agree_terms", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PluginsGroupBy.prototype, "publisher_email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PluginsCountAggregate_1.PluginsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PluginsCountAggregate_1.PluginsCountAggregate)
], PluginsGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PluginsAvgAggregate_1.PluginsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PluginsAvgAggregate_1.PluginsAvgAggregate)
], PluginsGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PluginsSumAggregate_1.PluginsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PluginsSumAggregate_1.PluginsSumAggregate)
], PluginsGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PluginsMinAggregate_1.PluginsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PluginsMinAggregate_1.PluginsMinAggregate)
], PluginsGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PluginsMaxAggregate_1.PluginsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PluginsMaxAggregate_1.PluginsMaxAggregate)
], PluginsGroupBy.prototype, "_max", void 0);
PluginsGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("PluginsGroupBy", {
        isAbstract: true
    })
], PluginsGroupBy);
exports.PluginsGroupBy = PluginsGroupBy;
