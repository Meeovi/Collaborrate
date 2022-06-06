"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregatePages = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PagesAvgAggregate_1 = require("../outputs/PagesAvgAggregate");
const PagesCountAggregate_1 = require("../outputs/PagesCountAggregate");
const PagesMaxAggregate_1 = require("../outputs/PagesMaxAggregate");
const PagesMinAggregate_1 = require("../outputs/PagesMinAggregate");
const PagesSumAggregate_1 = require("../outputs/PagesSumAggregate");
let AggregatePages = class AggregatePages {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PagesCountAggregate_1.PagesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PagesCountAggregate_1.PagesCountAggregate)
], AggregatePages.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PagesAvgAggregate_1.PagesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PagesAvgAggregate_1.PagesAvgAggregate)
], AggregatePages.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PagesSumAggregate_1.PagesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PagesSumAggregate_1.PagesSumAggregate)
], AggregatePages.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PagesMinAggregate_1.PagesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PagesMinAggregate_1.PagesMinAggregate)
], AggregatePages.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PagesMaxAggregate_1.PagesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PagesMaxAggregate_1.PagesMaxAggregate)
], AggregatePages.prototype, "_max", void 0);
AggregatePages = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregatePages", {
        isAbstract: true
    })
], AggregatePages);
exports.AggregatePages = AggregatePages;
