"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Catalog_price_ruleOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Catalog_price_ruleOrderByRelevanceInput_1 = require("../inputs/Catalog_price_ruleOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let Catalog_price_ruleOrderByWithRelationAndSearchRelevanceInput = class Catalog_price_ruleOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Catalog_price_ruleOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Catalog_price_ruleOrderByWithRelationAndSearchRelevanceInput.prototype, "rule", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Catalog_price_ruleOrderByWithRelationAndSearchRelevanceInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Catalog_price_ruleOrderByWithRelationAndSearchRelevanceInput.prototype, "active", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Catalog_price_ruleOrderByWithRelationAndSearchRelevanceInput.prototype, "customer_groups", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Catalog_price_ruleOrderByWithRelationAndSearchRelevanceInput.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Catalog_price_ruleOrderByWithRelationAndSearchRelevanceInput.prototype, "start_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Catalog_price_ruleOrderByWithRelationAndSearchRelevanceInput.prototype, "end_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Catalog_price_ruleOrderByWithRelationAndSearchRelevanceInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Catalog_price_ruleOrderByWithRelationAndSearchRelevanceInput.prototype, "website", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Catalog_price_ruleOrderByWithRelationAndSearchRelevanceInput.prototype, "actions_apply", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Catalog_price_ruleOrderByWithRelationAndSearchRelevanceInput.prototype, "actions_discount_amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Catalog_price_ruleOrderByWithRelationAndSearchRelevanceInput.prototype, "actions_discard_subsequent_rules", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Catalog_price_ruleOrderByRelevanceInput_1.Catalog_price_ruleOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Catalog_price_ruleOrderByRelevanceInput_1.Catalog_price_ruleOrderByRelevanceInput)
], Catalog_price_ruleOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
Catalog_price_ruleOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Catalog_price_ruleOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], Catalog_price_ruleOrderByWithRelationAndSearchRelevanceInput);
exports.Catalog_price_ruleOrderByWithRelationAndSearchRelevanceInput = Catalog_price_ruleOrderByWithRelationAndSearchRelevanceInput;
