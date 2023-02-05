"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplatesGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const TemplatesAvgAggregate_1 = require("../outputs/TemplatesAvgAggregate");
const TemplatesCountAggregate_1 = require("../outputs/TemplatesCountAggregate");
const TemplatesMaxAggregate_1 = require("../outputs/TemplatesMaxAggregate");
const TemplatesMinAggregate_1 = require("../outputs/TemplatesMinAggregate");
const TemplatesSumAggregate_1 = require("../outputs/TemplatesSumAggregate");
let TemplatesGroupBy = class TemplatesGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], TemplatesGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TemplatesGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TemplatesGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TemplatesGroupBy.prototype, "assigned_to", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TemplatesGroupBy.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TemplatesGroupBy.prototype, "active", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TemplatesGroupBy.prototype, "page_size", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TemplatesGroupBy.prototype, "orientation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TemplatesGroupBy.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TemplatesGroupBy.prototype, "header", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TemplatesGroupBy.prototype, "footer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TemplatesGroupBy.prototype, "margin_left", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TemplatesGroupBy.prototype, "margin_right", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TemplatesGroupBy.prototype, "margin_top", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TemplatesGroupBy.prototype, "margin_bottom", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TemplatesGroupBy.prototype, "margin_header", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TemplatesGroupBy.prototype, "margin_footer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TemplatesCountAggregate_1.TemplatesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TemplatesCountAggregate_1.TemplatesCountAggregate)
], TemplatesGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TemplatesAvgAggregate_1.TemplatesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TemplatesAvgAggregate_1.TemplatesAvgAggregate)
], TemplatesGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TemplatesSumAggregate_1.TemplatesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TemplatesSumAggregate_1.TemplatesSumAggregate)
], TemplatesGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TemplatesMinAggregate_1.TemplatesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TemplatesMinAggregate_1.TemplatesMinAggregate)
], TemplatesGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TemplatesMaxAggregate_1.TemplatesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TemplatesMaxAggregate_1.TemplatesMaxAggregate)
], TemplatesGroupBy.prototype, "_max", void 0);
TemplatesGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TemplatesGroupBy", {
        isAbstract: true
    })
], TemplatesGroupBy);
exports.TemplatesGroupBy = TemplatesGroupBy;
