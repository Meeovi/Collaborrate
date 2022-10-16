"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstCustomer_groupResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstCustomer_groupArgs_1 = require("./args/FindFirstCustomer_groupArgs");
const Customer_group_1 = require("../../../models/Customer_group");
const helpers_1 = require("../../../helpers");
let FindFirstCustomer_groupResolver = class FindFirstCustomer_groupResolver {
    async findFirstCustomer_group(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer_group.findFirst({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCustomer_groupArgs_1.FindFirstCustomer_groupArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstCustomer_groupResolver.prototype, "findFirstCustomer_group", null);
FindFirstCustomer_groupResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Customer_group_1.Customer_group)
], FindFirstCustomer_groupResolver);
exports.FindFirstCustomer_groupResolver = FindFirstCustomer_groupResolver;
