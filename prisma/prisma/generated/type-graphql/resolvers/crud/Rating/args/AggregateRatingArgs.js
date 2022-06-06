"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRatingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RatingOrderByWithRelationInput_1 = require("../../../inputs/RatingOrderByWithRelationInput");
const RatingWhereInput_1 = require("../../../inputs/RatingWhereInput");
const RatingWhereUniqueInput_1 = require("../../../inputs/RatingWhereUniqueInput");
let AggregateRatingArgs = class AggregateRatingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingWhereInput_1.RatingWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingWhereInput_1.RatingWhereInput)
], AggregateRatingArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RatingOrderByWithRelationInput_1.RatingOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateRatingArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingWhereUniqueInput_1.RatingWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingWhereUniqueInput_1.RatingWhereUniqueInput)
], AggregateRatingArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateRatingArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateRatingArgs.prototype, "skip", void 0);
AggregateRatingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateRatingArgs);
exports.AggregateRatingArgs = AggregateRatingArgs;
