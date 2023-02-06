"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneInvoicesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneInvoicesArgs_1 = require("./args/DeleteOneInvoicesArgs");
const Invoices_1 = require("../../../models/Invoices");
const helpers_1 = require("../../../helpers");
let DeleteOneInvoicesResolver = class DeleteOneInvoicesResolver {
    async deleteOneInvoices(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).invoices.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Invoices_1.Invoices, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneInvoicesArgs_1.DeleteOneInvoicesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneInvoicesResolver.prototype, "deleteOneInvoices", null);
DeleteOneInvoicesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Invoices_1.Invoices)
], DeleteOneInvoicesResolver);
exports.DeleteOneInvoicesResolver = DeleteOneInvoicesResolver;
