"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateUsersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateUsersArgs_1 = require("./args/AggregateUsersArgs");
const Users_1 = require("../../../models/Users");
const AggregateUsers_1 = require("../../outputs/AggregateUsers");
const helpers_1 = require("../../../helpers");
let AggregateUsersResolver = class AggregateUsersResolver {
    async aggregateUsers(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).users.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateUsers_1.AggregateUsers, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateUsersArgs_1.AggregateUsersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateUsersResolver.prototype, "aggregateUsers", null);
AggregateUsersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Users_1.Users)
], AggregateUsersResolver);
exports.AggregateUsersResolver = AggregateUsersResolver;
