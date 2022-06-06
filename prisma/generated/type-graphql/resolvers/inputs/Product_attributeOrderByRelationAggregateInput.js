"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_attributeOrderByRelationAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Product_attributeOrderByRelationAggregateInput = class Product_attributeOrderByRelationAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeOrderByRelationAggregateInput.prototype, "_count", void 0);
Product_attributeOrderByRelationAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Product_attributeOrderByRelationAggregateInput", {
        isAbstract: true
    })
], Product_attributeOrderByRelationAggregateInput);
exports.Product_attributeOrderByRelationAggregateInput = Product_attributeOrderByRelationAggregateInput;
