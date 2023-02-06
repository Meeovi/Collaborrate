"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueChannelsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueChannelsArgs_1 = require("./args/FindUniqueChannelsArgs");
const Channels_1 = require("../../../models/Channels");
const helpers_1 = require("../../../helpers");
let FindUniqueChannelsResolver = class FindUniqueChannelsResolver {
    async findUniqueChannels(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).channels.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Channels_1.Channels, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueChannelsArgs_1.FindUniqueChannelsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueChannelsResolver.prototype, "findUniqueChannels", null);
FindUniqueChannelsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Channels_1.Channels)
], FindUniqueChannelsResolver);
exports.FindUniqueChannelsResolver = FindUniqueChannelsResolver;
