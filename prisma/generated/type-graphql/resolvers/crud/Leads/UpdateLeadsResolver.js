"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLeadsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateLeadsArgs_1 = require("./args/UpdateLeadsArgs");
const Leads_1 = require("../../../models/Leads");
const helpers_1 = require("../../../helpers");
let UpdateLeadsResolver = class UpdateLeadsResolver {
    async updateLeads(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).leads.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Leads_1.Leads, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateLeadsArgs_1.UpdateLeadsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateLeadsResolver.prototype, "updateLeads", null);
UpdateLeadsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Leads_1.Leads)
], UpdateLeadsResolver);
exports.UpdateLeadsResolver = UpdateLeadsResolver;
