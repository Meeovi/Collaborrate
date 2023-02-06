"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyCustomersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyCustomersArgs_1 = require("./args/FindManyCustomersArgs");
const Customers_1 = require("../../../models/Customers");
const helpers_1 = require("../../../helpers");
let FindManyCustomersResolver = class FindManyCustomersResolver {
    async findManyCustomers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).customers.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Customers_1.Customers], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyCustomersArgs_1.FindManyCustomersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyCustomersResolver.prototype, "findManyCustomers", null);
FindManyCustomersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Customers_1.Customers)
], FindManyCustomersResolver);
exports.FindManyCustomersResolver = FindManyCustomersResolver;
