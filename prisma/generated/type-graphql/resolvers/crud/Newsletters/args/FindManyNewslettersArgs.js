"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyNewslettersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NewslettersOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/NewslettersOrderByWithRelationAndSearchRelevanceInput");
const NewslettersWhereInput_1 = require("../../../inputs/NewslettersWhereInput");
const NewslettersWhereUniqueInput_1 = require("../../../inputs/NewslettersWhereUniqueInput");
const NewslettersScalarFieldEnum_1 = require("../../../../enums/NewslettersScalarFieldEnum");
let FindManyNewslettersArgs = class FindManyNewslettersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NewslettersWhereInput_1.NewslettersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NewslettersWhereInput_1.NewslettersWhereInput)
], FindManyNewslettersArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NewslettersOrderByWithRelationAndSearchRelevanceInput_1.NewslettersOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyNewslettersArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NewslettersWhereUniqueInput_1.NewslettersWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NewslettersWhereUniqueInput_1.NewslettersWhereUniqueInput)
], FindManyNewslettersArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyNewslettersArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyNewslettersArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NewslettersScalarFieldEnum_1.NewslettersScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyNewslettersArgs.prototype, "distinct", void 0);
FindManyNewslettersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyNewslettersArgs);
exports.FindManyNewslettersArgs = FindManyNewslettersArgs;
