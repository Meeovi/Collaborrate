"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstRolesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstRolesArgs_1 = require("./args/FindFirstRolesArgs");
const Roles_1 = require("../../../models/Roles");
const helpers_1 = require("../../../helpers");
let FindFirstRolesResolver = class FindFirstRolesResolver {
    async findFirstRoles(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).roles.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Roles_1.Roles, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstRolesArgs_1.FindFirstRolesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstRolesResolver.prototype, "findFirstRoles", null);
FindFirstRolesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Roles_1.Roles)
], FindFirstRolesResolver);
exports.FindFirstRolesResolver = FindFirstRolesResolver;
