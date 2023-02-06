"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneChannelsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneChannelsArgs_1 = require("./args/CreateOneChannelsArgs");
const Channels_1 = require("../../../models/Channels");
const helpers_1 = require("../../../helpers");
let CreateOneChannelsResolver = class CreateOneChannelsResolver {
    async createOneChannels(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).channels.create({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneChannelsArgs_1.CreateOneChannelsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneChannelsResolver.prototype, "createOneChannels", null);
CreateOneChannelsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Channels_1.Channels)
], CreateOneChannelsResolver);
exports.CreateOneChannelsResolver = CreateOneChannelsResolver;
