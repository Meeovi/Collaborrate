"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnsAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ReturnsAvgOrderByAggregateInput = class ReturnsAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReturnsAvgOrderByAggregateInput.prototype, "id", void 0);
ReturnsAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReturnsAvgOrderByAggregateInput", {
        isAbstract: true
    })
], ReturnsAvgOrderByAggregateInput);
exports.ReturnsAvgOrderByAggregateInput = ReturnsAvgOrderByAggregateInput;
