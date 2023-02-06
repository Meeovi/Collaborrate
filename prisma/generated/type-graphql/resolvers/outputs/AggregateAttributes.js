"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateAttributes = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AttributesAvgAggregate_1 = require("../outputs/AttributesAvgAggregate");
const AttributesCountAggregate_1 = require("../outputs/AttributesCountAggregate");
const AttributesMaxAggregate_1 = require("../outputs/AttributesMaxAggregate");
const AttributesMinAggregate_1 = require("../outputs/AttributesMinAggregate");
const AttributesSumAggregate_1 = require("../outputs/AttributesSumAggregate");
let AggregateAttributes = class AggregateAttributes {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttributesCountAggregate_1.AttributesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttributesCountAggregate_1.AttributesCountAggregate)
], AggregateAttributes.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttributesAvgAggregate_1.AttributesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttributesAvgAggregate_1.AttributesAvgAggregate)
], AggregateAttributes.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttributesSumAggregate_1.AttributesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttributesSumAggregate_1.AttributesSumAggregate)
], AggregateAttributes.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttributesMinAggregate_1.AttributesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttributesMinAggregate_1.AttributesMinAggregate)
], AggregateAttributes.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttributesMaxAggregate_1.AttributesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttributesMaxAggregate_1.AttributesMaxAggregate)
], AggregateAttributes.prototype, "_max", void 0);
AggregateAttributes = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateAttributes", {
        isAbstract: true
    })
], AggregateAttributes);
exports.AggregateAttributes = AggregateAttributes;
