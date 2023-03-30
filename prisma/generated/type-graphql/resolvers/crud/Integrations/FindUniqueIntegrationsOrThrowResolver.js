"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueIntegrationsOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueIntegrationsOrThrowArgs_1 = require("./args/FindUniqueIntegrationsOrThrowArgs");
const Integrations_1 = require("../../../models/Integrations");
const helpers_1 = require("../../../helpers");
let FindUniqueIntegrationsOrThrowResolver = class FindUniqueIntegrationsOrThrowResolver {
    async findUniqueIntegrationsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).integrations.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Integrations_1.Integrations, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueIntegrationsOrThrowArgs_1.FindUniqueIntegrationsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueIntegrationsOrThrowResolver.prototype, "findUniqueIntegrationsOrThrow", null);
FindUniqueIntegrationsOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Integrations_1.Integrations)
], FindUniqueIntegrationsOrThrowResolver);
exports.FindUniqueIntegrationsOrThrowResolver = FindUniqueIntegrationsOrThrowResolver;
