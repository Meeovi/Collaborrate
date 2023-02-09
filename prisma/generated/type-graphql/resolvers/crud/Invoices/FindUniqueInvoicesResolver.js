"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueInvoicesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueInvoicesArgs_1 = require("./args/FindUniqueInvoicesArgs");
const Invoices_1 = require("../../../models/Invoices");
const helpers_1 = require("../../../helpers");
let FindUniqueInvoicesResolver = class FindUniqueInvoicesResolver {
    async findUniqueInvoices(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).invoices.findUnique({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueInvoicesArgs_1.FindUniqueInvoicesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueInvoicesResolver.prototype, "findUniqueInvoices", null);
FindUniqueInvoicesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Invoices_1.Invoices)
], FindUniqueInvoicesResolver);
exports.FindUniqueInvoicesResolver = FindUniqueInvoicesResolver;
