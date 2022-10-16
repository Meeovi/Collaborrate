"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneOpportunitiesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateOneOpportunitiesArgs_1 = require("./args/UpdateOneOpportunitiesArgs");
const Opportunities_1 = require("../../../models/Opportunities");
const helpers_1 = require("../../../helpers");
let UpdateOneOpportunitiesResolver = class UpdateOneOpportunitiesResolver {
    async updateOneOpportunities(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).opportunities.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Opportunities_1.Opportunities, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneOpportunitiesArgs_1.UpdateOneOpportunitiesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneOpportunitiesResolver.prototype, "updateOneOpportunities", null);
UpdateOneOpportunitiesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Opportunities_1.Opportunities)
], UpdateOneOpportunitiesResolver);
exports.UpdateOneOpportunitiesResolver = UpdateOneOpportunitiesResolver;
