"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentsAvgAggregate_1 = require("../outputs/CommentsAvgAggregate");
const CommentsCountAggregate_1 = require("../outputs/CommentsCountAggregate");
const CommentsMaxAggregate_1 = require("../outputs/CommentsMaxAggregate");
const CommentsMinAggregate_1 = require("../outputs/CommentsMinAggregate");
const CommentsSumAggregate_1 = require("../outputs/CommentsSumAggregate");
let CommentsGroupBy = class CommentsGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CommentsGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CommentsGroupBy.prototype, "customer_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentsGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentsGroupBy.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentsGroupBy.prototype, "response", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CommentsGroupBy.prototype, "published", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CommentsGroupBy.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentsCountAggregate_1.CommentsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentsCountAggregate_1.CommentsCountAggregate)
], CommentsGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentsAvgAggregate_1.CommentsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentsAvgAggregate_1.CommentsAvgAggregate)
], CommentsGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentsSumAggregate_1.CommentsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentsSumAggregate_1.CommentsSumAggregate)
], CommentsGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentsMinAggregate_1.CommentsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentsMinAggregate_1.CommentsMinAggregate)
], CommentsGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentsMaxAggregate_1.CommentsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentsMaxAggregate_1.CommentsMaxAggregate)
], CommentsGroupBy.prototype, "_max", void 0);
CommentsGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CommentsGroupBy", {
        isAbstract: true
    })
], CommentsGroupBy);
exports.CommentsGroupBy = CommentsGroupBy;
