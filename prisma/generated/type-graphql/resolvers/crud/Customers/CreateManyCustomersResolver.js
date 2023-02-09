"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyCustomersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyCustomersArgs_1 = require("./args/CreateManyCustomersArgs");
const Customers_1 = require("../../../models/Customers");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyCustomersResolver = class CreateManyCustomersResolver {
    async createManyCustomers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).customers.createMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyCustomersArgs_1.CreateManyCustomersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyCustomersResolver.prototype, "createManyCustomers", null);
CreateManyCustomersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Customers_1.Customers)
], CreateManyCustomersResolver);
exports.CreateManyCustomersResolver = CreateManyCustomersResolver;
