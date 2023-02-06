"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxesOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaxesOrderByRelevanceInput_1 = require("../inputs/TaxesOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TaxesOrderByWithRelationAndSearchRelevanceInput = class TaxesOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaxesOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaxesOrderByWithRelationAndSearchRelevanceInput.prototype, "tax_identifier", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaxesOrderByWithRelationAndSearchRelevanceInput.prototype, "postcode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaxesOrderByWithRelationAndSearchRelevanceInput.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaxesOrderByWithRelationAndSearchRelevanceInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaxesOrderByWithRelationAndSearchRelevanceInput.prototype, "rate_percent", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaxesOrderByWithRelationAndSearchRelevanceInput.prototype, "taxDefault", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaxesOrderByWithRelationAndSearchRelevanceInput.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaxesOrderByWithRelationAndSearchRelevanceInput.prototype, "taxRuleName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaxesOrderByWithRelationAndSearchRelevanceInput.prototype, "taxCategory", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaxesOrderByRelevanceInput_1.TaxesOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaxesOrderByRelevanceInput_1.TaxesOrderByRelevanceInput)
], TaxesOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
TaxesOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaxesOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], TaxesOrderByWithRelationAndSearchRelevanceInput);
exports.TaxesOrderByWithRelationAndSearchRelevanceInput = TaxesOrderByWithRelationAndSearchRelevanceInput;
