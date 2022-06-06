"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_attribute_setMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Product_attribute_setMaxOrderByAggregateInput = class Product_attribute_setMaxOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attribute_setMaxOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attribute_setMaxOrderByAggregateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attribute_setMaxOrderByAggregateInput.prototype, "based_on", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attribute_setMaxOrderByAggregateInput.prototype, "attribute_id", void 0);
Product_attribute_setMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Product_attribute_setMaxOrderByAggregateInput", {
        isAbstract: true
    })
], Product_attribute_setMaxOrderByAggregateInput);
exports.Product_attribute_setMaxOrderByAggregateInput = Product_attribute_setMaxOrderByAggregateInput;
