"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyIntegrationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyIntegrationsArgs_1 = require("./args/CreateManyIntegrationsArgs");
const Integrations_1 = require("../../../models/Integrations");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyIntegrationsResolver = class CreateManyIntegrationsResolver {
    async createManyIntegrations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).integrations.createMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyIntegrationsArgs_1.CreateManyIntegrationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyIntegrationsResolver.prototype, "createManyIntegrations", null);
CreateManyIntegrationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Integrations_1.Integrations)
], CreateManyIntegrationsResolver);
exports.CreateManyIntegrationsResolver = CreateManyIntegrationsResolver;
