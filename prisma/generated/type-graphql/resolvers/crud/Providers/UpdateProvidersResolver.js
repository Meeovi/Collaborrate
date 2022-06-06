"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProvidersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateProvidersArgs_1 = require("./args/UpdateProvidersArgs");
const Providers_1 = require("../../../models/Providers");
const helpers_1 = require("../../../helpers");
let UpdateProvidersResolver = class UpdateProvidersResolver {
    async updateProviders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).providers.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Providers_1.Providers, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateProvidersArgs_1.UpdateProvidersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateProvidersResolver.prototype, "updateProviders", null);
UpdateProvidersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Providers_1.Providers)
], UpdateProvidersResolver);
exports.UpdateProvidersResolver = UpdateProvidersResolver;
