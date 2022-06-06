"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopsSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ShopsSumOrderByAggregateInput = class ShopsSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShopsSumOrderByAggregateInput.prototype, "id", void 0);
ShopsSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShopsSumOrderByAggregateInput", {
        isAbstract: true
    })
], ShopsSumOrderByAggregateInput);
exports.ShopsSumOrderByAggregateInput = ShopsSumOrderByAggregateInput;
