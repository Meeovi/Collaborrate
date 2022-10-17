"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency_ratesCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Currency_ratesCountOrderByAggregateInput = class Currency_ratesCountOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Currency_ratesCountOrderByAggregateInput.prototype, "import_service", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Currency_ratesCountOrderByAggregateInput.prototype, "usd", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Currency_ratesCountOrderByAggregateInput.prototype, "id", void 0);
Currency_ratesCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Currency_ratesCountOrderByAggregateInput", {
        isAbstract: true
    })
], Currency_ratesCountOrderByAggregateInput);
exports.Currency_ratesCountOrderByAggregateInput = Currency_ratesCountOrderByAggregateInput;
