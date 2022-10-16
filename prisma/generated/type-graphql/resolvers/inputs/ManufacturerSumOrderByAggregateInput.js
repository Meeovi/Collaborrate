"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManufacturerSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ManufacturerSumOrderByAggregateInput = class ManufacturerSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ManufacturerSumOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ManufacturerSumOrderByAggregateInput.prototype, "product", void 0);
ManufacturerSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ManufacturerSumOrderByAggregateInput", {
        isAbstract: true
    })
], ManufacturerSumOrderByAggregateInput);
exports.ManufacturerSumOrderByAggregateInput = ManufacturerSumOrderByAggregateInput;
