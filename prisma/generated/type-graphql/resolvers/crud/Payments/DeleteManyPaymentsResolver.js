"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyPaymentsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyPaymentsArgs_1 = require("./args/DeleteManyPaymentsArgs");
const Payments_1 = require("../../../models/Payments");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyPaymentsResolver = class DeleteManyPaymentsResolver {
    async deleteManyPayments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).payments.deleteMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyPaymentsArgs_1.DeleteManyPaymentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyPaymentsResolver.prototype, "deleteManyPayments", null);
DeleteManyPaymentsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Payments_1.Payments)
], DeleteManyPaymentsResolver);
exports.DeleteManyPaymentsResolver = DeleteManyPaymentsResolver;
