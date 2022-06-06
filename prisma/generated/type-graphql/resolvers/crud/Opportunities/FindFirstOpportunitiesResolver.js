"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstOpportunitiesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstOpportunitiesArgs_1 = require("./args/FindFirstOpportunitiesArgs");
const Opportunities_1 = require("../../../models/Opportunities");
const helpers_1 = require("../../../helpers");
let FindFirstOpportunitiesResolver = class FindFirstOpportunitiesResolver {
    async findFirstOpportunities(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).opportunities.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Opportunities_1.Opportunities, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstOpportunitiesArgs_1.FindFirstOpportunitiesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstOpportunitiesResolver.prototype, "findFirstOpportunities", null);
FindFirstOpportunitiesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Opportunities_1.Opportunities)
], FindFirstOpportunitiesResolver);
exports.FindFirstOpportunitiesResolver = FindFirstOpportunitiesResolver;
