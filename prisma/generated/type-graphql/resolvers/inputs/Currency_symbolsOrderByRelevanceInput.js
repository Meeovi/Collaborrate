"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency_symbolsOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Currency_symbolsOrderByRelevanceFieldEnum_1 = require("../../enums/Currency_symbolsOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let Currency_symbolsOrderByRelevanceInput = class Currency_symbolsOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Currency_symbolsOrderByRelevanceFieldEnum_1.Currency_symbolsOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], Currency_symbolsOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Currency_symbolsOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Currency_symbolsOrderByRelevanceInput.prototype, "search", void 0);
Currency_symbolsOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Currency_symbolsOrderByRelevanceInput", {
        isAbstract: true
    })
], Currency_symbolsOrderByRelevanceInput);
exports.Currency_symbolsOrderByRelevanceInput = Currency_symbolsOrderByRelevanceInput;
