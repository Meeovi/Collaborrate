"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstUsersOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstUsersOrThrowArgs_1 = require("./args/FindFirstUsersOrThrowArgs");
const Users_1 = require("../../../models/Users");
const helpers_1 = require("../../../helpers");
let FindFirstUsersOrThrowResolver = class FindFirstUsersOrThrowResolver {
    async findFirstUsersOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).users.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Users_1.Users, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstUsersOrThrowArgs_1.FindFirstUsersOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstUsersOrThrowResolver.prototype, "findFirstUsersOrThrow", null);
FindFirstUsersOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Users_1.Users)
], FindFirstUsersOrThrowResolver);
exports.FindFirstUsersOrThrowResolver = FindFirstUsersOrThrowResolver;
