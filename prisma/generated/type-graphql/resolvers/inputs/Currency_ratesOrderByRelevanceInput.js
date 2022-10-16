"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency_ratesOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Currency_ratesOrderByRelevanceFieldEnum_1 = require("../../enums/Currency_ratesOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let Currency_ratesOrderByRelevanceInput = class Currency_ratesOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Currency_ratesOrderByRelevanceFieldEnum_1.Currency_ratesOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], Currency_ratesOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Currency_ratesOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Currency_ratesOrderByRelevanceInput.prototype, "search", void 0);
Currency_ratesOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Currency_ratesOrderByRelevanceInput", {
        isAbstract: true
    })
], Currency_ratesOrderByRelevanceInput);
exports.Currency_ratesOrderByRelevanceInput = Currency_ratesOrderByRelevanceInput;
