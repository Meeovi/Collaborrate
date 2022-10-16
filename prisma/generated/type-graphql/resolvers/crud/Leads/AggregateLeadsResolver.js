"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateLeadsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateLeadsArgs_1 = require("./args/AggregateLeadsArgs");
const Leads_1 = require("../../../models/Leads");
const AggregateLeads_1 = require("../../outputs/AggregateLeads");
const helpers_1 = require("../../../helpers");
let AggregateLeadsResolver = class AggregateLeadsResolver {
    async aggregateLeads(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).leads.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateLeads_1.AggregateLeads, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateLeadsArgs_1.AggregateLeadsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateLeadsResolver.prototype, "aggregateLeads", null);
AggregateLeadsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Leads_1.Leads)
], AggregateLeadsResolver);
exports.AggregateLeadsResolver = AggregateLeadsResolver;
