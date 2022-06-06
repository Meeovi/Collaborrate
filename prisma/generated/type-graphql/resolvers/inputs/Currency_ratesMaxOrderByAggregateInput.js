"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency_ratesMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Currency_ratesMaxOrderByAggregateInput = class Currency_ratesMaxOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Currency_ratesMaxOrderByAggregateInput.prototype, "import_service", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Currency_ratesMaxOrderByAggregateInput.prototype, "usd", void 0);
Currency_ratesMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Currency_ratesMaxOrderByAggregateInput", {
        isAbstract: true
    })
], Currency_ratesMaxOrderByAggregateInput);
exports.Currency_ratesMaxOrderByAggregateInput = Currency_ratesMaxOrderByAggregateInput;
