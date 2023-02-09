"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneCustomersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneCustomersArgs_1 = require("./args/CreateOneCustomersArgs");
const Customers_1 = require("../../../models/Customers");
const helpers_1 = require("../../../helpers");
let CreateOneCustomersResolver = class CreateOneCustomersResolver {
    async createOneCustomers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).customers.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Customers_1.Customers, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneCustomersArgs_1.CreateOneCustomersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneCustomersResolver.prototype, "createOneCustomers", null);
CreateOneCustomersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Customers_1.Customers)
], CreateOneCustomersResolver);
exports.CreateOneCustomersResolver = CreateOneCustomersResolver;
