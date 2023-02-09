"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyOrdersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyOrdersArgs_1 = require("./args/UpdateManyOrdersArgs");
const Orders_1 = require("../../../models/Orders");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyOrdersResolver = class UpdateManyOrdersResolver {
    async updateManyOrders(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).orders.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyOrdersArgs_1.UpdateManyOrdersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyOrdersResolver.prototype, "updateManyOrders", null);
UpdateManyOrdersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Orders_1.Orders)
], UpdateManyOrdersResolver);
exports.UpdateManyOrdersResolver = UpdateManyOrdersResolver;
