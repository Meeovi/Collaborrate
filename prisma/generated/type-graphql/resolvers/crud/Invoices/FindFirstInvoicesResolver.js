"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstInvoicesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstInvoicesArgs_1 = require("./args/FindFirstInvoicesArgs");
const Invoices_1 = require("../../../models/Invoices");
const helpers_1 = require("../../../helpers");
let FindFirstInvoicesResolver = class FindFirstInvoicesResolver {
    async findFirstInvoices(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).invoices.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Invoices_1.Invoices, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstInvoicesArgs_1.FindFirstInvoicesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstInvoicesResolver.prototype, "findFirstInvoices", null);
FindFirstInvoicesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Invoices_1.Invoices)
], FindFirstInvoicesResolver);
exports.FindFirstInvoicesResolver = FindFirstInvoicesResolver;
