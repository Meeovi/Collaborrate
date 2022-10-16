"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Catalog_price_ruleOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Catalog_price_ruleOrderByRelevanceFieldEnum_1 = require("../../enums/Catalog_price_ruleOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let Catalog_price_ruleOrderByRelevanceInput = class Catalog_price_ruleOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Catalog_price_ruleOrderByRelevanceFieldEnum_1.Catalog_price_ruleOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], Catalog_price_ruleOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Catalog_price_ruleOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Catalog_price_ruleOrderByRelevanceInput.prototype, "search", void 0);
Catalog_price_ruleOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Catalog_price_ruleOrderByRelevanceInput", {
        isAbstract: true
    })
], Catalog_price_ruleOrderByRelevanceInput);
exports.Catalog_price_ruleOrderByRelevanceInput = Catalog_price_ruleOrderByRelevanceInput;
