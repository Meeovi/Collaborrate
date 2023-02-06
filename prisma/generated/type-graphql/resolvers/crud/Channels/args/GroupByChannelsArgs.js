"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByChannelsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChannelsOrderByWithAggregationInput_1 = require("../../../inputs/ChannelsOrderByWithAggregationInput");
const ChannelsScalarWhereWithAggregatesInput_1 = require("../../../inputs/ChannelsScalarWhereWithAggregatesInput");
const ChannelsWhereInput_1 = require("../../../inputs/ChannelsWhereInput");
const ChannelsScalarFieldEnum_1 = require("../../../../enums/ChannelsScalarFieldEnum");
let GroupByChannelsArgs = class GroupByChannelsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChannelsWhereInput_1.ChannelsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChannelsWhereInput_1.ChannelsWhereInput)
], GroupByChannelsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChannelsOrderByWithAggregationInput_1.ChannelsOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByChannelsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChannelsScalarFieldEnum_1.ChannelsScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByChannelsArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChannelsScalarWhereWithAggregatesInput_1.ChannelsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChannelsScalarWhereWithAggregatesInput_1.ChannelsScalarWhereWithAggregatesInput)
], GroupByChannelsArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByChannelsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByChannelsArgs.prototype, "skip", void 0);
GroupByChannelsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByChannelsArgs);
exports.GroupByChannelsArgs = GroupByChannelsArgs;
