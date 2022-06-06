"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateOpportunitiesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateOpportunitiesArgs_1 = require("./args/AggregateOpportunitiesArgs");
const Opportunities_1 = require("../../../models/Opportunities");
const AggregateOpportunities_1 = require("../../outputs/AggregateOpportunities");
const helpers_1 = require("../../../helpers");
let AggregateOpportunitiesResolver = class AggregateOpportunitiesResolver {
    async aggregateOpportunities(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).opportunities.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateOpportunities_1.AggregateOpportunities, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateOpportunitiesArgs_1.AggregateOpportunitiesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateOpportunitiesResolver.prototype, "aggregateOpportunities", null);
AggregateOpportunitiesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Opportunities_1.Opportunities)
], AggregateOpportunitiesResolver);
exports.AggregateOpportunitiesResolver = AggregateOpportunitiesResolver;
