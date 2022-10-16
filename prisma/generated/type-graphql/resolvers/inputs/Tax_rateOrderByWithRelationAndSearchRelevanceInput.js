"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_rateOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_rateOrderByRelevanceInput_1 = require("../inputs/Tax_rateOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let Tax_rateOrderByWithRelationAndSearchRelevanceInput = class Tax_rateOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_rateOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_rateOrderByWithRelationAndSearchRelevanceInput.prototype, "tax_identifier", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_rateOrderByWithRelationAndSearchRelevanceInput.prototype, "zip_post_is_range", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_rateOrderByWithRelationAndSearchRelevanceInput.prototype, "postcode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_rateOrderByWithRelationAndSearchRelevanceInput.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_rateOrderByWithRelationAndSearchRelevanceInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_rateOrderByWithRelationAndSearchRelevanceInput.prototype, "rate_percent", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_rateOrderByWithRelationAndSearchRelevanceInput.prototype, "default_store_view", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_rateOrderByWithRelationAndSearchRelevanceInput.prototype, "prod_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_rateOrderByWithRelationAndSearchRelevanceInput.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_rateOrderByRelevanceInput_1.Tax_rateOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_rateOrderByRelevanceInput_1.Tax_rateOrderByRelevanceInput)
], Tax_rateOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
Tax_rateOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Tax_rateOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], Tax_rateOrderByWithRelationAndSearchRelevanceInput);
exports.Tax_rateOrderByWithRelationAndSearchRelevanceInput = Tax_rateOrderByWithRelationAndSearchRelevanceInput;
