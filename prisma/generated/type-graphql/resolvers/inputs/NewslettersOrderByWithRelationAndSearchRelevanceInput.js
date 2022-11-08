"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewslettersOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NewslettersOrderByRelevanceInput_1 = require("../inputs/NewslettersOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let NewslettersOrderByWithRelationAndSearchRelevanceInput = class NewslettersOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NewslettersOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NewslettersOrderByWithRelationAndSearchRelevanceInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NewslettersOrderByWithRelationAndSearchRelevanceInput.prototype, "customer_first_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NewslettersOrderByWithRelationAndSearchRelevanceInput.prototype, "customer_last_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NewslettersOrderByWithRelationAndSearchRelevanceInput.prototype, "store", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NewslettersOrderByWithRelationAndSearchRelevanceInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NewslettersOrderByWithRelationAndSearchRelevanceInput.prototype, "websites", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NewslettersOrderByWithRelationAndSearchRelevanceInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NewslettersOrderByWithRelationAndSearchRelevanceInput.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NewslettersOrderByWithRelationAndSearchRelevanceInput.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NewslettersOrderByRelevanceInput_1.NewslettersOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NewslettersOrderByRelevanceInput_1.NewslettersOrderByRelevanceInput)
], NewslettersOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
NewslettersOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NewslettersOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], NewslettersOrderByWithRelationAndSearchRelevanceInput);
exports.NewslettersOrderByWithRelationAndSearchRelevanceInput = NewslettersOrderByWithRelationAndSearchRelevanceInput;
