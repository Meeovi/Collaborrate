"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ReviewsWhereUniqueInput = class ReviewsWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ReviewsWhereUniqueInput.prototype, "id", void 0);
ReviewsWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReviewsWhereUniqueInput", {
        isAbstract: true
    })
], ReviewsWhereUniqueInput);
exports.ReviewsWhereUniqueInput = ReviewsWhereUniqueInput;
