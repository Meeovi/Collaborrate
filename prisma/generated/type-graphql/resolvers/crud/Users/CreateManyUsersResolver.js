"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyUsersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyUsersArgs_1 = require("./args/CreateManyUsersArgs");
const Users_1 = require("../../../models/Users");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyUsersResolver = class CreateManyUsersResolver {
    async createManyUsers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).users.createMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyUsersArgs_1.CreateManyUsersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyUsersResolver.prototype, "createManyUsers", null);
CreateManyUsersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Users_1.Users)
], CreateManyUsersResolver);
exports.CreateManyUsersResolver = CreateManyUsersResolver;
