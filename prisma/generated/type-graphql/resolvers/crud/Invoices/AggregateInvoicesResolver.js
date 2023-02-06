"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateInvoicesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateInvoicesArgs_1 = require("./args/AggregateInvoicesArgs");
const Invoices_1 = require("../../../models/Invoices");
const AggregateInvoices_1 = require("../../outputs/AggregateInvoices");
const helpers_1 = require("../../../helpers");
let AggregateInvoicesResolver = class AggregateInvoicesResolver {
    async aggregateInvoices(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).invoices.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateInvoices_1.AggregateInvoices, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateInvoicesArgs_1.AggregateInvoicesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateInvoicesResolver.prototype, "aggregateInvoices", null);
AggregateInvoicesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Invoices_1.Invoices)
], AggregateInvoicesResolver);
exports.AggregateInvoicesResolver = AggregateInvoicesResolver;
