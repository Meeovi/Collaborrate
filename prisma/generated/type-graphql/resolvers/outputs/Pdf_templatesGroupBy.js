"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pdf_templatesGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const Pdf_templatesAvgAggregate_1 = require("../outputs/Pdf_templatesAvgAggregate");
const Pdf_templatesCountAggregate_1 = require("../outputs/Pdf_templatesCountAggregate");
const Pdf_templatesMaxAggregate_1 = require("../outputs/Pdf_templatesMaxAggregate");
const Pdf_templatesMinAggregate_1 = require("../outputs/Pdf_templatesMinAggregate");
const Pdf_templatesSumAggregate_1 = require("../outputs/Pdf_templatesSumAggregate");
let Pdf_templatesGroupBy = class Pdf_templatesGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Pdf_templatesGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], Pdf_templatesGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Pdf_templatesGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Pdf_templatesGroupBy.prototype, "assigned_to", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Pdf_templatesGroupBy.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Pdf_templatesGroupBy.prototype, "active", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Pdf_templatesGroupBy.prototype, "page_size", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Pdf_templatesGroupBy.prototype, "orientation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Pdf_templatesGroupBy.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Pdf_templatesGroupBy.prototype, "header", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Pdf_templatesGroupBy.prototype, "footer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Pdf_templatesGroupBy.prototype, "margin_left", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Pdf_templatesGroupBy.prototype, "margin_right", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Pdf_templatesGroupBy.prototype, "margin_top", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Pdf_templatesGroupBy.prototype, "margin_bottom", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Pdf_templatesGroupBy.prototype, "margin_header", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Pdf_templatesGroupBy.prototype, "margin_footer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Pdf_templatesCountAggregate_1.Pdf_templatesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Pdf_templatesCountAggregate_1.Pdf_templatesCountAggregate)
], Pdf_templatesGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Pdf_templatesAvgAggregate_1.Pdf_templatesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Pdf_templatesAvgAggregate_1.Pdf_templatesAvgAggregate)
], Pdf_templatesGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Pdf_templatesSumAggregate_1.Pdf_templatesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Pdf_templatesSumAggregate_1.Pdf_templatesSumAggregate)
], Pdf_templatesGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Pdf_templatesMinAggregate_1.Pdf_templatesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Pdf_templatesMinAggregate_1.Pdf_templatesMinAggregate)
], Pdf_templatesGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Pdf_templatesMaxAggregate_1.Pdf_templatesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Pdf_templatesMaxAggregate_1.Pdf_templatesMaxAggregate)
], Pdf_templatesGroupBy.prototype, "_max", void 0);
Pdf_templatesGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Pdf_templatesGroupBy", {
        isAbstract: true
    })
], Pdf_templatesGroupBy);
exports.Pdf_templatesGroupBy = Pdf_templatesGroupBy;
