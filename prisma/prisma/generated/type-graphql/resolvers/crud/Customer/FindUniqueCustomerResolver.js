"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCustomerResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueCustomerArgs_1 = require("./args/FindUniqueCustomerArgs");
const Customer_1 = require("../../../models/Customer");
const helpers_1 = require("../../../helpers");
let FindUniqueCustomerResolver = class FindUniqueCustomerResolver {
    async customer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer.findUnique({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCustomerArgs_1.FindUniqueCustomerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueCustomerResolver.prototype, "customer", null);
FindUniqueCustomerResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Customer_1.Customer)
], FindUniqueCustomerResolver);
exports.FindUniqueCustomerResolver = FindUniqueCustomerResolver;
