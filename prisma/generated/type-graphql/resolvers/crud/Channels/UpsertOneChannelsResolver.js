"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneChannelsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneChannelsArgs_1 = require("./args/UpsertOneChannelsArgs");
const Channels_1 = require("../../../models/Channels");
const helpers_1 = require("../../../helpers");
let UpsertOneChannelsResolver = class UpsertOneChannelsResolver {
    async upsertOneChannels(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).channels.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Channels_1.Channels, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneChannelsArgs_1.UpsertOneChannelsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneChannelsResolver.prototype, "upsertOneChannels", null);
UpsertOneChannelsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Channels_1.Channels)
], UpsertOneChannelsResolver);
exports.UpsertOneChannelsResolver = UpsertOneChannelsResolver;
