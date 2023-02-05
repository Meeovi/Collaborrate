"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyCollectionsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyCollectionsArgs_1 = require("./args/CreateManyCollectionsArgs");
const Collections_1 = require("../../../models/Collections");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyCollectionsResolver = class CreateManyCollectionsResolver {
    async createManyCollections(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).collections.createMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyCollectionsArgs_1.CreateManyCollectionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyCollectionsResolver.prototype, "createManyCollections", null);
CreateManyCollectionsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Collections_1.Collections)
], CreateManyCollectionsResolver);
exports.CreateManyCollectionsResolver = CreateManyCollectionsResolver;
