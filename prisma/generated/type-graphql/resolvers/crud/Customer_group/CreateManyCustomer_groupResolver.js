"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyCustomer_groupResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateManyCustomer_groupArgs_1 = require("./args/CreateManyCustomer_groupArgs");
const Customer_group_1 = require("../../../models/Customer_group");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyCustomer_groupResolver = class CreateManyCustomer_groupResolver {
    async createManyCustomer_group(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).customer_group.createMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyCustomer_groupArgs_1.CreateManyCustomer_groupArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyCustomer_groupResolver.prototype, "createManyCustomer_group", null);
CreateManyCustomer_groupResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Customer_group_1.Customer_group)
], CreateManyCustomer_groupResolver);
exports.CreateManyCustomer_groupResolver = CreateManyCustomer_groupResolver;
