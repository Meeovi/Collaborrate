"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrenciesOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CurrenciesOrderByRelevanceInput_1 = require("../inputs/CurrenciesOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let CurrenciesOrderByWithRelationAndSearchRelevanceInput = class CurrenciesOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CurrenciesOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CurrenciesOrderByWithRelationAndSearchRelevanceInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CurrenciesOrderByWithRelationAndSearchRelevanceInput.prototype, "code", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CurrenciesOrderByWithRelationAndSearchRelevanceInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CurrenciesOrderByWithRelationAndSearchRelevanceInput.prototype, "region", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrenciesOrderByRelevanceInput_1.CurrenciesOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrenciesOrderByRelevanceInput_1.CurrenciesOrderByRelevanceInput)
], CurrenciesOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
CurrenciesOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CurrenciesOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], CurrenciesOrderByWithRelationAndSearchRelevanceInput);
exports.CurrenciesOrderByWithRelationAndSearchRelevanceInput = CurrenciesOrderByWithRelationAndSearchRelevanceInput;
