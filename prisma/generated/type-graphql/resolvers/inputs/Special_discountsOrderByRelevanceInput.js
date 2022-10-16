"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Special_discountsOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
const Special_discountsOrderByRelevanceFieldEnum_1 = require("../../enums/Special_discountsOrderByRelevanceFieldEnum");
let Special_discountsOrderByRelevanceInput = class Special_discountsOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Special_discountsOrderByRelevanceFieldEnum_1.Special_discountsOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], Special_discountsOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Special_discountsOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Special_discountsOrderByRelevanceInput.prototype, "search", void 0);
Special_discountsOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Special_discountsOrderByRelevanceInput", {
        isAbstract: true
    })
], Special_discountsOrderByRelevanceInput);
exports.Special_discountsOrderByRelevanceInput = Special_discountsOrderByRelevanceInput;
