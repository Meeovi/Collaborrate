"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_categoryOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
const Tax_categoryOrderByRelevanceFieldEnum_1 = require("../../enums/Tax_categoryOrderByRelevanceFieldEnum");
let Tax_categoryOrderByRelevanceInput = class Tax_categoryOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tax_categoryOrderByRelevanceFieldEnum_1.Tax_categoryOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], Tax_categoryOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Tax_categoryOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Tax_categoryOrderByRelevanceInput.prototype, "search", void 0);
Tax_categoryOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Tax_categoryOrderByRelevanceInput", {
        isAbstract: true
    })
], Tax_categoryOrderByRelevanceInput);
exports.Tax_categoryOrderByRelevanceInput = Tax_categoryOrderByRelevanceInput;
