"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstNewslettersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NewslettersOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/NewslettersOrderByWithRelationAndSearchRelevanceInput");
const NewslettersWhereInput_1 = require("../../../inputs/NewslettersWhereInput");
const NewslettersWhereUniqueInput_1 = require("../../../inputs/NewslettersWhereUniqueInput");
const NewslettersScalarFieldEnum_1 = require("../../../../enums/NewslettersScalarFieldEnum");
let FindFirstNewslettersArgs = class FindFirstNewslettersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NewslettersWhereInput_1.NewslettersWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NewslettersWhereInput_1.NewslettersWhereInput)
], FindFirstNewslettersArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NewslettersOrderByWithRelationAndSearchRelevanceInput_1.NewslettersOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstNewslettersArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NewslettersWhereUniqueInput_1.NewslettersWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NewslettersWhereUniqueInput_1.NewslettersWhereUniqueInput)
], FindFirstNewslettersArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstNewslettersArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstNewslettersArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [NewslettersScalarFieldEnum_1.NewslettersScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstNewslettersArgs.prototype, "distinct", void 0);
FindFirstNewslettersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstNewslettersArgs);
exports.FindFirstNewslettersArgs = FindFirstNewslettersArgs;
