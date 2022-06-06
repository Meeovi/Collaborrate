"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateArticles = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArticlesAvgAggregate_1 = require("../outputs/ArticlesAvgAggregate");
const ArticlesCountAggregate_1 = require("../outputs/ArticlesCountAggregate");
const ArticlesMaxAggregate_1 = require("../outputs/ArticlesMaxAggregate");
const ArticlesMinAggregate_1 = require("../outputs/ArticlesMinAggregate");
const ArticlesSumAggregate_1 = require("../outputs/ArticlesSumAggregate");
let AggregateArticles = class AggregateArticles {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArticlesCountAggregate_1.ArticlesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArticlesCountAggregate_1.ArticlesCountAggregate)
], AggregateArticles.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArticlesAvgAggregate_1.ArticlesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArticlesAvgAggregate_1.ArticlesAvgAggregate)
], AggregateArticles.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArticlesSumAggregate_1.ArticlesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArticlesSumAggregate_1.ArticlesSumAggregate)
], AggregateArticles.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArticlesMinAggregate_1.ArticlesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArticlesMinAggregate_1.ArticlesMinAggregate)
], AggregateArticles.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArticlesMaxAggregate_1.ArticlesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArticlesMaxAggregate_1.ArticlesMaxAggregate)
], AggregateArticles.prototype, "_max", void 0);
AggregateArticles = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateArticles", {
        isAbstract: true
    })
], AggregateArticles);
exports.AggregateArticles = AggregateArticles;
