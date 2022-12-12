"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagesGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PagesAvgAggregate_1 = require("../outputs/PagesAvgAggregate");
const PagesCountAggregate_1 = require("../outputs/PagesCountAggregate");
const PagesMaxAggregate_1 = require("../outputs/PagesMaxAggregate");
const PagesMinAggregate_1 = require("../outputs/PagesMinAggregate");
const PagesSumAggregate_1 = require("../outputs/PagesSumAggregate");
let PagesGroupBy = class PagesGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], PagesGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], PagesGroupBy.prototype, "enable_page", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PagesGroupBy.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PagesGroupBy.prototype, "content_title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PagesGroupBy.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PagesGroupBy.prototype, "url_key", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PagesGroupBy.prototype, "meta_title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PagesGroupBy.prototype, "meta_keywords", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PagesGroupBy.prototype, "meta_description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PagesCountAggregate_1.PagesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PagesCountAggregate_1.PagesCountAggregate)
], PagesGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PagesAvgAggregate_1.PagesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PagesAvgAggregate_1.PagesAvgAggregate)
], PagesGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PagesSumAggregate_1.PagesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PagesSumAggregate_1.PagesSumAggregate)
], PagesGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PagesMinAggregate_1.PagesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PagesMinAggregate_1.PagesMinAggregate)
], PagesGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PagesMaxAggregate_1.PagesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PagesMaxAggregate_1.PagesMaxAggregate)
], PagesGroupBy.prototype, "_max", void 0);
PagesGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("PagesGroupBy", {
        isAbstract: true
    })
], PagesGroupBy);
exports.PagesGroupBy = PagesGroupBy;
