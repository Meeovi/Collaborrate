"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_attributeSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Product_attributeSumOrderByAggregateInput = class Product_attributeSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeSumOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeSumOrderByAggregateInput.prototype, "prod_id", void 0);
Product_attributeSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Product_attributeSumOrderByAggregateInput", {
        isAbstract: true
    })
], Product_attributeSumOrderByAggregateInput);
exports.Product_attributeSumOrderByAggregateInput = Product_attributeSumOrderByAggregateInput;
