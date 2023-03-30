"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyChannelsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyChannelsArgs_1 = require("./args/UpdateManyChannelsArgs");
const Channels_1 = require("../../../models/Channels");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyChannelsResolver = class UpdateManyChannelsResolver {
    async updateManyChannels(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).channels.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyChannelsArgs_1.UpdateManyChannelsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyChannelsResolver.prototype, "updateManyChannels", null);
UpdateManyChannelsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Channels_1.Channels)
], UpdateManyChannelsResolver);
exports.UpdateManyChannelsResolver = UpdateManyChannelsResolver;
