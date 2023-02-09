"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstRolesOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstRolesOrThrowArgs_1 = require("./args/FindFirstRolesOrThrowArgs");
const Roles_1 = require("../../../models/Roles");
const helpers_1 = require("../../../helpers");
let FindFirstRolesOrThrowResolver = class FindFirstRolesOrThrowResolver {
    async findFirstRolesOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).roles.findFirstOrThrow({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstRolesOrThrowArgs_1.FindFirstRolesOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstRolesOrThrowResolver.prototype, "findFirstRolesOrThrow", null);
FindFirstRolesOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Roles_1.Roles)
], FindFirstRolesOrThrowResolver);
exports.FindFirstRolesOrThrowResolver = FindFirstRolesOrThrowResolver;
