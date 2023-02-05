"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrenciesOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CurrenciesOrderByRelevanceFieldEnum_1 = require("../../enums/CurrenciesOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let CurrenciesOrderByRelevanceInput = class CurrenciesOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CurrenciesOrderByRelevanceFieldEnum_1.CurrenciesOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CurrenciesOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CurrenciesOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CurrenciesOrderByRelevanceInput.prototype, "search", void 0);
CurrenciesOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CurrenciesOrderByRelevanceInput", {
        isAbstract: true
    })
], CurrenciesOrderByRelevanceInput);
exports.CurrenciesOrderByRelevanceInput = CurrenciesOrderByRelevanceInput;
