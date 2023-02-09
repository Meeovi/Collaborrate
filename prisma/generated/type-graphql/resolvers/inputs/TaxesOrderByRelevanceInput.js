"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxesOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
const TaxesOrderByRelevanceFieldEnum_1 = require("../../enums/TaxesOrderByRelevanceFieldEnum");
let TaxesOrderByRelevanceInput = class TaxesOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaxesOrderByRelevanceFieldEnum_1.TaxesOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], TaxesOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TaxesOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TaxesOrderByRelevanceInput.prototype, "search", void 0);
TaxesOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaxesOrderByRelevanceInput", {
        isAbstract: true
    })
], TaxesOrderByRelevanceInput);
exports.TaxesOrderByRelevanceInput = TaxesOrderByRelevanceInput;
