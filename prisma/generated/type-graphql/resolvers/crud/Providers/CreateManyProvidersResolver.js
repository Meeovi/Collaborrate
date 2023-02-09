"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyProvidersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyProvidersArgs_1 = require("./args/CreateManyProvidersArgs");
const Providers_1 = require("../../../models/Providers");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyProvidersResolver = class CreateManyProvidersResolver {
    async createManyProviders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).providers.createMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyProvidersArgs_1.CreateManyProvidersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyProvidersResolver.prototype, "createManyProviders", null);
CreateManyProvidersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Providers_1.Providers)
], CreateManyProvidersResolver);
exports.CreateManyProvidersResolver = CreateManyProvidersResolver;
