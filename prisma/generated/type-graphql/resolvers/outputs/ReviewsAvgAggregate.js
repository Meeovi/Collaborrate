"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ReviewsAvgAggregate = class ReviewsAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ReviewsAvgAggregate.prototype, "id", void 0);
ReviewsAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ReviewsAvgAggregate", {
        isAbstract: true
    })
], ReviewsAvgAggregate);
exports.ReviewsAvgAggregate = ReviewsAvgAggregate;
