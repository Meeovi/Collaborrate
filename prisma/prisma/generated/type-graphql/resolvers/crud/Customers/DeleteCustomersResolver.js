"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCustomersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteCustomersArgs_1 = require("./args/DeleteCustomersArgs");
const Customers_1 = require("../../../models/Customers");
const helpers_1 = require("../../../helpers");
let DeleteCustomersResolver = class DeleteCustomersResolver {
    async deleteCustomers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customers.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Customers_1.Customers, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteCustomersArgs_1.DeleteCustomersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteCustomersResolver.prototype, "deleteCustomers", null);
DeleteCustomersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Customers_1.Customers)
], DeleteCustomersResolver);
exports.DeleteCustomersResolver = DeleteCustomersResolver;
