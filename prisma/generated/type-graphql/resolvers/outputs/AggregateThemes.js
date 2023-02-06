"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateThemes = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThemesAvgAggregate_1 = require("../outputs/ThemesAvgAggregate");
const ThemesCountAggregate_1 = require("../outputs/ThemesCountAggregate");
const ThemesMaxAggregate_1 = require("../outputs/ThemesMaxAggregate");
const ThemesMinAggregate_1 = require("../outputs/ThemesMinAggregate");
const ThemesSumAggregate_1 = require("../outputs/ThemesSumAggregate");
let AggregateThemes = class AggregateThemes {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThemesCountAggregate_1.ThemesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThemesCountAggregate_1.ThemesCountAggregate)
], AggregateThemes.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThemesAvgAggregate_1.ThemesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThemesAvgAggregate_1.ThemesAvgAggregate)
], AggregateThemes.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThemesSumAggregate_1.ThemesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThemesSumAggregate_1.ThemesSumAggregate)
], AggregateThemes.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThemesMinAggregate_1.ThemesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThemesMinAggregate_1.ThemesMinAggregate)
], AggregateThemes.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThemesMaxAggregate_1.ThemesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThemesMaxAggregate_1.ThemesMaxAggregate)
], AggregateThemes.prototype, "_max", void 0);
AggregateThemes = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateThemes", {
        isAbstract: true
    })
], AggregateThemes);
exports.AggregateThemes = AggregateThemes;
