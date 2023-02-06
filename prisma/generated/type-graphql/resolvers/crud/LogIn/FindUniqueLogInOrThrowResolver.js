"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueLogInOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueLogInOrThrowArgs_1 = require("./args/FindUniqueLogInOrThrowArgs");
const LogIn_1 = require("../../../models/LogIn");
const helpers_1 = require("../../../helpers");
let FindUniqueLogInOrThrowResolver = class FindUniqueLogInOrThrowResolver {
    async getLogIn(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).logIn.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => LogIn_1.LogIn, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueLogInOrThrowArgs_1.FindUniqueLogInOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueLogInOrThrowResolver.prototype, "getLogIn", null);
FindUniqueLogInOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => LogIn_1.LogIn)
], FindUniqueLogInOrThrowResolver);
exports.FindUniqueLogInOrThrowResolver = FindUniqueLogInOrThrowResolver;
