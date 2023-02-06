"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneChannelsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneChannelsArgs_1 = require("./args/UpdateOneChannelsArgs");
const Channels_1 = require("../../../models/Channels");
const helpers_1 = require("../../../helpers");
let UpdateOneChannelsResolver = class UpdateOneChannelsResolver {
    async updateOneChannels(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).channels.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Channels_1.Channels, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneChannelsArgs_1.UpdateOneChannelsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneChannelsResolver.prototype, "updateOneChannels", null);
UpdateOneChannelsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Channels_1.Channels)
], UpdateOneChannelsResolver);
exports.UpdateOneChannelsResolver = UpdateOneChannelsResolver;
