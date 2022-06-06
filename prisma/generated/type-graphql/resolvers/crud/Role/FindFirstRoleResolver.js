"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstRoleResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstRoleArgs_1 = require("./args/FindFirstRoleArgs");
const Role_1 = require("../../../models/Role");
const helpers_1 = require("../../../helpers");
let FindFirstRoleResolver = class FindFirstRoleResolver {
    async findFirstRole(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).role.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Role_1.Role, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstRoleArgs_1.FindFirstRoleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstRoleResolver.prototype, "findFirstRole", null);
FindFirstRoleResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Role_1.Role)
], FindFirstRoleResolver);
exports.FindFirstRoleResolver = FindFirstRoleResolver;
