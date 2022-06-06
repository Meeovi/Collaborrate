"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueLeadsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueLeadsArgs_1 = require("./args/FindUniqueLeadsArgs");
const Leads_1 = require("../../../models/Leads");
const helpers_1 = require("../../../helpers");
let FindUniqueLeadsResolver = class FindUniqueLeadsResolver {
    async findUniqueLeads(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).leads.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Leads_1.Leads, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueLeadsArgs_1.FindUniqueLeadsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueLeadsResolver.prototype, "findUniqueLeads", null);
FindUniqueLeadsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Leads_1.Leads)
], FindUniqueLeadsResolver);
exports.FindUniqueLeadsResolver = FindUniqueLeadsResolver;
