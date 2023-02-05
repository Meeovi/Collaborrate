"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyRolesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyRolesArgs_1 = require("./args/FindManyRolesArgs");
const Roles_1 = require("../../../models/Roles");
const helpers_1 = require("../../../helpers");
let FindManyRolesResolver = class FindManyRolesResolver {
    async findManyRoles(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).roles.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Roles_1.Roles], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyRolesArgs_1.FindManyRolesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyRolesResolver.prototype, "findManyRoles", null);
FindManyRolesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Roles_1.Roles)
], FindManyRolesResolver);
exports.FindManyRolesResolver = FindManyRolesResolver;
