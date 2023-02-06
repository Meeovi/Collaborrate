"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarehouseSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let WarehouseSumOrderByAggregateInput = class WarehouseSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WarehouseSumOrderByAggregateInput.prototype, "id", void 0);
WarehouseSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WarehouseSumOrderByAggregateInput", {
        isAbstract: true
    })
], WarehouseSumOrderByAggregateInput);
exports.WarehouseSumOrderByAggregateInput = WarehouseSumOrderByAggregateInput;
