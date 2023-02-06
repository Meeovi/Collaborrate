"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZonesSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ZonesSumOrderByAggregateInput = class ZonesSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ZonesSumOrderByAggregateInput.prototype, "id", void 0);
ZonesSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ZonesSumOrderByAggregateInput", {
        isAbstract: true
    })
], ZonesSumOrderByAggregateInput);
exports.ZonesSumOrderByAggregateInput = ZonesSumOrderByAggregateInput;
