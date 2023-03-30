"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyChannelsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyChannelsArgs_1 = require("./args/DeleteManyChannelsArgs");
const Channels_1 = require("../../../models/Channels");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyChannelsResolver = class DeleteManyChannelsResolver {
    async deleteManyChannels(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).channels.deleteMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyChannelsArgs_1.DeleteManyChannelsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyChannelsResolver.prototype, "deleteManyChannels", null);
DeleteManyChannelsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Channels_1.Channels)
], DeleteManyChannelsResolver);
exports.DeleteManyChannelsResolver = DeleteManyChannelsResolver;
