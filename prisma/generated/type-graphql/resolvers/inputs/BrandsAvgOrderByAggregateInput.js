"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandsAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let BrandsAvgOrderByAggregateInput = class BrandsAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandsAvgOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandsAvgOrderByAggregateInput.prototype, "product", void 0);
BrandsAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BrandsAvgOrderByAggregateInput", {
        isAbstract: true
    })
], BrandsAvgOrderByAggregateInput);
exports.BrandsAvgOrderByAggregateInput = BrandsAvgOrderByAggregateInput;
