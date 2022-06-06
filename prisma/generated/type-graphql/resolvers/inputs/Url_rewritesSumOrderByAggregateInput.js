"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Url_rewritesSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Url_rewritesSumOrderByAggregateInput = class Url_rewritesSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Url_rewritesSumOrderByAggregateInput.prototype, "id", void 0);
Url_rewritesSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Url_rewritesSumOrderByAggregateInput", {
        isAbstract: true
    })
], Url_rewritesSumOrderByAggregateInput);
exports.Url_rewritesSumOrderByAggregateInput = Url_rewritesSumOrderByAggregateInput;
