"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOnePaymentsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOnePaymentsArgs_1 = require("./args/DeleteOnePaymentsArgs");
const Payments_1 = require("../../../models/Payments");
const helpers_1 = require("../../../helpers");
let DeleteOnePaymentsResolver = class DeleteOnePaymentsResolver {
    async deleteOnePayments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).payments.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Payments_1.Payments, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOnePaymentsArgs_1.DeleteOnePaymentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOnePaymentsResolver.prototype, "deleteOnePayments", null);
DeleteOnePaymentsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Payments_1.Payments)
], DeleteOnePaymentsResolver);
exports.DeleteOnePaymentsResolver = DeleteOnePaymentsResolver;
