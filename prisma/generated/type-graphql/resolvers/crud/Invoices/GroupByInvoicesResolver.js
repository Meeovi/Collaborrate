"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByInvoicesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByInvoicesArgs_1 = require("./args/GroupByInvoicesArgs");
const Invoices_1 = require("../../../models/Invoices");
const InvoicesGroupBy_1 = require("../../outputs/InvoicesGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByInvoicesResolver = class GroupByInvoicesResolver {
    async groupByInvoices(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).invoices.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [InvoicesGroupBy_1.InvoicesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByInvoicesArgs_1.GroupByInvoicesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByInvoicesResolver.prototype, "groupByInvoices", null);
GroupByInvoicesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Invoices_1.Invoices)
], GroupByInvoicesResolver);
exports.GroupByInvoicesResolver = GroupByInvoicesResolver;
