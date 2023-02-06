"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorsAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let VendorsAvgOrderByAggregateInput = class VendorsAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VendorsAvgOrderByAggregateInput.prototype, "id", void 0);
VendorsAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VendorsAvgOrderByAggregateInput", {
        isAbstract: true
    })
], VendorsAvgOrderByAggregateInput);
exports.VendorsAvgOrderByAggregateInput = VendorsAvgOrderByAggregateInput;
