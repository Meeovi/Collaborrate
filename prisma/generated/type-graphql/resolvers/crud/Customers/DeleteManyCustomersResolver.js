"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyCustomersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyCustomersArgs_1 = require("./args/DeleteManyCustomersArgs");
const Customers_1 = require("../../../models/Customers");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyCustomersResolver = class DeleteManyCustomersResolver {
    async deleteManyCustomers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).customers.deleteMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyCustomersArgs_1.DeleteManyCustomersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyCustomersResolver.prototype, "deleteManyCustomers", null);
DeleteManyCustomersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Customers_1.Customers)
], DeleteManyCustomersResolver);
exports.DeleteManyCustomersResolver = DeleteManyCustomersResolver;
