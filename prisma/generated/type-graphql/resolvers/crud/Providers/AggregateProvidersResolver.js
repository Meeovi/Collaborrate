"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateProvidersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateProvidersArgs_1 = require("./args/AggregateProvidersArgs");
const Providers_1 = require("../../../models/Providers");
const AggregateProviders_1 = require("../../outputs/AggregateProviders");
const helpers_1 = require("../../../helpers");
let AggregateProvidersResolver = class AggregateProvidersResolver {
    async aggregateProviders(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).providers.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateProviders_1.AggregateProviders, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateProvidersArgs_1.AggregateProvidersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateProvidersResolver.prototype, "aggregateProviders", null);
AggregateProvidersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Providers_1.Providers)
], AggregateProvidersResolver);
exports.AggregateProvidersResolver = AggregateProvidersResolver;
