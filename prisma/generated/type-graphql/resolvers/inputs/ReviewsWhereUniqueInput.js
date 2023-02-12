"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const ReviewsWhereInput_1 = require("../inputs/ReviewsWhereInput");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let ReviewsWhereUniqueInput = class ReviewsWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ReviewsWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewsWhereInput_1.ReviewsWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewsWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewsWhereInput_1.ReviewsWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewsWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewsWhereInput_1.ReviewsWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewsWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ReviewsWhereUniqueInput.prototype, "first_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ReviewsWhereUniqueInput.prototype, "last_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ReviewsWhereUniqueInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ReviewsWhereUniqueInput.prototype, "websites", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], ReviewsWhereUniqueInput.prototype, "created_at", void 0);
ReviewsWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReviewsWhereUniqueInput", {
        isAbstract: true
    })
], ReviewsWhereUniqueInput);
exports.ReviewsWhereUniqueInput = ReviewsWhereUniqueInput;
