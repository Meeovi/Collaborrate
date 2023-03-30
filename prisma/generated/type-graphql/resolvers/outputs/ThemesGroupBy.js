"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemesGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const ThemesAvgAggregate_1 = require("../outputs/ThemesAvgAggregate");
const ThemesCountAggregate_1 = require("../outputs/ThemesCountAggregate");
const ThemesMaxAggregate_1 = require("../outputs/ThemesMaxAggregate");
const ThemesMinAggregate_1 = require("../outputs/ThemesMinAggregate");
const ThemesSumAggregate_1 = require("../outputs/ThemesSumAggregate");
let ThemesGroupBy = class ThemesGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ThemesGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThemesGroupBy.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThemesGroupBy.prototype, "parent_theme", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThemesGroupBy.prototype, "theme_path", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThemesGroupBy.prototype, "action", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], ThemesGroupBy.prototype, "website_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ThemesGroupBy.prototype, "websites", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThemesCountAggregate_1.ThemesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThemesCountAggregate_1.ThemesCountAggregate)
], ThemesGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThemesAvgAggregate_1.ThemesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThemesAvgAggregate_1.ThemesAvgAggregate)
], ThemesGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThemesSumAggregate_1.ThemesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThemesSumAggregate_1.ThemesSumAggregate)
], ThemesGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThemesMinAggregate_1.ThemesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThemesMinAggregate_1.ThemesMinAggregate)
], ThemesGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThemesMaxAggregate_1.ThemesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThemesMaxAggregate_1.ThemesMaxAggregate)
], ThemesGroupBy.prototype, "_max", void 0);
ThemesGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ThemesGroupBy", {
        isAbstract: true
    })
], ThemesGroupBy);
exports.ThemesGroupBy = ThemesGroupBy;
