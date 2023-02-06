"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyPaymentsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyPaymentsArgs_1 = require("./args/UpdateManyPaymentsArgs");
const Payments_1 = require("../../../models/Payments");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyPaymentsResolver = class UpdateManyPaymentsResolver {
    async updateManyPayments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).payments.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyPaymentsArgs_1.UpdateManyPaymentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyPaymentsResolver.prototype, "updateManyPayments", null);
UpdateManyPaymentsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Payments_1.Payments)
], UpdateManyPaymentsResolver);
exports.UpdateManyPaymentsResolver = UpdateManyPaymentsResolver;
