"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_typesSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Product_typesSumOrderByAggregateInput = class Product_typesSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_typesSumOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_typesSumOrderByAggregateInput.prototype, "prod_id", void 0);
Product_typesSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Product_typesSumOrderByAggregateInput", {
        isAbstract: true
    })
], Product_typesSumOrderByAggregateInput);
exports.Product_typesSumOrderByAggregateInput = Product_typesSumOrderByAggregateInput;
