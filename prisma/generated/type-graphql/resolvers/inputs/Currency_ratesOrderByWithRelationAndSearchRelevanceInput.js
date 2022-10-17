"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency_ratesOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Currency_ratesOrderByRelevanceInput_1 = require("../inputs/Currency_ratesOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let Currency_ratesOrderByWithRelationAndSearchRelevanceInput = class Currency_ratesOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Currency_ratesOrderByWithRelationAndSearchRelevanceInput.prototype, "import_service", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Currency_ratesOrderByWithRelationAndSearchRelevanceInput.prototype, "usd", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Currency_ratesOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_ratesOrderByRelevanceInput_1.Currency_ratesOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Currency_ratesOrderByRelevanceInput_1.Currency_ratesOrderByRelevanceInput)
], Currency_ratesOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
Currency_ratesOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Currency_ratesOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], Currency_ratesOrderByWithRelationAndSearchRelevanceInput);
exports.Currency_ratesOrderByWithRelationAndSearchRelevanceInput = Currency_ratesOrderByWithRelationAndSearchRelevanceInput;
