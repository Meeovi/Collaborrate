"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelsSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ChannelsSumOrderByAggregateInput = class ChannelsSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChannelsSumOrderByAggregateInput.prototype, "id", void 0);
ChannelsSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ChannelsSumOrderByAggregateInput", {
        isAbstract: true
    })
], ChannelsSumOrderByAggregateInput);
exports.ChannelsSumOrderByAggregateInput = ChannelsSumOrderByAggregateInput;
