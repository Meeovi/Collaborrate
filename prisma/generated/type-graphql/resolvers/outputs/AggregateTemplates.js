"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTemplates = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TemplatesAvgAggregate_1 = require("../outputs/TemplatesAvgAggregate");
const TemplatesCountAggregate_1 = require("../outputs/TemplatesCountAggregate");
const TemplatesMaxAggregate_1 = require("../outputs/TemplatesMaxAggregate");
const TemplatesMinAggregate_1 = require("../outputs/TemplatesMinAggregate");
const TemplatesSumAggregate_1 = require("../outputs/TemplatesSumAggregate");
let AggregateTemplates = class AggregateTemplates {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TemplatesCountAggregate_1.TemplatesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TemplatesCountAggregate_1.TemplatesCountAggregate)
], AggregateTemplates.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TemplatesAvgAggregate_1.TemplatesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TemplatesAvgAggregate_1.TemplatesAvgAggregate)
], AggregateTemplates.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TemplatesSumAggregate_1.TemplatesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TemplatesSumAggregate_1.TemplatesSumAggregate)
], AggregateTemplates.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TemplatesMinAggregate_1.TemplatesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TemplatesMinAggregate_1.TemplatesMinAggregate)
], AggregateTemplates.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TemplatesMaxAggregate_1.TemplatesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TemplatesMaxAggregate_1.TemplatesMaxAggregate)
], AggregateTemplates.prototype, "_max", void 0);
AggregateTemplates = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateTemplates", {
        isAbstract: true
    })
], AggregateTemplates);
exports.AggregateTemplates = AggregateTemplates;
