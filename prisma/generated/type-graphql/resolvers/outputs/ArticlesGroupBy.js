"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticlesGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArticlesAvgAggregate_1 = require("../outputs/ArticlesAvgAggregate");
const ArticlesCountAggregate_1 = require("../outputs/ArticlesCountAggregate");
const ArticlesMaxAggregate_1 = require("../outputs/ArticlesMaxAggregate");
const ArticlesMinAggregate_1 = require("../outputs/ArticlesMinAggregate");
const ArticlesSumAggregate_1 = require("../outputs/ArticlesSumAggregate");
let ArticlesGroupBy = class ArticlesGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ArticlesGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ArticlesGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ArticlesGroupBy.prototype, "excerpt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ArticlesGroupBy.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ArticlesGroupBy.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ArticlesGroupBy.prototype, "categories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ArticlesGroupBy.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ArticlesGroupBy.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ArticlesGroupBy.prototype, "published", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ArticlesGroupBy.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ArticlesGroupBy.prototype, "isPublic", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ArticlesGroupBy.prototype, "meta_description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ArticlesGroupBy.prototype, "meta_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ArticlesGroupBy.prototype, "meta_url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ArticlesGroupBy.prototype, "tags", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ArticlesGroupBy.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArticlesCountAggregate_1.ArticlesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArticlesCountAggregate_1.ArticlesCountAggregate)
], ArticlesGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArticlesAvgAggregate_1.ArticlesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArticlesAvgAggregate_1.ArticlesAvgAggregate)
], ArticlesGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArticlesSumAggregate_1.ArticlesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArticlesSumAggregate_1.ArticlesSumAggregate)
], ArticlesGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArticlesMinAggregate_1.ArticlesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArticlesMinAggregate_1.ArticlesMinAggregate)
], ArticlesGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArticlesMaxAggregate_1.ArticlesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArticlesMaxAggregate_1.ArticlesMaxAggregate)
], ArticlesGroupBy.prototype, "_max", void 0);
ArticlesGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ArticlesGroupBy", {
        isAbstract: true
    })
], ArticlesGroupBy);
exports.ArticlesGroupBy = ArticlesGroupBy;
