"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZonesAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ZonesAvgOrderByAggregateInput = class ZonesAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ZonesAvgOrderByAggregateInput.prototype, "id", void 0);
ZonesAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ZonesAvgOrderByAggregateInput", {
        isAbstract: true
    })
], ZonesAvgOrderByAggregateInput);
exports.ZonesAvgOrderByAggregateInput = ZonesAvgOrderByAggregateInput;
