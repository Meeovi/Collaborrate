"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorsSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let VendorsSumOrderByAggregateInput = class VendorsSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VendorsSumOrderByAggregateInput.prototype, "id", void 0);
VendorsSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VendorsSumOrderByAggregateInput", {
        isAbstract: true
    })
], VendorsSumOrderByAggregateInput);
exports.VendorsSumOrderByAggregateInput = VendorsSumOrderByAggregateInput;
