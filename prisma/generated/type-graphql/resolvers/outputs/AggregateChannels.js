"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateChannels = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChannelsAvgAggregate_1 = require("../outputs/ChannelsAvgAggregate");
const ChannelsCountAggregate_1 = require("../outputs/ChannelsCountAggregate");
const ChannelsMaxAggregate_1 = require("../outputs/ChannelsMaxAggregate");
const ChannelsMinAggregate_1 = require("../outputs/ChannelsMinAggregate");
const ChannelsSumAggregate_1 = require("../outputs/ChannelsSumAggregate");
let AggregateChannels = class AggregateChannels {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChannelsCountAggregate_1.ChannelsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChannelsCountAggregate_1.ChannelsCountAggregate)
], AggregateChannels.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChannelsAvgAggregate_1.ChannelsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChannelsAvgAggregate_1.ChannelsAvgAggregate)
], AggregateChannels.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChannelsSumAggregate_1.ChannelsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChannelsSumAggregate_1.ChannelsSumAggregate)
], AggregateChannels.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChannelsMinAggregate_1.ChannelsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChannelsMinAggregate_1.ChannelsMinAggregate)
], AggregateChannels.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChannelsMaxAggregate_1.ChannelsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChannelsMaxAggregate_1.ChannelsMaxAggregate)
], AggregateChannels.prototype, "_max", void 0);
AggregateChannels = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateChannels", {
        isAbstract: true
    })
], AggregateChannels);
exports.AggregateChannels = AggregateChannels;
