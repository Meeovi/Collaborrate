"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTags = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsAvgAggregate_1 = require("../outputs/TagsAvgAggregate");
const TagsCountAggregate_1 = require("../outputs/TagsCountAggregate");
const TagsMaxAggregate_1 = require("../outputs/TagsMaxAggregate");
const TagsMinAggregate_1 = require("../outputs/TagsMinAggregate");
const TagsSumAggregate_1 = require("../outputs/TagsSumAggregate");
let AggregateTags = class AggregateTags {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsCountAggregate_1.TagsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsCountAggregate_1.TagsCountAggregate)
], AggregateTags.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsAvgAggregate_1.TagsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsAvgAggregate_1.TagsAvgAggregate)
], AggregateTags.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsSumAggregate_1.TagsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsSumAggregate_1.TagsSumAggregate)
], AggregateTags.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsMinAggregate_1.TagsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsMinAggregate_1.TagsMinAggregate)
], AggregateTags.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsMaxAggregate_1.TagsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsMaxAggregate_1.TagsMaxAggregate)
], AggregateTags.prototype, "_max", void 0);
AggregateTags = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateTags", {
        isAbstract: true
    })
], AggregateTags);
exports.AggregateTags = AggregateTags;
