"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOpportunitiesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertOpportunitiesArgs_1 = require("./args/UpsertOpportunitiesArgs");
const Opportunities_1 = require("../../../models/Opportunities");
const helpers_1 = require("../../../helpers");
let UpsertOpportunitiesResolver = class UpsertOpportunitiesResolver {
    async upsertOpportunities(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).opportunities.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Opportunities_1.Opportunities, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOpportunitiesArgs_1.UpsertOpportunitiesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOpportunitiesResolver.prototype, "upsertOpportunities", null);
UpsertOpportunitiesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Opportunities_1.Opportunities)
], UpsertOpportunitiesResolver);
exports.UpsertOpportunitiesResolver = UpsertOpportunitiesResolver;
