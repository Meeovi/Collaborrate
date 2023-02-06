"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueUsersOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueUsersOrThrowArgs_1 = require("./args/FindUniqueUsersOrThrowArgs");
const Users_1 = require("../../../models/Users");
const helpers_1 = require("../../../helpers");
let FindUniqueUsersOrThrowResolver = class FindUniqueUsersOrThrowResolver {
    async findUniqueUsersOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).users.findUniqueOrThrow({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueUsersOrThrowArgs_1.FindUniqueUsersOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueUsersOrThrowResolver.prototype, "findUniqueUsersOrThrow", null);
FindUniqueUsersOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Users_1.Users)
], FindUniqueUsersOrThrowResolver);
exports.FindUniqueUsersOrThrowResolver = FindUniqueUsersOrThrowResolver;
