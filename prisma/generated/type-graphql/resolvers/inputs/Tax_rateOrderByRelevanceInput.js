"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_rateOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
const Tax_rateOrderByRelevanceFieldEnum_1 = require("../../enums/Tax_rateOrderByRelevanceFieldEnum");
let Tax_rateOrderByRelevanceInput = class Tax_rateOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tax_rateOrderByRelevanceFieldEnum_1.Tax_rateOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], Tax_rateOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Tax_rateOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Tax_rateOrderByRelevanceInput.prototype, "search", void 0);
Tax_rateOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Tax_rateOrderByRelevanceInput", {
        isAbstract: true
    })
], Tax_rateOrderByRelevanceInput);
exports.Tax_rateOrderByRelevanceInput = Tax_rateOrderByRelevanceInput;
