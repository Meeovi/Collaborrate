"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCustomer_groupResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueCustomer_groupArgs_1 = require("./args/FindUniqueCustomer_groupArgs");
const Customer_group_1 = require("../../../models/Customer_group");
const helpers_1 = require("../../../helpers");
let FindUniqueCustomer_groupResolver = class FindUniqueCustomer_groupResolver {
    async customer_group(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer_group.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Customer_group_1.Customer_group, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCustomer_groupArgs_1.FindUniqueCustomer_groupArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueCustomer_groupResolver.prototype, "customer_group", null);
FindUniqueCustomer_groupResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Customer_group_1.Customer_group)
], FindUniqueCustomer_groupResolver);
exports.FindUniqueCustomer_groupResolver = FindUniqueCustomer_groupResolver;
