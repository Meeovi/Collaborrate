"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagesSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let PagesSumOrderByAggregateInput = class PagesSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PagesSumOrderByAggregateInput.prototype, "id", void 0);
PagesSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PagesSumOrderByAggregateInput", {
        isAbstract: true
    })
], PagesSumOrderByAggregateInput);
exports.PagesSumOrderByAggregateInput = PagesSumOrderByAggregateInput;
