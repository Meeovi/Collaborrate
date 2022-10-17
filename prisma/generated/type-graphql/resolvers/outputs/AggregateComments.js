"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateComments = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentsAvgAggregate_1 = require("../outputs/CommentsAvgAggregate");
const CommentsCountAggregate_1 = require("../outputs/CommentsCountAggregate");
const CommentsMaxAggregate_1 = require("../outputs/CommentsMaxAggregate");
const CommentsMinAggregate_1 = require("../outputs/CommentsMinAggregate");
const CommentsSumAggregate_1 = require("../outputs/CommentsSumAggregate");
let AggregateComments = class AggregateComments {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentsCountAggregate_1.CommentsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentsCountAggregate_1.CommentsCountAggregate)
], AggregateComments.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentsAvgAggregate_1.CommentsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentsAvgAggregate_1.CommentsAvgAggregate)
], AggregateComments.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentsSumAggregate_1.CommentsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentsSumAggregate_1.CommentsSumAggregate)
], AggregateComments.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentsMinAggregate_1.CommentsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentsMinAggregate_1.CommentsMinAggregate)
], AggregateComments.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentsMaxAggregate_1.CommentsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentsMaxAggregate_1.CommentsMaxAggregate)
], AggregateComments.prototype, "_max", void 0);
AggregateComments = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateComments", {
        isAbstract: true
    })
], AggregateComments);
exports.AggregateComments = AggregateComments;
