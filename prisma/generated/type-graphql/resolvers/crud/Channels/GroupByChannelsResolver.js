"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByChannelsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByChannelsArgs_1 = require("./args/GroupByChannelsArgs");
const Channels_1 = require("../../../models/Channels");
const ChannelsGroupBy_1 = require("../../outputs/ChannelsGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByChannelsResolver = class GroupByChannelsResolver {
    async groupByChannels(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).channels.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ChannelsGroupBy_1.ChannelsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByChannelsArgs_1.GroupByChannelsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByChannelsResolver.prototype, "groupByChannels", null);
GroupByChannelsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Channels_1.Channels)
], GroupByChannelsResolver);
exports.GroupByChannelsResolver = GroupByChannelsResolver;
