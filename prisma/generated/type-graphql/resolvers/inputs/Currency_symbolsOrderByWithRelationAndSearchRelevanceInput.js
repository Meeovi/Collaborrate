"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency_symbolsOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Currency_symbolsOrderByRelevanceInput_1 = require("../inputs/Currency_symbolsOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let Currency_symbolsOrderByWithRelationAndSearchRelevanceInput = class Currency_symbolsOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Currency_symbolsOrderByWithRelationAndSearchRelevanceInput.prototype, "symbol", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Currency_symbolsOrderByWithRelationAndSearchRelevanceInput.prototype, "use_standard", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Currency_symbolsOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_symbolsOrderByRelevanceInput_1.Currency_symbolsOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Currency_symbolsOrderByRelevanceInput_1.Currency_symbolsOrderByRelevanceInput)
], Currency_symbolsOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
Currency_symbolsOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Currency_symbolsOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], Currency_symbolsOrderByWithRelationAndSearchRelevanceInput);
exports.Currency_symbolsOrderByWithRelationAndSearchRelevanceInput = Currency_symbolsOrderByWithRelationAndSearchRelevanceInput;
