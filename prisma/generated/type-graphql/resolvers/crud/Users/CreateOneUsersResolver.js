"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneUsersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneUsersArgs_1 = require("./args/CreateOneUsersArgs");
const Users_1 = require("../../../models/Users");
const helpers_1 = require("../../../helpers");
let CreateOneUsersResolver = class CreateOneUsersResolver {
    async createOneUsers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).users.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Users_1.Users, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneUsersArgs_1.CreateOneUsersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneUsersResolver.prototype, "createOneUsers", null);
CreateOneUsersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Users_1.Users)
], CreateOneUsersResolver);
exports.CreateOneUsersResolver = CreateOneUsersResolver;
