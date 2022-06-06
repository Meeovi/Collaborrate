"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyCustomerResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyCustomerArgs_1 = require("./args/FindManyCustomerArgs");
const Customer_1 = require("../../../models/Customer");
const helpers_1 = require("../../../helpers");
let FindManyCustomerResolver = class FindManyCustomerResolver {
    async customers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Customer_1.Customer], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyCustomerArgs_1.FindManyCustomerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyCustomerResolver.prototype, "customers", null);
FindManyCustomerResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Customer_1.Customer)
], FindManyCustomerResolver);
exports.FindManyCustomerResolver = FindManyCustomerResolver;
