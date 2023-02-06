"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ReviewsSumAggregate = class ReviewsSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ReviewsSumAggregate.prototype, "id", void 0);
ReviewsSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ReviewsSumAggregate", {
        isAbstract: true
    })
], ReviewsSumAggregate);
exports.ReviewsSumAggregate = ReviewsSumAggregate;
