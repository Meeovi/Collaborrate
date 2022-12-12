"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticlesSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ArticlesSumAggregate = class ArticlesSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ArticlesSumAggregate.prototype, "id", void 0);
ArticlesSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ArticlesSumAggregate", {
        isAbstract: true
    })
], ArticlesSumAggregate);
exports.ArticlesSumAggregate = ArticlesSumAggregate;
