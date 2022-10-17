"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_ruleOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
const Tax_ruleOrderByRelevanceFieldEnum_1 = require("../../enums/Tax_ruleOrderByRelevanceFieldEnum");
let Tax_ruleOrderByRelevanceInput = class Tax_ruleOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tax_ruleOrderByRelevanceFieldEnum_1.Tax_ruleOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], Tax_ruleOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Tax_ruleOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Tax_ruleOrderByRelevanceInput.prototype, "search", void 0);
Tax_ruleOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Tax_ruleOrderByRelevanceInput", {
        isAbstract: true
    })
], Tax_ruleOrderByRelevanceInput);
exports.Tax_ruleOrderByRelevanceInput = Tax_ruleOrderByRelevanceInput;
