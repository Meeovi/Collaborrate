"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Catalog_price_ruleAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Catalog_price_ruleAvgOrderByAggregateInput = class Catalog_price_ruleAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Catalog_price_ruleAvgOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Catalog_price_ruleAvgOrderByAggregateInput.prototype, "actions_discount_amount", void 0);
Catalog_price_ruleAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Catalog_price_ruleAvgOrderByAggregateInput", {
        isAbstract: true
    })
], Catalog_price_ruleAvgOrderByAggregateInput);
exports.Catalog_price_ruleAvgOrderByAggregateInput = Catalog_price_ruleAvgOrderByAggregateInput;
