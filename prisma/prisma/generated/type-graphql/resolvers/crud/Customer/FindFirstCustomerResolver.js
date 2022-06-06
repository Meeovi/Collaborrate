"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstCustomerResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstCustomerArgs_1 = require("./args/FindFirstCustomerArgs");
const Customer_1 = require("../../../models/Customer");
const helpers_1 = require("../../../helpers");
let FindFirstCustomerResolver = class FindFirstCustomerResolver {
    async findFirstCustomer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Customer_1.Customer, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCustomerArgs_1.FindFirstCustomerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstCustomerResolver.prototype, "findFirstCustomer", null);
FindFirstCustomerResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Customer_1.Customer)
], FindFirstCustomerResolver);
exports.FindFirstCustomerResolver = FindFirstCustomerResolver;
