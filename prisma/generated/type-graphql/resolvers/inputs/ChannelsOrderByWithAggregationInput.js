"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChannelsAvgOrderByAggregateInput_1 = require("../inputs/ChannelsAvgOrderByAggregateInput");
const ChannelsCountOrderByAggregateInput_1 = require("../inputs/ChannelsCountOrderByAggregateInput");
const ChannelsMaxOrderByAggregateInput_1 = require("../inputs/ChannelsMaxOrderByAggregateInput");
const ChannelsMinOrderByAggregateInput_1 = require("../inputs/ChannelsMinOrderByAggregateInput");
const ChannelsSumOrderByAggregateInput_1 = require("../inputs/ChannelsSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ChannelsOrderByWithAggregationInput = class ChannelsOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChannelsOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChannelsOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChannelsOrderByWithAggregationInput.prototype, "code", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChannelsOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChannelsOrderByWithAggregationInput.prototype, "currency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChannelsOrderByWithAggregationInput.prototype, "default_lang", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChannelsOrderByWithAggregationInput.prototype, "include_tax", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChannelsOrderByWithAggregationInput.prototype, "default_zone", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChannelsOrderByWithAggregationInput.prototype, "default_shipping", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChannelsOrderByWithAggregationInput.prototype, "client_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChannelsOrderByWithAggregationInput.prototype, "client_secret", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChannelsCountOrderByAggregateInput_1.ChannelsCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChannelsCountOrderByAggregateInput_1.ChannelsCountOrderByAggregateInput)
], ChannelsOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChannelsAvgOrderByAggregateInput_1.ChannelsAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChannelsAvgOrderByAggregateInput_1.ChannelsAvgOrderByAggregateInput)
], ChannelsOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChannelsMaxOrderByAggregateInput_1.ChannelsMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChannelsMaxOrderByAggregateInput_1.ChannelsMaxOrderByAggregateInput)
], ChannelsOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChannelsMinOrderByAggregateInput_1.ChannelsMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChannelsMinOrderByAggregateInput_1.ChannelsMinOrderByAggregateInput)
], ChannelsOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChannelsSumOrderByAggregateInput_1.ChannelsSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChannelsSumOrderByAggregateInput_1.ChannelsSumOrderByAggregateInput)
], ChannelsOrderByWithAggregationInput.prototype, "_sum", void 0);
ChannelsOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ChannelsOrderByWithAggregationInput", {
        isAbstract: true
    })
], ChannelsOrderByWithAggregationInput);
exports.ChannelsOrderByWithAggregationInput = ChannelsOrderByWithAggregationInput;
