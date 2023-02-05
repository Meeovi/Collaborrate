"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyChannelsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyChannelsArgs_1 = require("./args/FindManyChannelsArgs");
const Channels_1 = require("../../../models/Channels");
const helpers_1 = require("../../../helpers");
let FindManyChannelsResolver = class FindManyChannelsResolver {
    async findManyChannels(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).channels.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Channels_1.Channels], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyChannelsArgs_1.FindManyChannelsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyChannelsResolver.prototype, "findManyChannels", null);
FindManyChannelsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Channels_1.Channels)
], FindManyChannelsResolver);
exports.FindManyChannelsResolver = FindManyChannelsResolver;
