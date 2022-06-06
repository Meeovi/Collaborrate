"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOpportunitiesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateOpportunitiesArgs_1 = require("./args/CreateOpportunitiesArgs");
const Opportunities_1 = require("../../../models/Opportunities");
const helpers_1 = require("../../../helpers");
let CreateOpportunitiesResolver = class CreateOpportunitiesResolver {
    async createOpportunities(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).opportunities.create({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOpportunitiesArgs_1.CreateOpportunitiesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOpportunitiesResolver.prototype, "createOpportunities", null);
CreateOpportunitiesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Opportunities_1.Opportunities)
], CreateOpportunitiesResolver);
exports.CreateOpportunitiesResolver = CreateOpportunitiesResolver;
