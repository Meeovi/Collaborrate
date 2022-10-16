"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency_ratesMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Currency_ratesMinOrderByAggregateInput = class Currency_ratesMinOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Currency_ratesMinOrderByAggregateInput.prototype, "import_service", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Currency_ratesMinOrderByAggregateInput.prototype, "usd", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Currency_ratesMinOrderByAggregateInput.prototype, "id", void 0);
Currency_ratesMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Currency_ratesMinOrderByAggregateInput", {
        isAbstract: true
    })
], Currency_ratesMinOrderByAggregateInput);
exports.Currency_ratesMinOrderByAggregateInput = Currency_ratesMinOrderByAggregateInput;
