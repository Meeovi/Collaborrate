"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstChannelsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstChannelsArgs_1 = require("./args/FindFirstChannelsArgs");
const Channels_1 = require("../../../models/Channels");
const helpers_1 = require("../../../helpers");
let FindFirstChannelsResolver = class FindFirstChannelsResolver {
    async findFirstChannels(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).channels.findFirst({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstChannelsArgs_1.FindFirstChannelsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstChannelsResolver.prototype, "findFirstChannels", null);
FindFirstChannelsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Channels_1.Channels)
], FindFirstChannelsResolver);
exports.FindFirstChannelsResolver = FindFirstChannelsResolver;
