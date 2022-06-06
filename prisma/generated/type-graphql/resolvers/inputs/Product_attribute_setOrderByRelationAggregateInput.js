"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_attribute_setOrderByRelationAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Product_attribute_setOrderByRelationAggregateInput = class Product_attribute_setOrderByRelationAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attribute_setOrderByRelationAggregateInput.prototype, "_count", void 0);
Product_attribute_setOrderByRelationAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Product_attribute_setOrderByRelationAggregateInput", {
        isAbstract: true
    })
], Product_attribute_setOrderByRelationAggregateInput);
exports.Product_attribute_setOrderByRelationAggregateInput = Product_attribute_setOrderByRelationAggregateInput;
