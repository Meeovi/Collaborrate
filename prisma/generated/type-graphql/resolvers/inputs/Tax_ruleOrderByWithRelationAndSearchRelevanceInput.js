"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_ruleOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_ruleOrderByRelevanceInput_1 = require("../inputs/Tax_ruleOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let Tax_ruleOrderByWithRelationAndSearchRelevanceInput = class Tax_ruleOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_ruleOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_ruleOrderByWithRelationAndSearchRelevanceInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_ruleOrderByWithRelationAndSearchRelevanceInput.prototype, "tax_rate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_ruleOrderByWithRelationAndSearchRelevanceInput.prototype, "prod_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_ruleOrderByWithRelationAndSearchRelevanceInput.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleOrderByRelevanceInput_1.Tax_ruleOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_ruleOrderByRelevanceInput_1.Tax_ruleOrderByRelevanceInput)
], Tax_ruleOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
Tax_ruleOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Tax_ruleOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], Tax_ruleOrderByWithRelationAndSearchRelevanceInput);
exports.Tax_ruleOrderByWithRelationAndSearchRelevanceInput = Tax_ruleOrderByWithRelationAndSearchRelevanceInput;
