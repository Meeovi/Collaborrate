"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelsGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const ChannelsAvgAggregate_1 = require("../outputs/ChannelsAvgAggregate");
const ChannelsCountAggregate_1 = require("../outputs/ChannelsCountAggregate");
const ChannelsMaxAggregate_1 = require("../outputs/ChannelsMaxAggregate");
const ChannelsMinAggregate_1 = require("../outputs/ChannelsMinAggregate");
const ChannelsSumAggregate_1 = require("../outputs/ChannelsSumAggregate");
let ChannelsGroupBy = class ChannelsGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], ChannelsGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ChannelsGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChannelsGroupBy.prototype, "code", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChannelsGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChannelsGroupBy.prototype, "currency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChannelsGroupBy.prototype, "default_lang", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChannelsGroupBy.prototype, "include_tax", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChannelsGroupBy.prototype, "default_zone", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChannelsGroupBy.prototype, "default_shipping", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChannelsGroupBy.prototype, "client_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ChannelsGroupBy.prototype, "client_secret", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChannelsCountAggregate_1.ChannelsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChannelsCountAggregate_1.ChannelsCountAggregate)
], ChannelsGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChannelsAvgAggregate_1.ChannelsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChannelsAvgAggregate_1.ChannelsAvgAggregate)
], ChannelsGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChannelsSumAggregate_1.ChannelsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChannelsSumAggregate_1.ChannelsSumAggregate)
], ChannelsGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChannelsMinAggregate_1.ChannelsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChannelsMinAggregate_1.ChannelsMinAggregate)
], ChannelsGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChannelsMaxAggregate_1.ChannelsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChannelsMaxAggregate_1.ChannelsMaxAggregate)
], ChannelsGroupBy.prototype, "_max", void 0);
ChannelsGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ChannelsGroupBy", {
        isAbstract: true
    })
], ChannelsGroupBy);
exports.ChannelsGroupBy = ChannelsGroupBy;
