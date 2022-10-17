"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCommentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentsOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/CommentsOrderByWithRelationAndSearchRelevanceInput");
const CommentsWhereInput_1 = require("../../../inputs/CommentsWhereInput");
const CommentsWhereUniqueInput_1 = require("../../../inputs/CommentsWhereUniqueInput");
let AggregateCommentsArgs = class AggregateCommentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentsWhereInput_1.CommentsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentsWhereInput_1.CommentsWhereInput)
], AggregateCommentsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentsOrderByWithRelationAndSearchRelevanceInput_1.CommentsOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateCommentsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentsWhereUniqueInput_1.CommentsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentsWhereUniqueInput_1.CommentsWhereUniqueInput)
], AggregateCommentsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateCommentsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateCommentsArgs.prototype, "skip", void 0);
AggregateCommentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateCommentsArgs);
exports.AggregateCommentsArgs = AggregateCommentsArgs;
