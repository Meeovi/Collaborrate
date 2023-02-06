"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateChannelsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateChannelsArgs_1 = require("./args/AggregateChannelsArgs");
const Channels_1 = require("../../../models/Channels");
const AggregateChannels_1 = require("../../outputs/AggregateChannels");
const helpers_1 = require("../../../helpers");
let AggregateChannelsResolver = class AggregateChannelsResolver {
    async aggregateChannels(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).channels.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateChannels_1.AggregateChannels, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateChannelsArgs_1.AggregateChannelsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateChannelsResolver.prototype, "aggregateChannels", null);
AggregateChannelsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Channels_1.Channels)
], AggregateChannelsResolver);
exports.AggregateChannelsResolver = AggregateChannelsResolver;
