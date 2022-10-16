"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShipmentsAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ShipmentsAvgOrderByAggregateInput = class ShipmentsAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShipmentsAvgOrderByAggregateInput.prototype, "id", void 0);
ShipmentsAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShipmentsAvgOrderByAggregateInput", {
        isAbstract: true
    })
], ShipmentsAvgOrderByAggregateInput);
exports.ShipmentsAvgOrderByAggregateInput = ShipmentsAvgOrderByAggregateInput;
