"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateNewslettersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NewslettersOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/NewslettersOrderByWithRelationAndSearchRelevanceInput");
const NewslettersWhereInput_1 = require("../../../inputs/NewslettersWhereInput");
const NewslettersWhereUniqueInput_1 = require("../../../inputs/NewslettersWhereUniqueInput");
let AggregateNewslettersArgs = class AggregateNewslettersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NewslettersWhereInput_1.NewslettersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NewslettersWhereInput_1.NewslettersWhereInput)
], AggregateNewslettersArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NewslettersOrderByWithRelationAndSearchRelevanceInput_1.NewslettersOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateNewslettersArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NewslettersWhereUniqueInput_1.NewslettersWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NewslettersWhereUniqueInput_1.NewslettersWhereUniqueInput)
], AggregateNewslettersArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateNewslettersArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateNewslettersArgs.prototype, "skip", void 0);
AggregateNewslettersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateNewslettersArgs);
exports.AggregateNewslettersArgs = AggregateNewslettersArgs;
