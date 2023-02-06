"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueRolesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueRolesArgs_1 = require("./args/FindUniqueRolesArgs");
const Roles_1 = require("../../../models/Roles");
const helpers_1 = require("../../../helpers");
let FindUniqueRolesResolver = class FindUniqueRolesResolver {
    async findUniqueRoles(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).roles.findUnique({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueRolesArgs_1.FindUniqueRolesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueRolesResolver.prototype, "findUniqueRoles", null);
FindUniqueRolesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Roles_1.Roles)
], FindUniqueRolesResolver);
exports.FindUniqueRolesResolver = FindUniqueRolesResolver;
