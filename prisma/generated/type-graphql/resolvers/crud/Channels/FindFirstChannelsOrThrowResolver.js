"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstChannelsOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstChannelsOrThrowArgs_1 = require("./args/FindFirstChannelsOrThrowArgs");
const Channels_1 = require("../../../models/Channels");
const helpers_1 = require("../../../helpers");
let FindFirstChannelsOrThrowResolver = class FindFirstChannelsOrThrowResolver {
    async findFirstChannelsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).channels.findFirstOrThrow({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstChannelsOrThrowArgs_1.FindFirstChannelsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstChannelsOrThrowResolver.prototype, "findFirstChannelsOrThrow", null);
FindFirstChannelsOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Channels_1.Channels)
], FindFirstChannelsOrThrowResolver);
exports.FindFirstChannelsOrThrowResolver = FindFirstChannelsOrThrowResolver;
