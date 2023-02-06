"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrenciesAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let CurrenciesAvgOrderByAggregateInput = class CurrenciesAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CurrenciesAvgOrderByAggregateInput.prototype, "id", void 0);
CurrenciesAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CurrenciesAvgOrderByAggregateInput", {
        isAbstract: true
    })
], CurrenciesAvgOrderByAggregateInput);
exports.CurrenciesAvgOrderByAggregateInput = CurrenciesAvgOrderByAggregateInput;
