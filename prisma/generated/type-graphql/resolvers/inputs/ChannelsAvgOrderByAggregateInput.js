"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelsAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ChannelsAvgOrderByAggregateInput = class ChannelsAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChannelsAvgOrderByAggregateInput.prototype, "id", void 0);
ChannelsAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ChannelsAvgOrderByAggregateInput", {
        isAbstract: true
    })
], ChannelsAvgOrderByAggregateInput);
exports.ChannelsAvgOrderByAggregateInput = ChannelsAvgOrderByAggregateInput;
