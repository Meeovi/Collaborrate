"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyInvoicesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyInvoicesArgs_1 = require("./args/CreateManyInvoicesArgs");
const Invoices_1 = require("../../../models/Invoices");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyInvoicesResolver = class CreateManyInvoicesResolver {
    async createManyInvoices(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).invoices.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyInvoicesArgs_1.CreateManyInvoicesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyInvoicesResolver.prototype, "createManyInvoices", null);
CreateManyInvoicesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Invoices_1.Invoices)
], CreateManyInvoicesResolver);
exports.CreateManyInvoicesResolver = CreateManyInvoicesResolver;
