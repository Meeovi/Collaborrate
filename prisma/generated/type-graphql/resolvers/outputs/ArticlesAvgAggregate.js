"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticlesAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ArticlesAvgAggregate = class ArticlesAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ArticlesAvgAggregate.prototype, "id", void 0);
ArticlesAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ArticlesAvgAggregate", {
        isAbstract: true
    })
], ArticlesAvgAggregate);
exports.ArticlesAvgAggregate = ArticlesAvgAggregate;
