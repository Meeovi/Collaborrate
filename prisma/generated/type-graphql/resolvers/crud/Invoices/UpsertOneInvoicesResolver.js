"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneInvoicesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneInvoicesArgs_1 = require("./args/UpsertOneInvoicesArgs");
const Invoices_1 = require("../../../models/Invoices");
const helpers_1 = require("../../../helpers");
let UpsertOneInvoicesResolver = class UpsertOneInvoicesResolver {
    async upsertOneInvoices(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).invoices.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Invoices_1.Invoices, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneInvoicesArgs_1.UpsertOneInvoicesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneInvoicesResolver.prototype, "upsertOneInvoices", null);
UpsertOneInvoicesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Invoices_1.Invoices)
], UpsertOneInvoicesResolver);
exports.UpsertOneInvoicesResolver = UpsertOneInvoicesResolver;
