"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateIntegrationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateIntegrationsArgs_1 = require("./args/CreateIntegrationsArgs");
const Integrations_1 = require("../../../models/Integrations");
const helpers_1 = require("../../../helpers");
let CreateIntegrationsResolver = class CreateIntegrationsResolver {
    async createIntegrations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).integrations.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Integrations_1.Integrations, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateIntegrationsArgs_1.CreateIntegrationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateIntegrationsResolver.prototype, "createIntegrations", null);
CreateIntegrationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Integrations_1.Integrations)
], CreateIntegrationsResolver);
exports.CreateIntegrationsResolver = CreateIntegrationsResolver;
