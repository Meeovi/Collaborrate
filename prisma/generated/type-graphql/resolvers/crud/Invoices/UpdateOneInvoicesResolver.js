"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneInvoicesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneInvoicesArgs_1 = require("./args/UpdateOneInvoicesArgs");
const Invoices_1 = require("../../../models/Invoices");
const helpers_1 = require("../../../helpers");
let UpdateOneInvoicesResolver = class UpdateOneInvoicesResolver {
    async updateOneInvoices(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).invoices.update({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneInvoicesArgs_1.UpdateOneInvoicesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneInvoicesResolver.prototype, "updateOneInvoices", null);
UpdateOneInvoicesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Invoices_1.Invoices)
], UpdateOneInvoicesResolver);
exports.UpdateOneInvoicesResolver = UpdateOneInvoicesResolver;
