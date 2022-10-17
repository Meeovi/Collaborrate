"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyCustomer_groupResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyCustomer_groupArgs_1 = require("./args/FindManyCustomer_groupArgs");
const Customer_group_1 = require("../../../models/Customer_group");
const helpers_1 = require("../../../helpers");
let FindManyCustomer_groupResolver = class FindManyCustomer_groupResolver {
    async customer_groups(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer_group.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Customer_group_1.Customer_group], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyCustomer_groupArgs_1.FindManyCustomer_groupArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyCustomer_groupResolver.prototype, "customer_groups", null);
FindManyCustomer_groupResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Customer_group_1.Customer_group)
], FindManyCustomer_groupResolver);
exports.FindManyCustomer_groupResolver = FindManyCustomer_groupResolver;
